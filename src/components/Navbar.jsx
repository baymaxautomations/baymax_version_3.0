import {Link} from "react-router-dom";

export default function Navbar() {

    return (

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
                    <ul className="flex max-md:hidden gap-10 mx-5">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/products"><li>Products</li></Link>
                        <Link to="/pricing"><li>Pricing</li></Link>
                        <Link to="/contact"><li>Contact Us</li></Link>
                    </ul>
                </div>

                <div id="login" className="flex justify-end">
                    <button className="text-h6 border-2 border-primary-black px-2 cursor-pointer">login</button>
                    <button className="ml-2 cursor-pointer md:hidden"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg></button>
                </div>
            </nav>
        </header>

    );

}

