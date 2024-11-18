// // src/components/EventList.jsx
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function EventList() {
//   const [events, setEvents] = useState([]); // Array to hold events
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   // Fetch events when the component mounts
//   useEffect(() => {
//     async function fetchEvents() {
//       try {
//         const response = await axios.get('http://localhost:4001/api/v1/events');
//         // Ensure `response.data` contains the events array
//         setEvents(response.data.events || []);
//       } catch (error) {
//         console.error('Error fetching events:', error);
//         setError('An error occurred while fetching events.');
//       } finally {
//         setLoading(false); // Always stop the loading spinner once the request finishes
//       }
//     }

//     fetchEvents();
//   }, []);

//   // Function to handle event deletion
//   const handleDelete = async (eventId) => {
//     if (window.confirm("Are you sure you want to delete this event?")) {
//       try {
//         await axios.delete(`http://localhost:4001/api/v1/events/${eventId}`);
//         // Remove the deleted event from the state
//         setEvents(events.filter((event) => event._id !== eventId));
//         alert('Event deleted successfully!');
//       } catch (error) {
//         console.error('Error deleting event:', error);
//         setError('An error occurred while deleting the event.');
//       }
//     }
//   };

//   if (loading) {
//     return <div>Loading events...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className="p-8">
//       <h2 className="text-xl font-bold text-[#217c90]">Your Events</h2>
//       {events.length === 0 ? (
//         <p>You have no events to delete.</p>
//       ) : (
//         <ul className="mt-4 space-y-4">
//           {events.map((event) => (
//             <li
//               key={event._id}
//               className="p-4 border rounded-lg flex justify-between items-center"
//             >
//               <div>
//                 <h3 className="text-lg font-semibold">{event.title}</h3>
//                 <p>{event.description}</p>
//               </div>
//               <button
//                 onClick={() => handleDelete(event._id)}
//                 className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
//               >
//                 Delete
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default EventList;
// src/components/EventList.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function EventList() {
  const [events, setEvents] = useState([]); // Array to hold events
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  // Fetch events when the component mounts
  useEffect(() => {
    async function fetchEvents() {
      try {
        const response = await axios.get('https://crowdhive.onrender.com/api/v1/events');
        // Ensure the response contains the events array
        setEvents(response.data || []); // Adjust if response data structure is different
      } catch (error) {
        console.error('Error fetching events:', error);
        setError('An error occurred while fetching events.');
      } finally {
        setLoading(false); // Always stop the loading spinner once the request finishes
      }
    }

    fetchEvents();
  }, []);

  // Function to handle event deletion
  const handleDelete = async (eventId) => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      try {
        await axios.delete(`https://crowdhive.onrender.com/api/v1/events/${eventId}`);
        // Remove the deleted event from the state
        setEvents(events.filter((event) => event._id !== eventId));
        alert('Event deleted successfully!');
      } catch (error) {
        console.error('Error deleting event:', error);
        setError('An error occurred while deleting the event.');
      }
    }
  };

  if (loading) {
    return <div>Loading events...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold text-[#217c90]">Your Events</h2>
      {events.length === 0 ? (
        <p>You have no events to delete.</p>
      ) : (
        <ul className="mt-4 space-y-4">
          {events.map((event) => (
            <li
              key={event._id}
              className="p-4 border rounded-lg flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-semibold">{event.title}</h3>
                <p>{event.description}</p>
              </div>
              <button
                onClick={() => handleDelete(event._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default EventList;

