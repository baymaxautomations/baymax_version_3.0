import ScrollCards from "./ScrollCards";
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)  // ← top of file, outside component

export default function WorkLook(){


    const cards= [
        {
            text:<>Say you are a <span className="text-h3 max-sm:text-h5/tight">Doctor</span> and you want to respond to your patients <span className="font-bold">intelligently 24*7.</span></>,
            image:'/animes/img-1.webp', 
            alt: 'doctor'
        },
        {
            text:<>You <span className="text-h3 max-sm:text-h5/tight">reach</span> us.<br /> We <span className="text-h3 max-sm:text-h5/tight">design</span> systems based on your given constrains.</> , 
            image:'/animes/img-2.webp', 
            alt: 'application'
        },
        {
            text:<>We add an <span className="text-h3 max-sm:text-h5/tight"> intelligent layer </span>to the <span className="text-h3 max-sm:text-h5/tight">product.</span></> , 
            image:'/animes/img-3.webp', 
            alt: 'intelligence-layer',
            className: 'object-cover h-full w-full'
        },
        {
            text:<>Get your product. <br /><span className="text-h3 max-sm:text-h5/tight">Future upgrades</span> also <span className="text-h3 max-sm:text-h5/tight">packed.</span></> , 
            image:'/animes/img-4.webp', 
            alt: 'finalized_product',
            className: 'object-cover h-full w-full'
        }
    ]


    return(
        <>
            {/* the section title  */}
            <div className="w-full flex justify-center" id="takeLook">
                <div className="flex w-full max-w-[1024px] max-md:px-2 sm:max-lg:px-3">
                    <p className="text-h6 whitespace-nowrap max-[400px]:text-h6 *:font-bold"><span>Lets</span> take a <span>look</span></p>
                </div>
            </div>

            {/* teh section starts here */}
            {/* <!-- section for gsap animation --> */}
            <section className="overflow-hidden">

                {/* the outer div for holding screen */}
                <div className="w-full bg-primary-black flex justify-center">

                    {/* the inner div for holding all the cards scrolled */}
                    <div className="w-full max-w-[1024px] flex flex-col">

                        {/* the actual scroller x-y animator */}
                        <div id="content" className="w-full *:max-w-[1024px] *:w-full *:aspect-video *:max-md:aspect-[9/12] flex relative max-md:gap-10 *:relative *:shrink-0 overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden will-change-[scroll-position] scroll-x snap-mandatory">

                            {cards.map((card, index) => <ScrollCards key={index} cardContent={card.text} cardImg={card.image} cardImgAlt={card.alt} imgClasses={card?.className}/>)}

                        </div>

                    </div>

                </div>

            </section>

        </>
    );

}