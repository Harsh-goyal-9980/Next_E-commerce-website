'use client'
import React from 'react';

import { UpdateFollower } from 'react-mouse-follower';
import Link from 'next/link'
import { delay, easeInOut, motion, AnimatePresence } from 'framer-motion';

const up = (delay) => {
    return {
        hidden: {
            opacity: 0,
            y: 100,
            scale: 0.5,
        },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: delay,
                ease: easeInOut,
            },
        },
        exit: {
            opacity: 0,
            y: 100,
            scale: 0.5,
            transition: {
                duration: 0.2,
                ease: easeInOut,
            },

        },
    }
}

const about = [
    {
        id: 1,
        image: "https://ideogram.ai/assets/progressive-image/balanced/response/Bmka95O4RWKXbX3vNthS7g",
        title: "Headphones",
        subtitle: "Gone are the days of clunky heavy headphones. This has turned things around by using top class materials and reduced weight by massive amounts. The design is also a part of this improvement. A more compact form factor gives a sleek look with a very sophisticated feel. The result of this is comfort. You can wear these headphones all day long and without any fatigue. ",
        Price: "Rs. 5000",
        model: "Model Pink",
        


    },
    {
        id: 2,
        image: "https://ideogram.ai/assets/progressive-image/balanced/response/pHdhjovySHWtczoBsK3_FQ",
        title: "Earbuds",
        subtitle: "The earbuds offer many innovative body characteristics that enhance their beauty. These earphones have an ergonomic design that prioritises user comfort, guaranteeing a comfortable and secure fit for prolonged use. They are practical and fashionable because of the elegant and small form factor, which hints at refinement.",
        Price: "Rs. 1299",
        model: "Model Black",


    },
    {
        id: 3,
        image: "https://ideogram.ai/assets/progressive-image/balanced/response/Y5X_MpLnS5a9YsFjL-E5hw",
        title: "Speaker",
        subtitle: "This along with its rear speakers and subwoofer, delivers good-quality sound. It comes with Dolby Digital Plus, so rest assured you can enjoy immersive surround sound. You can also connect this sound system with other devices via Bluetooth, USB, etc. What's more, the soundbar can also be mounted on the wall of your room.",
        Price: "Rs. 8000",
        model: "Model Blue",


    },
];

const Hero = () => {
    const [data, setdata] = React.useState(about[0])
    const handledata = (a) => {
        setdata(a)
    }
    return (
        <>
            <div className="bg-itsdark container grid grid-cols-1 md:grid-cols-2 min-h-[40px] ">

            </div>
            <section className='bg-itsdark text-white font-varela'>
                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[615px] ">
                    <div className='flex flex-col justify-center py-14 md:py-0 xl:max-w-[500px]'>
                        <div className='space-y-5 md:text-left text-center '>
                            <AnimatePresence mode="wait">
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "white",
                                        zIndex: "999",
                                        followSpeed: "0.5",
                                        mixBlendMode: "difference",
                                        scale: "6"
                                    }}
                                >
                                    <motion.h1 key={data.id} variants={up(0.5)}
                                        initial="hidden" animate="show" exit="exit" className='text-3xl lg:text-6xl font-bold font-varela'>
                                        {data.title}
                                    </motion.h1>
                                </UpdateFollower>

                            </AnimatePresence>
                            <AnimatePresence mode="wait">
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "white",
                                        zIndex: "999",
                                        followSpeed: "0.5",
                                        mixBlendMode: "difference",
                                        scale: "4"
                                    }}
                                >
                                    <motion.p variants={up(0.5)}
                                        initial="hidden" animate="show" exit="exit" className=' mt-7 text-sm leading-loose text-white/80'>
                                        {data.subtitle}
                                    </motion.p>
                                </UpdateFollower>
                            </AnimatePresence>
                            <AnimatePresence mode="wait">
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "white",
                                        zIndex: "999",
                                        followSpeed: "0.5",
                                        mixBlendMode: "difference",
                                        scale: "5"
                                    }}
                                >
                                    <motion.a href='/Shop' variants={up(0.5)}
                                        initial="hidden" animate="show" exit="exit" className=' border-2 border-white px-4 py-2 inline-block font-medium rounded-3xl'>
                                        Shop Now
                                    </motion.a>
                                </UpdateFollower>
                            </AnimatePresence>
                            <motion.div variants={up(0.5)}
                                initial="hidden" animate="show" exit="exit" className='flex items-center justify-center md:justify-start gap-4 !mt-24'>
                                <div className='w-20 h-[2px] bg-white'></div>
                                <p className='text-normal font-medium'>Our Products</p>
                                <div className='w-20 h-[2px] bg-white'></div>
                            </motion.div>
                            <motion.div variants={up(0.5)}
                                initial="hidden" animate="show" exit="exit" className='grid grid-cols-3 gap-8'>
                                {
                                    about.map((item) => {
                                        return (
                                            <div
                                                key={item.id}
                                                onClick={() => handledata(item)} className='grid grid-cols-2 place-items-center cursor-pointer border rounded-xl border-gray-700 '>
                                                <div>
                                                    <img className='w-[200px] rounded-xl mr-2' src={item.image} alt="" />
                                                </div>
                                                <div className='space-y-2'>

                                                    <p className='ml-2 text-sm '>{item.model}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </motion.div>
                        </div>

                    </div>
                    <motion.div variants={up(0.5)}
                        initial="hidden" animate="show" exit="exit" class="relative py-5 px-5">
                        <div class=" mt-4 border border-gray-400 rounded-md relative z-20">
                            <div className='flex flex-col justify-end items-center'>
                                <img className='h-[550px] w-[618px] rounded-md ' src={data.image} alt="" />
                            </div>
                        </div>
                        <div class=" mt-4 absolute -inset-1 rounded-md blur-md bg-gradient-to-br from-pink-500 via-cyan-500 to-violet-500 z-10"></div>
                    </motion.div>

                </div>



                <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[50px] ">

                </div>

            </section>
        </>
    )
}

export default Hero
