// // import React, { useState, useEffect } from 'react';
// // import './landingPage.css';
// // import Header from '../headers.jsx';
// // import Footer from '../Footer/footer';
// // import { BsBoxArrowInUpRight } from "react-icons/bs";
// // import { Link } from 'react-router-dom';

// // import image1 from '../../assets/eventA.jpg';
// // import image2 from '../../assets/eventB.jpg';
// // import image3 from '../../assets/eventA.jpg';
// // import image4 from '../../assets/eventE.jpg';

// // function LandingPage() {
// //   const images = [image1, image2, image3, image4];
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);

// //   // Form state
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');
// //   const [submitStatus, setSubmitStatus] = useState(null);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
// //     }, 5000);
// //     return () => clearInterval(interval);
// //   }, [images.length]);

// //   // Handle form submission
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const response = await fetch('http://localhost:4001/api/v1/contact', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ email, message }),
// //       });

// //       if (response.ok) {
// //         setSubmitStatus('Form submitted successfully!');
// //         setEmail('');
// //         setMessage('');
// //       } else {
// //         setSubmitStatus('Failed to submit form');
// //       }
// //     } catch (error) {
// //       console.error('Error submitting form:', error);
// //       setSubmitStatus('Error submitting form');
// //     }
// //   };

// //   return (
// //     <>
// //       <div>
// //         {/* <div className='landing-page-bg' style={{ backgroundImage: `url(${images[currentImageIndex]})` }}> */}
// //         <div className='landing-page-overlay'>
// //           <Header />
// //           <div className='px-6 md:px-28 md:mt-9 landing-page-content'>
// //             <section class="hero bg-cover text-center py-20">
// //               <div class="container mx-auto">
// //                 <h1 class="text-4xl font-bold bg-gradient-to-r from-[red] via-[#e6a939] to-[green] text-transparent bg-clip-text pt-11">Join Us at CrowdHive</h1>
// //                 <p class="text-xl text-[blue] mt-4">
// //                   Discover groundbreaking talks, exciting performances, and interactive workshops!
// //                 </p>
// //                 <a href="#register" class="mt-6 inline-block bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 border-2 border-white">Register Now</a>
// //               </div>
// //             </section>
// //             <hr className='bg-[#064fef] w-full h-2 mb-12 border-2 border-white'/>
// //             <div className='text-[#1e49e4d9] text-center text-lg font pt-20'>
// //               Plan your dream event effortlessly with ! From weddings 💍 to corporate events, we've got you covered. Let us turn your ideas into reality! 🌟
// //             </div>
// //             <div className='text-center'>
// //               <Link to='/Event'>
// //                 <button className='h-14 w-full md:w-56 bg-white hover:bg-[#f7f7f8e7] text-[blue] font-bold font-serif mt-7 rounded flex items-center justify-center mx-auto mb-32 border-2 border-[#00bbff]'>
// //                   Explore Events Here
// //                   <BsBoxArrowInUpRight className='ml-2 text-white' />
// //                 </button>
// //               </Link>
// //             </div>
// //             <section class="overview py-16 bg-gray-100 rounded-lg border-2 border-[#12f991]">
// //               <div class="container mx-auto text-center ">
// //                 <h2 class="text-3xl font-bold">About the Event</h2>
// //                 <p class="text-lg mt-4">
// //                 CrowdHive is a premier event where thought leaders, and creatives come together to share insights, network, and explore the latest trends. Whether you're interested in technology, art, or business, we have something for you.
// //                 </p>
// //                 <div class="mt-6">
// //                   <a href="#learn-more" class="bg-blue-500 text-white py-2 px-6 rounded-lg font-semibold hover:bg-blue-700 border-2 border-[black]">Learn More</a>
// //                 </div>
// //               </div>
// //             </section>
// //             <section class="event-cards py-16">
// //               <div class="container mx-auto">
// //                 <h2 class="text-center text-3xl font-bold">Upcoming Events</h2>
// //                 <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

