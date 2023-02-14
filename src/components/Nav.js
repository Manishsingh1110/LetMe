import React, { useState, useEffect, useContext } from 'react'
import {
  Link,
  useLocation
} from "react-router-dom";

import statecontext from '../context/statecontext'
const Nav = (props) => {
  var {searchedzip,setsearchedzip,filteritem} = useContext(statecontext)
  const [togglenav, settogglenav] = useState(false)
  const [togglesmallnav, settogglesmallnav] = useState(false)
  const [height, setheight] = useState(false)
  function handleclicknav() {
    if (togglenav) {
      settogglenav(false)
    } else {
      settogglenav(true)
    }
  }
  function handleclicksmallnav() {
    if (togglesmallnav) {
      settogglesmallnav(false)
    } else {
      settogglesmallnav(true)
    }
  }

  useEffect(() => {
    const fun2 = () => {
      if (window.scrollY > props.detailheight) {
        setheight(true);
      }
      else {
        setheight(false);
      }

    }
    window.scrollTo(0, 0)
    window.addEventListener('scroll', fun2);

  }, [])

  
  const onchange = (e) => {
    setsearchedzip({ ...searchedzip, [e.target.name]: e.target.value })
}

const handleclick = (e) => {
  e.preventDefault();
  filteritem(searchedzip.zip)
}

  return (
    <header className="text-gray-600 body-font bg-slate-100 ">
      <nav className={`${height ? "px-2 sm:px-4 py-2.5  bg-gradient-to-b from-green-100 to-gray-200 shadow-2xl border-b-1 rounded-sm  z-50 w-full  border-teal-800 dark:bg-gray-900 dark:border-gray-700 fixed  top-0 left-0" : "px-2 sm:px-4 py-2.5 bg-white fixed w-full z-20 top-0 left-0 "}`}>
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <Link to="#" className="flex items-center">
            <img src="../assets/img/mlogo.png" className="h-6  sm:h-10" alt="Flowbite Logo" />
            <span className="self-center text-xl whitespace-nowrap dark:text-white font-bold">LetMe</span>
          </Link>
          <button data-collapse-toggle="navbar-dropdown" type="button" onClick={handleclicknav} className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
          </button>
          <div className={`${togglenav ? 'block' : 'hidden'} w-full md:block md:w-auto`} id="navbar-dropdown">
            <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <Link to="/" className="block text-white py-2 pl-3 pr-4  bg-teal-700 rounded md:bg-transparent  md:p-0 md:text-teal-500 dark:bg-teal-600 md:dark:bg-transparent" aria-current="page">Home</Link>
              </li>
              <li>
                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" onClick={handleclicksmallnav} className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-teal-700 md:p-0 md:w-auto dark:text-gray-400 dark:hover:text-white dark:focus:text-white dark:border-gray-700  md:dark:hover:bg-transparent">Hospitals <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg></button>
                <div id="dropdownNavbar" className={`z-10 ${togglesmallnav ? 'block absolute' : 'hidden'}  font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600 `}>
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                    <li>
                      <Link to="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-teal-500">All Hospitals</Link>
                    </li>
                    <li>
                      <Link to="/Dentists" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-teal-500">Dentists</Link>
                    </li>
                    <li>
                      <Link to="/Dermatologists" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-teal-500">Dermatologists</Link>
                    </li>

                    <li>
                      <Link to="/Pathologist" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-teal-500">Pathologist</Link>
                    </li>
                  </ul>
                  <div className="py-1">
                    <Link to="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-400 hover:text-teal-500">Sign out</Link>
                  </div>
                </div>
              </li>
              <li>
                <Link to="#" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0  md:p-0 dark:text-gray-400 md:hover:text-teal-500 dark:hover:bg-gray-700  md:dark:hover:bg-transparent">About Us</Link>
              </li>
            </ul>
            <div class="relative pt-3 justify-around flex md:hidden">
            <div class="absolute inset-y-0 left-0 top-3 flex items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input type="text" onChange={onchange} name="zip" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Zipcode" />
            <Link to='.searched'><button type="button" onClick={handleclick} class="text-white ml-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get </button></Link>
      
          </div>
          </div>
          <div class="relative hidden md:flex">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
              <span class="sr-only">Search icon</span>
            </div>
            <input type="text" onChange={onchange} name="zip" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Zipcode" />
            <Link to='#searched'><button type="button" onClick={handleclick} class="text-white ml-1 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get </button></Link>
      
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav


