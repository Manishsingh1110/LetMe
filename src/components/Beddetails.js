import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Bed from './Bed'
import hospital from '../Data/hospitals'
import { Link } from 'react-router-dom'
const Beddetails = (props) => {
  const { slug } = useParams()
  const [hospitaldata, sethospitaldata] = useState({})
  const [Beds, setBeds] = useState([])
  const [Addtofav, setAddtofav] = useState()
  useEffect(() => {
    try {
      var result = hospital.find(item => item._id === slug);
      sethospitaldata(result)
      setBeds(result.bed)
    }
    catch (err) {
      sethospitaldata(false)
    }
    try {
      var cart = JSON.parse(localStorage.getItem('cart'));
      var fav=Object.keys(cart)
      var idstr = hospitaldata._id;
    }
    catch (err) {
    }
    
  }, [slug])
  
  
  const handleclick = (e) => {
    e.preventDefault();
    var idstr = hospitaldata._id;
    if(localStorage.getItem('cart') == null) {
      var cart = {};
    } else {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    if (cart[idstr] === 1) {
      cart[idstr] = cart[idstr] - 1;
      setAddtofav(false)
    }
    else if(cart[idstr] ===0){
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
            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <div className="flex justify-between">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">{hospitaldata.zipcode}</h2>
                <button onClick={handleclick}  className={`rounded-full  w-10 h-10 ${Addtofav ?'bg-pink-700':'bg-slate-300'} p-0 border-1 inline-flex items-center justify-center text-gray-500 ml-4`}>
                  <svg fill="currentColor"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5 text-white" viewBox="0 0 24 24">
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
        <h2 className="text-sm title-font text-center text-gray-500 tracking-widest">Departmental Bed details of the {hospitaldata.title}</h2>
        <div className="py-10">
          <div className="flex flex-wrap text-center">
            {(Beds.map((singledepartment,index) => {
              var i=1000
              i++
              var j =200
              return (
                <>
                  <div className="lg:w-1/4 w-full px-4 " key={i}>
                    <h1 className="text-gray-900 text-xl title-font font-medium ">{singledepartment.department}</h1>
                    <div className="flex flex-wrap">
                      {((singledepartment.departmentbed).map((singlebed) => {
                        j++
                        return (
                          <div className="lg:w-1/4 w-full cursor-pointer" key={j}>
                            <Link to={`/particularhospital/${hospitaldata._id}/${singledepartment.department}/${singlebed}`}>
                              <Bed />
                            </Link>
                          </div>
                        )
                      }))}
                    </div>
                  </div>
                </>
              )
            }))}
          </div>
        </div>
      </section>) : <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">Internal server error</h1>
    }
    </div>
  )
}

export default Beddetails