// //                   {/* <!-- Event Card 1 --> */}
// //                   <div class="bg-white shadow-lg rounded-lg overflow-hidden">
// //                     {/* <img class="w-full h-48 object-cover" src="path-to-event-image-1.jpg" alt="Event 1"> */}
// //                     <div class="p-6">
// //                       <h3 class="text-xl font-semibold mb-2">Tech Innovators Conference</h3>
// //                       <p class="text-gray-600">Join us for a deep dive into the latest advancements in technology.</p>
// //                       <a href="#register" class="text-blue-500 mt-4 inline-block">Learn More</a>
// //                     </div>
// //                   </div>

// //                   {/* <!-- Event Card 2 --> */}
// //                   <div class="bg-white shadow-lg rounded-lg overflow-hidden">
// //                     {/* <img class="w-full h-48 object-cover" src="path-to-event-image-2.jpg" alt="Event 2"> */}
// //                     <div class="p-6">
// //                       <h3 class="text-xl font-semibold mb-2">Design Thinking Workshop</h3>
// //                       <p class="text-gray-600">Hands-on workshop focused on creative problem solving and design strategies.</p>
// //                       <a href="#register" class="text-blue-500 mt-4 inline-block">Learn More</a>
// //                     </div>
// //                   </div>

// //                   {/* <!-- Event Card 3 --> */}
// //                   <div class="bg-white shadow-lg rounded-lg overflow-hidden">
// //                     {/* <img class="w-full h-48 object-cover" src="path-to-event-image-3.jpg" alt="Event 3"> */}
// //                     <div class="p-6">
// //                       <h3 class="text-xl font-semibold mb-2">Art & Technology Expo</h3>
// //                       <p class="text-gray-600">Explore the intersection of art and technology through exhibitions and talks.</p>
// //                       <a href="#register" class="text-blue-500 mt-4 inline-block">Learn More</a>
// //                     </div>
// //                   </div>

// //                 </div>
// //               </div>
// //             </section>
// //             <section class="cta bg-blue-600 text-white py-16 text-center rounded-lg">
// //               <div class="container mx-auto">
// //                 <h2 class="text-2xl font-bold text-[#dad6d6]">Don't Miss Out on CrowdHive!</h2>
// //                 <p class="mt-4 text-lg text-white p-6">Get your tickets now and be a part of this exciting event!</p>
// //                 <a href="#register" class="mt-6 inline-block bg-white text-blue-600 py-2 px-6 rounded-lg font-semibold hover:bg-gray-100">Register Now</a>
// //               </div>
// //             </section>
// //             <div className='bg-[white] mt-12 p-8 rounded-lg mx-auto w-full md:w-2/3 mb-16'>
// //               <h3 className='text-black text-lg text-center'>Contact Us for More Information</h3>
// //               <form onSubmit={handleSubmit}>
// //                 <input
// //                   type='email'
// //                   placeholder='Enter Email Here'
// //                   value={email}
// //                   onChange={(e) => setEmail(e.target.value)}
// //                   className='w-full bg-gray-300 h-10 rounded px-4 mt-4'
// //                   required
// //                 />
// //                 <textarea
// //                   placeholder='Your Message'
// //                   value={message}
// //                   onChange={(e) => setMessage(e.target.value)}
// //                   className='w-full bg-gray-300 h-24 rounded px-4 mt-4'
// //                   required
// //                 ></textarea>

// //                 <div className='text-center'>
// //                   <button type='submit' className='bg-[#0b59e9] text-white px-8 py-2 rounded mt-4 hover:bg-[#189db8]'>
// //                     Contact Us
// //                   </button>
// //                 </div>
// //               </form>

// //               {/* Show submit status message */}
// //               {submitStatus && <p className="text-white text-center mt-4">{submitStatus}</p>}
// //             </div>
// //           </div>

// //           <Footer />
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// // export default LandingPage;




// import React, { useState, useEffect } from 'react';
// import './landingPage.css';
// import Header from '../headers.jsx';
// import Footer from '../Footer/footer';
// import { BsBoxArrowInUpRight } from "react-icons/bs";
// import { Link } from 'react-router-dom';

// import image1 from '../../assets/eventA.jpg';
// import image2 from '../../assets/eventB.jpg';
// import image3 from '../../assets/eventA.jpg';
// import image4 from '../../assets/eventE.jpg';

