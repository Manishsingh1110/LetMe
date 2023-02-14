import React, { useEffect} from 'react'

const Categoery = () => {
    
    return (
        <section className="categories relative z-1">
            <div className="px-0.5">
                <div className="grid md:grid-cols-3 grid-cols-1 overflow-hidden">
                    <div className="col-span-2 p-1">
                        <div className="h-[101vh]" style={{ backgroundImage: 'url("https://postgraduateeducation.hms.harvard.edu/sites/g/files/mcu816/files/media/4.23.2021_Making%20Wellness%20an.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'saturate(200%)' }}>
                            <div className="grid place-items-center text-center bg-gradient-to-b from-green-100 to-emerald-900 text-black hover:text-white opacity-20 hover:opacity-90 h-[100%]">
                                <div>
                                    <h1 className='text-center font-bold  opacity-100 text-4xl md:text-8xl'>HOSPITAL'S</h1>
                                    <p className='text-center font-bold pt-5 opacity-100 text-xl'>Hospitals are healthcare institutions that provide a wide range of medical services and treatments to patients, including emergency care, surgery, and ongoing care for serious or chronic conditions.</p>
                                    <a href="#" className='underline'>Visit now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="grid grid-rows-2">
                            <div className="p-1">
                                <div className="h-[50vh]" style={{ backgroundImage: 'url("https://www.eehealth.org/-/media/images/modules/blog/posts/hdcancerdentist.jpg")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'saturate(200%)' }}>
                                    <div className="grid place-items-center text-center bg-gradient-to-b from-green-100 to-emerald-900 text-black hover:text-white  opacity-20 hover:opacity-90 h-[100%]">
                                        <div>
                                            <h4 className='text-center font-bold opacity-100 text-2xl md:text-3xl lg:text-4xl'>DENTIST'S</h4>
                                            <p className='text-center font-bold pt-5 opacity-100 text-sm'>Dentists are healthcare professionals who specialize in diagnosing and treating issues related to the teeth and mouth, including cavities, gum disease, and tooth loss.</p>
                                            <a href="#" className='underline'>Visit now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-1">
                                <div className="h-[50vh]" style={{ backgroundImage: 'url("https://www.betterteam.com/images/dermatologist-job-description-3559x3369-20201125.jpeg?crop=21:16,smart&width=420&dpr=2")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', filter: 'saturate(200%)' }}>
                                    <div className="grid place-items-center text-center bg-gradient-to-b from-green-100 to-emerald-900 text-black hover:text-white opacity-20 hover:opacity-90 h-[100%]">
                                        <div>
                                            <h4 className='text-center font-bold opacity-100 text-2xl md:text-3xl lg:text-4xl'>DERMATOLOGIST'S</h4>
                                            <p className='text-center font-bold pt-5 opacity-100 text-sm'>Dermatologists are medical doctors who specialize in the diagnosis and treatment of skin, hair, and nail conditions, including acne, psoriasis, skin cancer, and cosmetic concerns such as wrinkles and age spots.</p>
                                            <a href="#" className='underline'>Visit now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Categoery