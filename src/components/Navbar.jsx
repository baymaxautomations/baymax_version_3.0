import {Link} from "react-router-dom";
import { useState } from "react";

export default function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return (

        <>

            <header className="w-full flex justify-center sticky z-500 top-0 bg-primary-white/80 backdrop-blur-sm">
                <nav className="max-w-[1024px] flex w-full py-1 px-4 items-center">
                    <div id="logo" className="flex flex-1 gap-2 items-center">
                        <img src="/logo.svg" alt="logo" className="object-contain h-[18px]" />
                        <span className="text-h6 max-md:hidden">BAYMAX AUTOMATIONS</span>
                    </div>

                    {/* <div>
                        <select name="pages" id="pages" defaultValue={pageDefault.toLowerCase()}>
                            <option value="home">Home</option>
                            <option value="products">Products</option>
                            <option value="pricing" >Pricing</option>
                            <option value="contact">Contact</option>
                        </select>
                    </div> */}

                    <div>
                        <ul className="flex max-md:hidden gap-10 mx-5 text-h7">
                            <Link to="/"><li>Home</li></Link>
                            <Link to="/products"><li>Products</li></Link>
                            <Link to="/pricing"><li>Pricing</li></Link>
                            <Link to="/contact"><li>Contact Us</li></Link>
                        </ul>
                    </div>

                    <div id="login" className="flex justify-end">
                        <button className="text-h7 border-2 border-primary-black px-2 cursor-pointer max-md:py-1">login</button>
                        <button onClick={() => setIsOpen(!isOpen)} className="ml-2 cursor-pointer md:hidden"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></button>
                    </div>
                </nav>
            </header>

            <div className={`fixed top-0 right-0 h-screen w-[60%] bg-primary-white/80 backdrop-blur-sm z-1000 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
                <div className="flex flex-col h-full p-6">
                    <ul className="flex flex-col gap-6 mt-10 text-h6/tight">
                        <Link to="/" onClick={() => setIsOpen(false)}><li className="inline-flex items-end gap-1"><img src="/icons/home.svg" alt="home-icon" height="24px" width="24px"/>Home</li></Link>
                        <Link to="/products" onClick={() => setIsOpen(false)}><li className="inline-flex items-end gap-1"><img src="/icons/product.svg" alt="products-icon" height="24px" width="24px" />Products</li></Link>
                        <Link to="/pricing" onClick={() => setIsOpen(false)}><li className="inline-flex items-end gap-1"><img src="/icons/pricing.svg" alt="pricing-icon" height="24px" width="24px" />Pricing</li></Link>
                        <Link to="/contact" onClick={() => setIsOpen(false)}><li className="inline-flex items-end gap-1"><img src="/icons/contact.svg" alt="contacts-icon" height="24px" width="24px" />Contact</li></Link>
                        <li>
                            <button onClick={() => setIsOpen(false)} className="inline-flex items-end gap-1">
                                <img src="/icons/close.svg" alt="close-icon" height="24px" width="24px" />
                                Close
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    );

}
