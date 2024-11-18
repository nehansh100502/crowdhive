
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle, FaBars, FaTimes } from "react-icons/fa"; // React Icons

function Headers() {
  const [active, setActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState("");
  const [theme, setTheme] = useState("light-theme");
  const [userProfile, setUserProfile] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle mobile menu

  const navigate = useNavigate();

  useEffect(() => {
    document.body.className = theme;

    const storedUserName = localStorage.getItem("userName");
    if (storedUserName) {
      setUserName(storedUserName);
    }
  }, [theme]);

  useEffect(() => {
    if (dropdownOpen) {
      fetchUserProfile();
    }
  }, [dropdownOpen]);

  function toggleTheme() {
    setTheme((prevTheme) =>
      prevTheme === "light-theme" ? "dark-theme" : "light-theme"
    );
  }

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle mobile menu
  };

  async function fetchUserProfile() {
    const storedData = JSON.parse(localStorage.getItem("userToken"));
    const token = storedData?.token;

    try {
      const response = await fetch("https://crowdhive.onrender.com/api/v1/profile", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Server Error:", errorData);
        alert("Error: " + errorData.message);
      } else {
        const data = await response.json();
        console.log("Profile data:", data);
        setUserProfile(data);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleLogout = async () => {
    const token = localStorage.getItem("userToken");

    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const response = await fetch("https://crowdhive.onrender.com/api/v1/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Logout Error:", errorData);
        alert("Error: " + errorData.error || "Unknown error occurred");
      } else {
        console.log("Logout successful");
        localStorage.removeItem("userToken");
        localStorage.removeItem("userName");
        setUserName("");
        setUserProfile(null);
        navigate("/");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <header>
      <nav className="fixed top-0 left-0 w-full bg-[#ffffff]  flex items-center justify-between px-3 py-2 shadow-md md:px-8">
        <h3 className="text-2xl font-bold text-[#1e6a77]">CrowdHive</h3>
        <button
          className="text-2xl text-[#c87720] md:hidden"
          onClick={toggleMenu}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${menuOpen ? "block" : "hidden"
            } absolute md:static top-16 w-full  md:flex md:items-center md:w-auto font-semibold bg-[white]`}
        >
          <li className="ml-60">
            <Link
              className="block py-2 px-4 text-[#1a8533] hover:bg-gray-100 md:hover:bg-transparent hover:text-black"
              to="/FindEvent"
              onClick={() => setMenuOpen(false)}
            >
              Events
            </Link>
          </li>
          <li className="">
            <Link
              className="block py-2 px-4 text-[#1a8533] hover:bg-gray-100 md:hover:bg-transparent hover:text-black"
              to="/TicketBook"
              onClick={() => setMenuOpen(false)}
            >
              Buy-Ticket
            </Link>
          </li>
          <li className="">
            <Link
              className=" py-2 px-4 text-[#1a8533] hover:bg-gray-100 md:hover:bg-transparent hover:text-black"
              to="/About"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>
          </li>
          <li className="">
            <Link
              className="block py-2 px-4 text-[#1a8533] hover:bg-gray-100 md:hover:bg-transparent hover:text-black"
              to="/Login"
              onClick={() => setMenuOpen(false)}
            >
              Log In
            </Link>
          </li>
          <li className="">
            <Link
              className="block py-2 px-4 text-[#1a8533] hover:bg-gray-100 md:hover:bg-transparent hover:text-black"
              to="/SignUp"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </li>
        </ul>


        {/* User Profile and Theme Toggle */}
        <div className="flex items-center space-x-4">

          {/* User Icon with Dropdown */}
          <div className="relative">
            <button onClick={toggleDropdown} className="flex items-center font-semibold">
              <FaUserCircle className="text-[#1a8533] h-7 w-7 " />
              <span className=" ml-2 font-medium">  My Account</span>
              {userName && (
                <span className="ml-2 font-semibold">

                  {userName.toUpperCase()}
                </span>
              )}
            </button>
            {dropdownOpen && (
              <div
                className="absolute right-0 mt-7 w-44 bg-white border rounded-md shadow-lg pl-4 "
                onMouseLeave={closeDropdown}
              >
                {/* User Profile Info */}
                {userProfile ? (
                  <div className="p-3">
                    <p className="text-lg bg-[#ffffffce] text-[black] hover:text-green-700 p-2">
                      {userProfile.username.toUpperCase()}
                    </p>

                  </div>
                ) : (
                  <div className=" text-[#1a8533] pt-4">
                    <p>Loading profile...</p>
                  </div>
                )}
                <ul>
                  <li className="md:mt-2">
                    <Link
                      className=" py-2 px-4 text-[#1a8533] hover:bg-gray-100  hover:text-black"
                      to="/About"
                      onClick={() => setMenuOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="md:mt-2">
                    <Link
                      className=" py-2 px-4 text-[#1a8533] hover:bg-gray-100 hover:text-black"
                      to="/BlogList"
                      onClick={() => setMenuOpen(false)}
                    >
                      Blog
                    </Link>
                  </li>
                  <Link
              className="block py-2 px-4 text-[#1a8533] hover:bg-gray-100 md:hover:bg-transparent hover:text-black"
              to="/TicketBook"
              onClick={() => setMenuOpen(false)}
            >
              Buy-Ticket
            </Link>
                  <li className="">
                    <Link
                      className=" py-2 px-4 text-[#1a8533] hover:bg-gray-100 hover:text-black"
                      to="/createEvent"
                      onClick={() => setMenuOpen(false)}
                    >
                      CreateEvent
                    </Link>
                  </li>
                  <li className="md:mt-2">
                    <Link
                      className="py-2 px-4 text-[#1a8533] hover:bg-gray-100  hover:text-black"
                      to="/Event"
                      onClick={() => setMenuOpen(false)}
                    >
                      Find-Events
                    </Link>
                  </li>
                  <li className="md:mt-2">
                    <Link
                      className=" py-2 px-4 text-[#1a8533] hover:text-red-600"
                      to="/deleteEvent"
                      onClick={() => setMenuOpen(false)}
                    >
                      Delete Events
                    </Link>
                  </li>
                </ul>
                <button
                  className="px-4 py-2 text-[#d82448] w-full text-left mb-6"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Headers;