// function LandingPage() {
//   const images = [image1, image2, image3, image4];
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [submitStatus, setSubmitStatus] = useState(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:4001/api/v1/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email, message }),
//       });
//       if (response.ok) {
//         setSubmitStatus('Form submitted successfully!');
//         setEmail('');
//         setMessage('');
//       } else {
//         setSubmitStatus('Failed to submit form');
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//       setSubmitStatus('Error submitting form');
//     }
//   };

//   return (
//     <>
//       <div>
//         <div className='landing-page-overlay'>
//           <Header />
//           <div className='px-6 md:px-28 md:mt-9 landing-page-content'>
//             {/* Hero Section */}
//             <section className="hero bg-cover text-center py-20">
//               <div className="container mx-auto">
//                 <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text pt-11">
//                   Join Us at CrowdHive
//                 </h1>
//                 <p className="text-2xl text-gray-700 mt-4 font-light">
//                   Discover groundbreaking talks, exciting performances, and interactive workshops!
//                 </p>
//                 <a href="#register" className="mt-6 inline-block bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 ease-in-out">
//                   Register Now
//                 </a>
//               </div>
//             </section>

//             <hr className="bg-blue-500 w-full h-1 mb-12 border-none" />

//             {/* Event Description */}
//             <div className="text-blue-700 text-center text-lg font-light pt-20">
//               Plan your dream event effortlessly with CrowdHive! From weddings 💍 to corporate events, we've got you covered. Let us turn your ideas into reality! 🌟
//             </div>
//             <div className="text-center">
//               <Link to="/Event">
//                 <button className="h-14 w-full md:w-56 bg-white hover:bg-gray-100 text-blue-600 font-semibold mt-7 rounded flex items-center justify-center mx-auto mb-32 border-2 border-blue-500 transition duration-300 ease-in-out">
//                   Explore Events Here
//                   <BsBoxArrowInUpRight className="ml-2 text-blue-600" />
//                 </button>
//               </Link>
//             </div>

//             {/* About Section */}
//             <section className="overview py-16 bg-gray-100 rounded-lg shadow-lg">
//               <div className="container mx-auto text-center">
//                 <h2 className="text-4xl font-bold text-gray-800">About the Event</h2>
//                 <p className="text-lg mt-4 text-gray-600">
//                   CrowdHive is a premier event where thought leaders, and creatives come together to share insights, network, and explore the latest trends. Whether you're interested in technology, art, or business, we have something for you.
//                 </p>
//                 <div className="mt-6">
//                   <a href="#learn-more" className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
//                     Learn More
//                   </a>
//                 </div>
//               </div>
//             </section>

//             {/* Event Cards */}
//             <section className="event-cards py-16">
//               <div className="container mx-auto">
//                 <h2 className="text-center text-4xl font-bold text-gray-800">Upcoming Events</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">

//                   {/* Event Card 1 */}
//                   <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
//                     <div className="p-6">
//                       <h3 className="text-xl font-semibold mb-2 text-gray-800">Tech Innovators Conference</h3>
//                       <p className="text-gray-600">Join us for a deep dive into the latest advancements in technology.</p>
//                       <a href="#register" className="text-blue-500 mt-4 inline-block hover:underline">Learn More</a>
//                     </div>
//                   </div>

//                   {/* Event Card 2 */}
//                   <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
//                     <div className="p-6">
//                       <h3 className="text-xl font-semibold mb-2 text-gray-800">Design Thinking Workshop</h3>
//                       <p className="text-gray-600">Hands-on workshop focused on creative problem solving and design strategies.</p>
//                       <a href="#register" className="text-blue-500 mt-4 inline-block hover:underline">Learn More</a>
//                     </div>
//                   </div>

//                   {/* Event Card 3 */}
//                   <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
//                     <div className="p-6">
//                       <h3 className="text-xl font-semibold mb-2 text-gray-800">Art & Technology Expo</h3>
//                       <p className="text-gray-600">Explore the intersection of art and technology through exhibitions and talks.</p>
//                       <a href="#register" className="text-blue-500 mt-4 inline-block hover:underline">Learn More</a>
//                     </div>
//                   </div>

