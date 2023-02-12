import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const Otherfeatures = (props) => {
    const [hospitaldata, sethospitaldata] = useState([])
    useEffect(() => {
        sethospitaldata(props.HospitalData)
    }, [props.HospitalData])
    return (
        <div className='pt-10'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">These are few of the Doctors we connects</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Doctors are medical professionals who are trained to diagnose and treat illnesses and injuries. They play a critical role in maintaining the health and well-being of individuals and communities. There are many different types of doctors, including primary care physicians, specialists, and surgeons, each with their own area of expertise</p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {(hospitaldata.map((singlehospital) => {
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

export default Otherfeatures