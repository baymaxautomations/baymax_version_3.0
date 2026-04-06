import {Link} from "react-router-dom"

export default function Footer(){

    return(
            <footer className="bg-primary-black flex flex-col justify-center items-center pt-5 pb-3 max-sm:px-4 max-[1025px]:px-2 relative z-1000">

                <section className="flex flex-col w-full max-w-[1024px] text-white py-4">
                
                <div className="links w-full">
                    <div className="flex max-sm:flex-col flex-wrap justify-between gap-1 text-h6 max-sm:text-h7/tight *:py-1">
                    <div>
                        <Link to="/">Home</Link>
                        <ul className="flex flex-col max-md:hidden text-h7-semi/loose">
                        <li><a href="#deliveries">Deliveries</a></li>
                        <li><a href="#experiences">Experiences</a></li>
                        <li><a href="#takeLook">How It Works</a></li>
                        </ul>
                    </div>
                    <div><Link to="/products">Products</Link></div>
                    <div><Link to="/pricing">Pricing</Link></div>
                        <div className="flex flex-col ">
                            <Link to="/contact">Contact Us</Link>
                            <ul className="flex-1 flex flex-wrap gap-2 h-full  items-center justify-center max-md:justify-start max-md:mt-2">
                            <li><a href="https://x.com/BaymaxAuto" target="_blank"><img src="/contact/x.svg" alt="Twitter link" height="20" width="20" className="aspect-square w-[40px]" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>


                </section>
                
                <hr className="bg-primary-white w-full h-1 my-2 max-w-[1024px] max-md:hidden" />

                <div className="logo w-full max-w-[1024px] flex max-sm:flex-col-reverse items-center max-sm:items-start max-sm:gap-1 justify-between text-white  text-h7/tight max-sm:text-h8/tight">
                    <p>&copy; 2026 BAYMAX AUTOMATIONS</p>
                    <p>INDIA</p>
                </div>

            </footer>
    )


}