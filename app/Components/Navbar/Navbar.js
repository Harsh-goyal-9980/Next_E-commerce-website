'use client'
import React, { useRef } from 'react'
import { MdMenu } from "react-icons/md"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { UpdateFollower } from 'react-mouse-follower';
import { motion } from 'framer-motion';
import { IoMdCloseCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoBagCheck } from "react-icons/io5";
import Link from 'next/link';

const navmenu = [
    {
        id: 1,
        title: "Home",
        link: "#"
    },
    {
        id: 2,
        title: "Blogs",
        link: "#"
    },
    {
        id: 3,
        title: "About",
        link: "#"
    },
    {
        id: 4,
        title: "Contact Us",
        link: "#"
    }

]
const navbar = ({ cart={}, addcart, removecart, clearCart, subTotal }) => {
    
    console.log(cart, addcart, removecart, clearCart, subTotal)
    const toggleCart = () => {
        if (ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-full')
            ref.current.classList.add('translate-x-0')
        }
        else if (!ref.current.classList.contains('translate-x-full')) {
            ref.current.classList.remove('translate-x-0')
            ref.current.classList.add('translate-x-full')
        }
    }
    const isCartEmpty = !cart || Object.keys(cart).length === 0;
    

    const ref = useRef()

    return (
        <>
        
            <div>
                <div className='bg-itsdark text-white font-varela'>
                    <motion.nav
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='container flex items-center justify-between py-3'>
                        {/* Name section */}
                        <div>
                            <div className='text-xl font-bold flex items-center' href="">
                                <UpdateFollower
                                    mouseOptions={{
                                        backgroundColor: "white",
                                        zIndex: 999,
                                        followSpeed: 1.5,
                                        scale: 4,
                                        mixBlendMode: "difference",
                                    }}>
                                    <a href='/' className='md:text-3xl -translate-y-2 '>Urban Chic</a>
                                </UpdateFollower>
                            </div>
                        </div>
                        <div className='hidden md:block lg:flex '>
                            <ul className='flex items-center gap-8'>{
                                navmenu.map((item) => (
                                    <li key={item.id}>
                                        <UpdateFollower
                                            mouseOptions={{
                                                backgroundColor: "white",
                                                zIndex: 999,
                                                followSpeed: 1.5,
                                                scale: 5,
                                                mixBlendMode: "difference",
                                            }}>
                                            <a href={item.link} className='inline-block text-lg py-2 px-3 uppercase'>{item.title}</a>
                                        </UpdateFollower>

                                    </li>
                                ))}
                            </ul>
                        </div>
                        <UpdateFollower
                            mouseOptions={{
                                backgroundColor: "white",
                                zIndex: 999,
                                followSpeed: 1.5,
                                scale: 5,
                                mixBlendMode: "difference",
                            }}>
                            <div className='hidden md:block lg:flex cursor-pointer '>
                                <button className=' font-medium border-2 border-white rounded-2xl px-3 py-1 mr-4'>Login</button>
                                <a onClick={toggleCart} className='flex items-center font-medium border-2 border-white rounded-2xl px-3 py-1'>View Cart
                                    <AiOutlineShoppingCart className='text-2xl px-1 font-medium' />
                                </a>
                            </div>
                        </UpdateFollower>
                        <div className='md:hidden'>
                            <MdMenu className='text-4xl ' />
                        </div>
                    </motion.nav>
                </div>
                
                <div ref={ref} className=' items-center z-50 border-2 border-l-white absolute top-0 right-0 text-white bg-gradient-to-r from-black via-gray-900 to-gray-800 p-24 transform transition-transform translate-x-full'>
                    <h2 className='text-3xl font-bold mb-7 '>Shopping Cart</h2>
                    <span onClick={toggleCart} className='absolute top-4 right-3 font-semibold cursor-pointer text-2xl'><IoMdCloseCircle /></span>
                    <ol className='text-lg list-decimal font-medium '> 
                        
                        
                        {isCartEmpty != 0  &&
                        <div className='font-semibold text-lg'>Your Cart is Empty!</div>
                        } 
                        {Object.keys(cart).map((k)=>{return<li key={k}>
                            <div className="flex">
                                <div className='flex font-semibold ml-2 mr-3 '>{cart[k].name} :</div>
                                <div className='flex text-xl font-semibold ml-2 mr-3 '> ₹{cart[k].price} </div>
                                <div className='flex translate-y-1 mb-2'>
                                <div onClick={()=>{removecart(k,1,cart[k].price,cart[k].name)}} className=' text-xl font-extrabold px-2 cursor-pointer'><AiFillMinusCircle /></div>
                                <div className='flex items-center justify-center w-1/3 text-xl font-medium -translate-y-1 '>{cart[k].qty}</div>
                                <div onClick={()=>{addcart(k,1,cart[k].price,cart[k].name)}} className=' text-xl font font-extrabold px-2 cursor-pointer'><AiFillPlusCircle /></div>
                                </div>
                            </div>
                            
                        </li>})}
                        {isCartEmpty == 0  &&
                        <div className='mt-5'>Total price: ₹{subTotal}</div>}
                    </ol>

                    <div className='flex flex-row gap-3'>
                        <button className='flex font-semibold  mt-5 rounded-xl border-2 border-white py-1 px-3  hover:bg-white  hover:text-gray-900 cursor-pointer'>Checkout
                            <IoBagCheck className=' text-lg translate-y-1 ml-1  hover:bg-white  hover:text-gray-900 cursor-pointer' />
                        </button>
                        <a onClick={clearCart}  className='flex font-semibold  mt-5 rounded-xl border-2 border-white py-1 px-3 cursor-pointer  hover:bg-white  hover:text-gray-900'>Clear cart
                        </a>
                    </div>



                </div>
            </div>
        </>

    )
}

export default navbar
