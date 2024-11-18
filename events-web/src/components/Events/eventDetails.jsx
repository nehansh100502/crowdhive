import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa'; // Import Google Map/Location icon
import { BsChevronRight } from "react-icons/bs";

const EventDetail = () => {
  const { id } = useParams(); // Get the event ID from the URL
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await axios.get(`https://crowdhive.onrender.com/api/v1/events/${id}`);
        setEvent(response.data);
      } catch (error) {
        setError('Error fetching event details');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!event) return <p>No event found.</p>;

  return (
    <>
      <div className="max-w-4xl mx-auto mt-10 px-4">
      <div className="container mx-auto">
          <Link to='/' className='text-blue-700 flex items-center'>
            Home<BsChevronRight className='h-7 w-5 ml-2' />Detail-Event
          </Link>
        </div>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">{event.title}</h2>
        <img
          src={`https://crowdhive.onrender.com/uploads/${event.image}`} // Ensure the URL is correct
          alt={event.title}
          className="w-[350px] h-[190px] object-cover rounded-md mb-2"
        />
        <p className="text-gray-700">
          <strong>City:</strong> {event.city}, {event.state}
        </p>
        <p className="text-gray-700">
          <strong>Event Type:</strong> {event.eventType}
        </p>
        <p className="text-gray-700">
          <strong>Date:</strong> {event.date}
        </p>
        <p className="text-gray-700">
          <strong>Description:</strong> {event.description}
        </p>
        <div className="ml-12 mt-6 mb-24">
        <Link to="https://www.google.com/maps" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
          {/* Add Google Map Icon and Text */}
          <FaMapMarkerAlt className="text-[#2852e8]" size={20} />
          <h2 className="text-[#2852e8] text-lg">View on Google Maps</h2>
        </Link>
      </div>
      </div>
     
    </>
  );
};

export default EventDetail;
