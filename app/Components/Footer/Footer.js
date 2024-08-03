import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='font-varela'>
            <footer className="relative bg-itsdark pt-8 pb-6 font-varela">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap text-left lg:text-left">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-semibold text-white">Let's keep in touch!</h4>
                            <h5 className="text-lg mt-0 mb-2 text-white">
                                Find us on any of these platforms, we respond 1-2 business days.
                            </h5>
                            <div className="flex flex-row gap-3 text-2xl mt-6 lg:mb-0 mb-6 text-white">
                            <button><BsTwitterX /></button>
                            <button><FaInstagram /></button>
                            <button><FaSnapchatGhost /></button>
                            <button><FaGithub /></button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                                <div className="w-full lg:w-4/12 px-4 ml-auto">
                                    <span className="block uppercase text-white text-sm font-semibold mb-2">Useful Links</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-white font-semibold block pb-2 text-sm" href="">About Us</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-semibold block pb-2 text-sm" href="">Blog</a>
                                        </li>
                                        <li>
                                            <a className="text-white font-semibold block pb-2 text-sm" href="">Github</a>
                                        </li>
                                        <li>
                                            <a className="text-white  font-semibold block pb-2 text-sm" href="">Free Products</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <span className="block uppercase text-white text-sm font-semibold mb-2">Other Resources</span>
                                    <ul className="list-unstyled">
                                        <li>
                                            <a className="text-white  font-semibold block pb-2 text-sm" href="">MIT License</a>
                                        </li>
                                        <li>
                                            <a className="text-white  font-semibold block pb-2 text-sm" href="">Terms & Conditions apply</a>
                                        </li>
                                        <li>
                                            <a className="text-white  font-semibold block pb-2 text-sm" href="">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a className="text-white  font-semibold block pb-2 text-sm" href="">Contact Us</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 className="my-6">
                        <div className="flex flex-wrap items-center md:justify-between justify-center">
                            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            </div>
                        </div>
                    </h4>   
                </div>
            </footer>
        </div>
    )
}

export default Footer
