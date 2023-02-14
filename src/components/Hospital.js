import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import hospital from '../Data/hospitals'
import statecontext from '../context/statecontext'
const Hospital = () => {
    var { zip ,searchedhospital} = useContext(statecontext)
    const [searchedziphospital, setsearchedziphospital] = useState([])
    useEffect(() => {
        if (zip) {
            filterhospitalitem()
        }

    }, [zip])
    const filterhospitalitem = (ziphospital) => {
        try {
            const updatedhospitals = hospital.filter((ele) => {
                return ele.zipcode === zip.address.postcode;
            })
            if (updatedhospitals.length === 0) {
                const error = [false]
                setsearchedziphospital(error)
            }
            else {
                setsearchedziphospital(updatedhospitals)
            }
        }
        catch (err) {
            setsearchedziphospital(err)
        }

    }
    return (
        <div className='pt-10'>
        <section id='searched'>
            {searchedhospital.length === 0 ? '' : (searchedhospital[0] === false ? (
                <section  className="searched text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20">
                            <div className="w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Your searched Zipcode is not serviceable by us</h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div></div>
                        </div>
                    </div>
                </section>
            ) : (<>
                <section  className="searched text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20">
                            <div className="w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">These are the hospitals in your Zipcode that You entered</h1>
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
</section>
            {searchedziphospital.length === 0 ? '' : (searchedziphospital[0] === false ? (
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">

                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Your Zipcode is not serviceable by us</h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div></div>
                        </div>
                    </div>
                </section>
            ) : (<>
                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap w-full mb-20">
                            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">These are the hospitals near by you</h1>
                                <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                            </div>
                        </div>
                        <div className="flex flex-wrap -m-4">
                            {(searchedziphospital.map((singlehospital) => {
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