//                 </div>
//               </div>
//             </section>

//             {/* CTA Section */}
//             <section className="cta bg-gradient-to-r from-blue-600 to-green-500 text-white py-16 text-center rounded-lg">
//               <div className="container mx-auto">
//                 <h2 className="text-3xl font-bold">Don't Miss Out on CrowdHive!</h2>
//                 <p className="mt-4 text-lg">Get your tickets now and be a part of this exciting event!</p>
//                 <a href="#register" className="mt-6 inline-block bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
//                   Register Now
//                 </a>
//               </div>
//             </section>

//             {/* Contact Form */}
//             <div className="bg-white mt-12 p-8 rounded-lg shadow-lg mx-auto w-full md:w-2/3 mb-16">
//               <h3 className="text-gray-800 text-lg text-center font-semibold">Contact Us for More Information</h3>
//               <form onSubmit={handleSubmit}>
//                 <input
//                   type='email'
//                   placeholder='Enter Email Here'
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className='w-full bg-gray-200 h-10 rounded px-4 mt-4 outline-none focus:ring-2 focus:ring-blue-500'
//                   required
//                 />
//                 <textarea
//                   placeholder='Your Message'
//                   value={message}
//                   onChange={(e) => setMessage(e.target.value)}
//                   className='w-full bg-gray-200 h-24 rounded px-4 mt-4 outline-none focus:ring-2 focus:ring-blue-500'
//                   required
//                 ></textarea>

//                 <div className='text-center'>
//                   <button type='submit' className='bg-blue-600 text-white px-8 py-2 rounded mt-4 hover:bg-blue-700 transition-all duration-300'>
//                     Contact Us
//                   </button>
//                 </div>
//               </form>

//               {submitStatus && <p className="text-gray-800 text-center mt-4">{submitStatus}</p>}
//             </div>
//           </div>

//           <Footer />
//         </div>
//       </div>
//     </>
//   );
// }

// export default LandingPage;

import React, { useState, useEffect } from 'react';
import './landingPage.css';
import Header from '../headers.jsx';
import Footer from '../Footer/footer';
import { BsBoxArrowInUpRight } from "react-icons/bs";
import { Link } from 'react-router-dom';
import ImageGallery from '../LandingPage/imageGallery'; // Import the ImageGallery component

import image1 from '../../assets/eventA.jpg';
import image2 from '../../assets/eventB.jpg';
import image3 from '../../assets/eventC.jpg';
import image4 from '../../assets/eventE.jpg';

