import { useEffect, useRef } from 'react';
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollCards from "./ScrollCards";

gsap.registerPlugin(ScrollTrigger)

export default function ScrollY(){

    const sectionRef = useRef()   // pin this
    const contentRef = useRef()   // scroll this horizontally
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

    // useEffect( () => {
        
    //     const section = sectionRef.current
    //     const content = contentRef.current
    //     if (!section || !content) return

    //     // const timer = setTimeout( () => {
            
    //     //     const totalScroll = content.scrollWidth - content.clientWidth
    //     //     const NAV_HEIGHT = document.querySelector('nav')?.offsetHeight ?? 64

    //     //     const st = ScrollTrigger.create( {
    //     //         trigger : section,
    //     //         start : `top top`,
    //     //         end :  `+=${totalScroll}`,
    //     //         pin : true,
    //     //         pinSpacing: true,
    //     //         scrub: 1,
    //     //         markers: true,
    //     //         onUpdate: (self) =>{
    //     //             content.scrollLeft = self.progress * totalScroll
    //     //         }
    //     //     })

    //     //     return () => st.kill()
    //     // }, 300)
    //     const timer = setTimeout(() => {

    //         // force browser to recalculate layout first
    //         ScrollTrigger.refresh()

    //         const totalScroll = content.scrollWidth - content.clientWidth

    //         console.log('totalScroll:', totalScroll)  // check this value

    //         const st = ScrollTrigger.create({
    //             trigger: section,
    //             start: "top top",
    //             end: `+=${totalScroll}`,
    //             pin: true,
    //             pinSpacing: true,
    //             scrub: 1,
    //             markers: true,
    //             onUpdate: (self) => {
    //             content.scrollLeft = self.progress * totalScroll
    //             }
    //         })

    //         return () => st.kill()
    //     }, 500)  // increased from 300 to 500


    //     return () => clearTimeout(timer)

    // }, [] )

    useEffect(() => {
        const section = sectionRef.current
        const content = contentRef.current
        if (!section || !content) return

        let st

        const init = () => {
            ScrollTrigger.refresh()

            const totalScroll = content.scrollWidth - content.clientWidth

            st = ScrollTrigger.create({
            trigger: section,
            start: "top top",
            end: `+=${totalScroll}`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            onUpdate: (self) => {
                content.scrollLeft = self.progress * totalScroll
            }
            })
        }

        // wait for everything on page to fully load
        if (document.readyState === 'complete') {
            init()
        } else {
            window.addEventListener('load', init)
        }

        return () => {
            window.removeEventListener('load', init)
            if (st) st.kill()
        }
    }, [])

    return (
        <>
            
            {/* the section title  */}
            <div className="w-full flex justify-center" id="takeLook">
                <div className="flex w-full max-w-[1024px] max-md:px-2 sm:max-lg:px-3">
                    <p className="text-h6 whitespace-nowrap max-[400px]:text-h6 *:font-bold"><span>Lets</span> take a <span>look</span></p>
                </div>
            </div>

            {/* // full section */}
            <section ref={sectionRef} className="max-h-[700px] min-h-[500px] bg-primary-black flex justify-center">

                {/* outer window holder */}
                <div ref={contentRef} className="w-full max-w-[1024px] bg-primary-black overflow-x-scroll [scrollbar-width:none] [&::-webkit-scrollbar]:hidden will-change-[scroll-position]">
                    
                    {/* inner flex full cards holder main */}
                    <div className="h-full flex">
                        
                        {cards.map( (card, index) => <ScrollCards key={index} cardContent={card.text} cardImg={card.image} cardImgAlt={card.alt} imgClasses={card?.className} /> )}

                    </div>

                </div>

            </section>

        </>

    );
}