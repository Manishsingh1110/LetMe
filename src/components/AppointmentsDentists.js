import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Dentists from '../Data/Dentists'
const AppointmentsDentists = (props) => {
  const initialState = {
    'details': { 'first_name': '', 'last_name': '', 'phone': '', 'date': '', 'timing': ''},
    'message': '',
    'success': false

  }
  const { doctor } = useParams()
  const [hospitaldata, sethospitaldata] = useState({})
  const [Addtofav, setAddtofav] = useState()
  const [openmodel, setopenmodel] = useState(false)
  const [modelmessage, setmodelmessage] = useState(initialState)
  const [checkforappointment, setcheckforappointment] = useState({ 'toggle1': false,'toggle2': true })
  useEffect(() => {
    try {
      var result = Dentists.find(item => item._id === doctor);
      sethospitaldata(result)
    }
    catch (err) {
      sethospitaldata(false)
    }
    try {
      var cart = JSON.parse(localStorage.getItem('cart'));
      var fav = Object.keys(cart)
      var idstr = hospitaldata._id;
    }
    catch (err) {
    }

  }, [doctor])

  const onchange = (e) => {
    setcheckforappointment({ ...checkforappointment, [e.target.name]: e.target.value })
  }

  const checkappointment = (e) => {
    e.preventDefault();
    console.log(checkforappointment)
    var data= !checkforappointment.toggle1 && checkforappointment.toggle2
    console.log(data)
    setmodelmessage({
      'details': checkforappointment,
      'message': 'These timeslot is availabe for you ,would you like to book your appointment here',
      'success': data
    })
    setopenmodel(true)
  }
  const handleclick = (e) => {
    e.preventDefault();
    var idstr = hospitaldata._id;
    if (localStorage.getItem('cart') == null) {
      var cart = {};
    } else {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    if (cart[idstr] === 1) {
      cart[idstr] = cart[idstr] - 1;
      setAddtofav(false)
    }
    else if (cart[idstr] === 0) {
      cart[idstr] = cart[idstr] + 1;
      setAddtofav(true)
    }
    else {
      cart[idstr] = 1;
      setAddtofav(true)
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  return (
    <div>{hospitaldata ?
      (<section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={hospitaldata.url} />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="flex justify-between">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">{hospitaldata.zipcode}</h2>
                <button onClick={handleclick} className={`rounded-full  w-10 h-10 ${Addtofav ? 'bg-pink-700' : 'bg-slate-300'} p-0 border-1 inline-flex items-center justify-center text-gray-500 ml-4`}>
                  <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-white" viewBox="0 0 24 24">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{hospitaldata.title}</h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">{hospitaldata.description}</p>
              <p className="leading-relaxed mt-5">{hospitaldata.addresses}</p>
            </div>
          </div>
        </div>
        <h2 className="text-sm title-font text-center text-gray-500 tracking-widest">Check for the Appointment in {hospitaldata.title}</h2>
        <div className='md:px-40 md:py-20 px-5 py-5'>
          <form>
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient first name</label>
                <input type="text" name='first_name' onChange={onchange} id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="first" required />
              </div>
              <div>
                <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Patient last name</label>
                <input type="text" name='last_name' onChange={onchange} id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="last" required />
              </div>
              <div>
                <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
                <input type="tel" name='phone' onChange={onchange} id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="+91 9999999999" pattern="[0-9]{10}" required />
              </div>
              <div>
                <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date of visit</label>
                <input type="date" name='date' onChange={onchange} id="date" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
              </div>
            </div>
            <div className='mb-6'>
              <label for="timing" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select time</label>
              <select id="timing" name='timing' onChange={onchange} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                <option selected>Choose a time schedule</option>
                <option value="11:00 - 11:30">11:00 - 11:30</option>
                <option value="11:30 - 12:00">11:30 - 12:00</option>
                <option value="12:00 - 12:30">12:00 - 12:30</option>
                <option value="12:30 - 13:00">12:30 - 13:00</option>
                <option value="14:00 - 14:30">14:00 - 14:30</option>
                <option value="14:30 - 15:00">14:30 - 15:00</option>
                <option value="15:00 - 15:30">15:00 - 15:30</option>
                <option value="16:00 - 16:30">16:00 - 16:30</option>
                <option value="19:00 - 19:30">19:00 - 19:30</option>
                <option value="19:30 - 20:00">19:30 - 20:00</option>
                <option value="20:00 - 20:30">20:00 - 20:30</option>
                <option value="20:30 - 21:00">20:30 - 21:00</option>
                <option value="21:00 - 21:30">21:00 - 21:30</option>
                <option value="21:30 - 22:00">21:30 - 22:00</option>
              </select>
            </div>
            <div class="flex items-center mb-3">
              <input id="link-checkbox" type="checkbox" value="true" name='toggle1' onChange={onchange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
            </div>
            <div class="flex items-center mb-3">
              <input id="link-checkbox" type="checkbox" value="false" name='toggle2' onChange={onchange} class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
              <label for="link-checkbox" class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" class="text-blue-600 dark:text-blue-500 hover:underline">terms and conditions</a>.</label>
            </div>
            <button type="submit" onClick={checkappointment} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Check</button>
          </form>
        </div>
        <div id="defaultModal" tabindex="-1" aria-hidden="true" class={`fixed bg-slate-200 top-0 left-0 h-[100vh]  right-0 z-50 ${openmodel ? 'flex' : 'hidden'} justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full`}>
          <div class="relative w-full h-full max-w-2xl md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  Final Details
                </h3>
                <button type="button" onClick={() => { setopenmodel(false) }} class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <div class="p-6 space-y-6">
                {
                  modelmessage.success ?
                    <>
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        If you are interested in booking an appointment at our hospital, we would be more than happy to assist you. Our hospital offers a wide range of services and specialties,
                        and we are dedicated to providing high-quality healthcare to our patients. Our friendly staff will be happy to help you find an appointment that works for your schedule and connect you with a specialist who can address your specific healthcare needs.
                      </p>
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Patient name is : {modelmessage.details.first_name}  {modelmessage.details.last_name} <br />  your schedule timing would be : {modelmessage.details.timing} <br /> your phone number is : {modelmessage.details.phone} <br />your appointment date would be   {modelmessage.details.date}</p>
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        {modelmessage.message}</p>
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Thank you for considering our hospital for your healthcare needs, and we look forward to providing you with exceptional care.
                      </p>
                    </>
                    :
                    <>
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        We apologize for the inconvenience, but we regret to inform you that we do not have any available time slots for the appointment you requested at this time. We understand that this may be frustrating, and we want to assure you that we are doing everything we can to accommodate our patients' needs while ensuring that we provide high-quality care. We encourage you to check our website or call our appointment line periodically, as appointment cancellations can sometimes create unexpected availability. In the meantime, if you have any urgent medical concerns or questions, please do not hesitate to contact us, and we will do our best to assist you in any way we can.
                      </p>
                      <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                        Thank you for your understanding, and we look forward to the opportunity to serve you in the future.
                      </p>
                    </>
                }
              </div>
              <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="defaultModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="defaultModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600" onClick={() => { setopenmodel(false) }}>Decline</button>
              </div>
            </div>
          </div>
        </div>
      </section>) : <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Internal server error</h1>
    }
    </div>
  )
}

export default AppointmentsDentists