function LandingPage() {
  const images = [image1, image2, image3, image4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://crowdhive.onrender.com/api/v1/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });
      if (response.ok) {
        setSubmitStatus('Form submitted successfully!');
        setEmail('');
        setMessage('');
      } else {
        setSubmitStatus('Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('Error submitting form');
    }
  };

  return (
    <>
      <div>
        <div className='landing-page-overlay'>
          <Header />
          <div className='px-6 md:px-28 md:mt-9 landing-page-content'>
            {/* Hero Section */}
            <section className="hero bg-cover text-center py-20">
              <div className="container mx-auto">
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text pt-11">
                  Join Us at CrowdHive
                </h1>
                <p className="text-2xl text-gray-700 mt-4 font-light">
                  Discover groundbreaking talks, exciting performances, and interactive workshops!
                </p>
                <Link to="/TicketBook" className="mt-6 inline-block bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
                  Register Now
                </Link>
              </div>
            </section>

            <hr className="bg-white w-full h-1 mb-1 border-none" />

            {/* Event Description */}
            <div className="text-blue-700 text-center text-lg font-light pt-20">
              Plan your dream event effortlessly with CrowdHive! From weddings 💍 to corporate events, we've got you covered. Let us turn your ideas into reality! 🌟
            </div>
            <div className="text-center">
              <Link to="/Event">
                <button className="h-14 w-full md:w-56 bg-white hover:bg-gray-100 text-blue-600 font-semibold mt-7 rounded flex items-center justify-center mx-auto mb-32 border-2 border-blue-500 transition duration-300 ease-in-out">
                  Explore Events Here
                  <BsBoxArrowInUpRight className="ml-2 text-blue-600" />
                </button>
              </Link>
            </div>

            {/* About Section */}
            <section className="overview py-16 bg-gray-100 rounded-lg shadow-lg">
              <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800">About the Event</h2>
                <p className="text-lg mt-4 text-gray-600">
                  CrowdHive is a premier event where thought leaders, and creatives come together to share insights, network, and explore the latest trends. Whether you're interested in technology, art, or business, we have something for you.
                </p>
                <div className="mt-6">
                  <Link to="/TicketBook" className="bg-blue-600 text-white py-3 px-8 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300">
                    Learn More
                  </Link>
                </div>
              </div>
            </section>

            {/* Event Cards */}
            <section className="event-cards py-16">
              <div className="container mx-auto">
                <h2 className="text-center text-4xl font-bold text-gray-800">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10">

                  {/* Event Card 1 */}
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <img className="w-full h-48 object-cover" src={image1} alt="Tech Innovators Conference" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Tech Innovators Conference</h3>
                      <p className="text-gray-600">Join us for a deep dive into the latest advancements in technology.</p>
                      <Link to="/BlogList" className="text-blue-500 mt-4 inline-block hover:underline">Learn More</Link>
                    </div>
                  </div>

                  {/* Event Card 2 */}
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <img className="w-full h-48 object-cover" src={image2} alt="Design Thinking Workshop" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Design Thinking Workshop</h3>
                      <p className="text-gray-600">Hands-on workshop focused on creative problem solving and design strategies.</p>
                      <Link to="/BlogList" className="text-blue-500 mt-4 inline-block hover:underline">Learn More</Link>
                    </div>
                  </div>

                  {/* Event Card 3 */}
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                    <img className="w-full h-48 object-cover" src={image3} alt="Art & Technology Expo" />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2 text-gray-800">Art & Technology Expo</h3>
                      <p className="text-gray-600">Explore the intersection of art and technology through exhibitions and talks.</p>
                      <Link to="/BlogList" className="text-blue-500 mt-4 inline-block hover:underline">Learn More</Link>
                    </div>
                  </div>

                </div>
              </div>
            </section>


            {/* // Add ImageGallery where you want it to appear in your layout */}
            <section className="gallery-section">
              {/* <ImageGallery /> */}
            </section>


            {/* CTA Section */}
            <section className="cta bg-gradient-to-r from-blue-600 to-green-500 text-white py-16 text-center rounded-lg">
              <div className="container mx-auto">
                <h2 className="text-3xl font-bold">Don't Miss Out on CrowdHive!</h2>
                <p className="mt-4 text-lg">Get your tickets now and be a part of this exciting event!</p>
                <Link to="/TicketBook" className="mt-6 inline-block bg-white text-blue-600 py-3 px-8 rounded-lg font-semibold hover:bg-gray-200 transition-all duration-300">
                  Register Now
                </Link>
              </div>
            </section>

            {/* Contact Form */}
            <div className="bg-white mt-12 p-8 rounded-lg shadow-lg mx-auto w-full md:w-2/3 mb-16">
              <h3 className="text-gray-800 text-lg text-center font-semibold">Contact Us for More Information</h3>
              <form onSubmit={handleSubmit}>
                <input
                  type='email'
                  placeholder='Enter Email Here'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='w-full bg-gray-200 h-10 rounded px-4 mt-4 outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
                <textarea
                  placeholder='Your Message'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className='w-full bg-gray-200 h-24 rounded px-4 mt-4 outline-none focus:ring-2 focus:ring-blue-500'
                  required
                ></textarea>

                <div className='text-center'>
                  <button type='submit' className='bg-blue-600 text-white px-8 py-2 rounded mt-4 hover:bg-blue-700 transition-all duration-300'>
                    Contact Us
                  </button>
                </div>
              </form>

              {submitStatus && <p className="text-gray-800 text-center mt-4">{submitStatus}</p>}
            </div>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default LandingPage;
