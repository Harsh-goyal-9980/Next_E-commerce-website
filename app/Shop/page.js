"use client"
import React, { useEffect, useState } from 'react'
import Navbar from '@/app/Components/Navbar/Navbar'
import Footer from '@/app/Components/Footer/Footer'
import { motion } from 'framer-motion'


const Shop = () => {
  const [cart, setCart] = useState({})
  const [subTotal, setsubTotal] = useState(0)
  useEffect(() => {
    console.log("ola")
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")))
      }

    } catch (error) {
      console.error(error)
      localStorage.clear()
    }


  },
  )

  const saveCart = (myCart) => {
    localStorage.setItem("cart", myCart)
    let subt = 0
    let keys = Object.keys(myCart)
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;


    }
    setsubTotal(subt)
  }
  const addcart = (itemcode, qty, price, name) => {
    let newcart = cart
    if (itemcode in cart) {
      newcart[itemcode].qty = cart[itemcode].qty + qty
    }
    else {
      newcart[itemcode] = { qty: 1, price, name }
    }
    setCart(newcart)
    saveCart(newcart)
  }
  const clearCart = () => {
    setCart({})
    saveCart({})

  }
  const removecart = (itemcode, qty, price, name) => {
    let newcart = cart
    if (itemcode in cart) {
      newcart[itemcode].qty = cart[itemcode].qty - qty
    }
    if (newcart[itemcode].qty <= 0) {
      delete newcart[itemcode]
    }
    setCart(newcart)
    saveCart(newcart)
  }

  return (
    <>
      
      <div className='bg-itsdark'>
        <Navbar cart={cart} addcart={addcart} removecart={removecart} clearCart={clearCart} subTotal={subTotal} />
      <motion.section cart={cart} addcart={addcart} removecart={removecart} clearCart={clearCart} subTotal={subTotal} className="text-white body-font bg-itsdark "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      >
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://img.freepik.com/free-photo/shiny-black-headphones-reflect-golden-nightclub-lights-generated-by-ai_188544-10148.jpg" />
              </a>
              <div className="mt-4">
                <h3 className="text-white text-xs tracking-widest title-font mb-1">Urban Chic</h3>
                <h2 className="text-white title-font text-lg font-medium">Model Gold</h2>
                <p className="mt-1">₹5000</p>
                <button onClick={() => { addcart(1, 1, 5000, 'Model Gold') }} className='flex font-semibold  mt-5 rounded-xl border-2 border-white py-1 px-3  hover:bg-white  hover:text-gray-900'>Add to cart</button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://img.freepik.com/free-photo/headphones-displayed-against-dark-background_157027-4466.jpg?size=626&ext=jpg&ga=GA1.1.2096817775.1722057367&semt=sph" />
              </a>
              <div className="mt-4">
                <h3 className="text-white text-xs tracking-widest title-font mb-1">Urban Chic</h3>
                <h2 className="text-white title-font text-lg font-medium">Model Blue</h2>
                <p className="mt-1">₹5000</p>
                <button onClick={() => { addcart(2, 1, 5000, 'Model Blue') }} className='flex font-semibold  mt-5 rounded-xl border-2 border-white py-1 px-3  hover:bg-white  hover:text-gray-900'>Add to cart</button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://ideogram.ai/assets/progressive-image/balanced/response/2lCCULnIRvWsKnHJXwBuwA" />
              </a>
              <div className="mt-4">
                <h3 className="text-white text-xs tracking-widest title-font mb-1">Urban Chic</h3>
                <h2 className="text-white title-font text-lg font-medium">Earbuds pink</h2>
                <p className="mt-1">₹1299</p>
                <button onClick={() => { addcart(3, 1, 1299, 'Earbuds pink') }} className='flex font-semibold  mt-5 rounded-xl border-2 border-white py-1 px-3  hover:bg-white  hover:text-gray-900'>Add to cart</button>
              </div>
            </div>
            
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://ideogram.ai/assets/progressive-image/balanced/response/e0Q6oHkaQ76jgq5ewiUUGA" />
              </a>
              <div className="mt-4">
                <h3 className="text-white text-xs tracking-widest title-font mb-1">Urban Chic</h3>
                <h2 className="text-white title-font text-lg font-medium">Model H-Blue</h2>
                <p className="mt-1">₹6000</p>
                <button onClick={() => { addcart(5, 1, 6000, 'Model H-Blue') }} className='flex font-semibold  mt-5 rounded-xl border-2 border-white py-1 px-3  hover:bg-white  hover:text-gray-900'>Add to cart</button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://ideogram.ai/assets/progressive-image/balanced/response/-ghT07hCQpeB60DTGD9pag" />
              </a>
              <div className="mt-4">
                <h3 className="text-white text-xs tracking-widest title-font mb-1">Urban Chic</h3>
                <h2 className="text-white title-font text-lg font-medium">Earbuds White</h2>
                <p className="mt-1">₹1299</p>
                <button onClick={() => { addcart(4, 1, 1299, 'Earbuds White') }} className='flex font-semibold  mt-5 rounded-xl border-2 border-white py-1 px-3  hover:bg-white  hover:text-gray-900'>Add to cart</button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://ideogram.ai/assets/progressive-image/balanced/response/Fv76m2h9TBivRId1ASMqYg" />
              </a>
              <div className="mt-4">
                <h3 className="text-white text-xs tracking-widest title-font mb-1">Urban Chic</h3>
                <h2 className="text-white title-font text-lg font-medium">Model Blue</h2>
                <p className="mt-1">₹5000</p>
                <button onClick={() => { addcart(6, 1, 5000, 'Model Blue') }} className='flex font-semibold  mt-5 rounded-xl border-2 border-white py-1 px-3  hover:bg-white  hover:text-gray-900'>Add to cart</button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://ideogram.ai/assets/progressive-image/balanced/response/jfRGwWZLRXOENWx_l6gTog" />
              </a>
              <div className="mt-4">
                <h3 className="text-white text-xs tracking-widest title-font mb-1">Urban Chic</h3>
                <h2 className="text-white title-font text-lg font-medium">Earbuds Black</h2>
                <p className="mt-1">₹1299</p>
                <button onClick={() => { addcart(7, 1, 1299, 'Earbuds Black') }} className='flex font-semibold  mt-5 rounded-xl border-2 border-white py-1 px-3  hover:bg-white  hover:text-gray-900'>Add to cart</button>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" className="object-cover object-center w-full h-full block" src="https://ideogram.ai/assets/progressive-image/balanced/response/Y5X_MpLnS5a9YsFjL-E5hw" />
              </a>
              <div className="mt-4">
                <h3 className="text-white text-xs tracking-widest title-font mb-1">Urban Chic</h3>
                <h2 className="text-white title-font text-lg font-medium">Model S-Blue</h2>
                <p className="mt-1">₹5500</p>
                <button onClick={() => { addcart(8, 1, 5500, 'Model S-Blue') }} className='flex font-semibold  mt-5 rounded-xl border-2 border-white py-1 px-3  hover:bg-white  hover:text-gray-900'>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      </div>
   
      <Footer />
    </>
  )
}

export default Shop
