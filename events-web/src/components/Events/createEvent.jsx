import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsChevronRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const CreateEvent = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    city: "",
    state: "",
    eventType: "",
    description: "",
    image: null,
  });

  // State for error or success messages
  const [message, setMessage] = useState("");
  ;
  // State for events (for listing and deleting events)
  const [events, setEvents] = useState([]);

  // Handle form field change
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({
        ...formData,
        [name]: files[0], // Handle file input separately
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  // Fetch all events to display in the list
  const fetchEvents = async () => {
    try {
      const response = await axios.get("https://crowdhive.onrender.com/api/v1/events");
      setEvents(response.data); // Assuming the response data is an array of events
    } catch (error) {
      console.error("Error fetching events", error);
    }
  };

  // Call fetchEvents on component mount
  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a form data object for file uploads
    const data = new FormData();
    data.append("title", formData.title);
    data.append("date", formData.date);
    data.append("city", formData.city);
    data.append("state", formData.state);
    data.append("eventType", formData.eventType);
    data.append("description", formData.description);
    if (formData.image) {
      data.append("image", formData.image);
    }

    // Get the stored token from localStorage
    const tokenData = localStorage.getItem("userToken");
    const token = tokenData ? JSON.parse(tokenData).token : null;

    if (!token) {
      setMessage("Error: No valid token found. Please log in.");
      return;
    }

    try {
      // Post the form data to the backend, including the token in headers
      const response = await axios.post("https://crowdhive.onrender.com/api/v1/events", data, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`, // Include token in the request headers
        },
      });
      setMessage("Event created successfully!");
      alert('Event created successfully!'); // Popup message

      // Clear form after successful submission
      setFormData({
        title: "",
        date: "",
        city: "",
        state: "",
        eventType: "",
        description: "",
        image: null,
      });
      // Fetch updated events after adding new event
      fetchEvents();
    } catch (error) {
      setMessage("Error creating event. Please try again.");
      console.error(error);
    }
  };

  // Handle event deletion
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await axios.delete(`https://crowdhive.onrender.com/api/v1/events/${id}`);
        setMessage("Event deleted successfully!");
        // Fetch updated events after deletion
        fetchEvents();
      } catch (error) {
        setMessage("Error deleting event. Please try again.");
        console.error(error);
      }
    }
  };
  return (
    <div className="max-w-2xl mx-auto mt-10 px-4 bg-[#d0d4d0a6]">
      <div className="container mx-auto">
        <Link to='/' className='text-blue-700 flex items-center'>
          Home<BsChevronRight className='h-7 w-5 ml-2' />Create-Events
        </Link>
      </div>
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-3">Create a New Event with CrowdHive</h2>
      <h2 className="text-base text-center text-red-400 mb-2">*This Page Only For Events-Creator!</h2>
      {message && <p className="bg-blue-100 text-blue-800 p-3 rounded mb-4 text-center">{message}</p>}

      {/* Form to create an event */}
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {/* Event Title */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Event Title</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            placeholder="Enter event title"
          />
        </div>

        {/* Event Date */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Event Date</label>
          <input
            type="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Event City */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">City</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            placeholder="Enter city"
          />
        </div>

        {/* Event State */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">State</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            placeholder="Enter state"
          />
        </div>

        {/* Event Type */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Event Type</label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
            placeholder="Enter event type"
          />
        </div>

        {/* Event Description */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Description</label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="4"
            required
            placeholder="Enter event description"
          />
        </div>

        {/* Event Image */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Event Image</label>
          <input
            type="file"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            name="image"
            onChange={handleChange}
            accept="image/*"
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Event
          </button>
        </div>
      </form>

    </div>
  );
};

export default CreateEvent;
