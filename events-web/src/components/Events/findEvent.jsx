import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { BsChevronRight } from "react-icons/bs";

const FindEvent = () => {
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedEventType, setSelectedEventType] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [events, setEvents] = useState([]); // Store original events
  const [filteredEvents, setFilteredEvents] = useState([]); // Store filtered events

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('https://crowdhive.onrender.com/api/v1/events');
        setEvents(response.data);
        setFilteredEvents(response.data); // Initialize filteredEvents with all events
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const applyFilters = () => {
    const filtered = events.filter(event => {
      const isStateMatch = !selectedState || event.state === selectedState;
      const isCityMatch = !selectedCity || event.city === selectedCity;
      const isEventTypeMatch = !selectedEventType || event.eventType === selectedEventType;
      const isDateMatch = !selectedDate || event.date === selectedDate;
      return isStateMatch && isCityMatch && isEventTypeMatch && isDateMatch;
    });

    setFilteredEvents(filtered);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedState, selectedCity, selectedEventType, selectedDate]);

  return (
    <>
    <div className='bg-[#95e3fd]'>
    <div className="max-w-4xl mx-auto mt-1 px-4">
        <div className="container mx-auto">
          <Link to='/' className='text-blue-700 flex items-center'>
            Home<BsChevronRight className='h-7 w-5 ml-2' />Find-Events
          </Link>
        </div>
      <h2 className="text-3xl font-bold text-center text-[#266585] mb-6">Find Events Here</h2>
      <h2 className="text-xl text-center text-[#1a181b] mb-6">Explore events with CrowdHive</h2>
      <hr className='h-1 bg-white w-full'/>
      {/* Events Display */}
      <div className="flex flex-row flex-wrap">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event, index) => (
            <div
              key={index}
              className="p-4 bg-[#ffffffe9] rounded-md shadow-md w-[380px] h-[380px] m-4 flex flex-col items-center hover:bg-[#8deff5ba] cursor-pointer font-bold "
            >
             {/* <img
  src={`https://crowdhive.onrender.com/uploads/eventA.jpg`}
  alt={event.title}
  className="w-full h-[190px] object-cover rounded-md mb-2"
  onError={(e) => (e.target.src = 'eventA.jpg')}
/> */}

<img
  src={`https://crowdhive.onrender.com/uploads/${event.image || 'eventA.jpg'}`}
  alt={event.title}
  className="w-full h-[190px] object-cover rounded-md mb-2"
  onError={(e) => (e.target.src = 'https://via.placeholder.com/400x200?text=No+Image')}
/>



              <h3 className="text-lg">{event.title}</h3>
              <p className="text-gray-700">{event.city}, {event.state}</p>
              <p className="text-gray-700">{event.eventType}</p>
              <p className="text-gray-700">{event.date}</p>
              <p className="text-gray-700">
                {event.description.length > 50
                  ? `${event.description.substring(0, 50)}...`
                  : event.description}
              </p>
              <Link
                to={`/events/${event._id}`} // Use Link from react-router-dom for navigation
                className="text-blue-500 hover:text-blue-600 underline"
              >
                Read more
              </Link>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    </div>
    <footer>
      <div className='h-30 bg-[#beeee6]'>
        <div>
        <h2 className='text-center text-black font-semibold p-11 hover:text-red-600'>Find out all events here with CrowdHive :) 🙂</h2>
        </div>
      </div>
    </footer>
    </div>
    </>
  );
};

export default FindEvent;

