import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import hospital from '../Data/hospitals'
const Hospital = () => {
    const [searchedzip, setsearchedzip] = useState({ zip: "" })
    const [searchedhospital, setsearchedhospital] = useState([])
    const filteritem = (zip) => {
        try {
            const updatedhospitals = hospital.filter((ele) => {
                return ele.zipcode === zip;
            })
            if (updatedhospitals.length === 0) {
                const error = [false]
                setsearchedhospital(error)
            }
            else {
                setsearchedhospital(updatedhospitals)
            }
        }
        catch (err) {
            setsearchedhospital(err)
        }

    }
    const handleclick = (e) => {
        e.preventDefault();
        filteritem(searchedzip.zip)
    }
    const onchange = (e) => {
        setsearchedzip({ ...searchedzip, [e.target.name]: e.target.value })
    }
    return (
        <div className='pt-10'>
            <div className="flex md:flex-nowrap flex-wrap md:justify-center lg:justify-center justify-start align-middle p-1  flex-1 items-end ">
                <div className="relative sm:w-64 w-96 md:w-[80vw] sm:mr-4 mr-2">
                    <label htmlFor="footer-field" className="leading-7 text-sm text-left m-10 text-gray-600">Enter Your Current Zipcode</label>
                    <input type="text" id="footer-field" onChange={onchange} name="zip" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:ring-2 focus:bg-transparent focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
                <button onClick={handleclick} className="inline-flex mt-2 md:mt-0 text-white  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
            </div>
            {searchedhospital.length === 0 ? '' : ( searchedhospital[0]===false ? (
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">

                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">These Zipcode is not serviceable by us</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div></div>
                            </div>
                        </div>
                        </section>
                                ):(<>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">These are the hospitals in your Zipcode</h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {(searchedhospital.map((singlehospital) => {
                                return (
                                    <div className="xl:w-1/4 md:w-1/2 p-4" key={singlehospital._id}>
                                        <Link to={`/particularhospital/${singlehospital._id}`}>
                                            <div className="bg-gray-100 p-6 rounded-lg">
                                                <img className="h-40 rounded w-full object-cover object-center mb-6" src={singlehospital.url} alt="content" />
                                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{singlehospital.title}</h3>
                                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{singlehospital.description}</h2>
                                                <p className="leading-relaxed text-base">{singlehospital.addresses}</p>
                                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{singlehospital.zipcode}</h3>
                                            </div>
                                        </Link>
                                    </div>
                                )
                            }))}
                        </div>
                    </div>
                </section>
            </>))
            }
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">These are few of the hospitals we connects</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">A hospital is a health care institution that provides medical and surgical treatment to patients. Hospitals can range from small clinics to large, multi-disciplinary facilities that offer a wide range of services, including emergency care, diagnostic testing, surgery, and inpatient and outpatient treatment.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {(hospital.map((singlehospital) => {
                            return (
                                <div className="xl:w-1/4 md:w-1/2 p-4" key={singlehospital._id}>
                                    <Link to={`/particularhospital/${singlehospital._id}`}>
                                        <div className="bg-gray-100 p-6 rounded-lg">
                                            <img className="h-40 rounded w-full object-cover object-center mb-6" src={singlehospital.url} alt="content" />
                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{singlehospital.title}</h3>
                                            <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{singlehospital.description}</h2>
                                            <p className="leading-relaxed text-base">{singlehospital.addresses}</p>
                                            <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{singlehospital.zipcode}</h3>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Hospital