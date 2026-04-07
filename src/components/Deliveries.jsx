import { useRef } from "react";
import DeliveryCards from "./DeliveryCards";
import Controller from './Controller';

export default function Deliveries(){
    const scrollRef = useRef()

    return(
        // main section here
        <section className="flex justify-center items-center h-fit w-full relative" id="deliveries">
            
            {/* main cards here precedes */}
            <div className="content flex h-full w-full max-w-[1024px] flex-col gap-2 py-4 relative z-100 sm:max-lg:px-3">

                {/* main deliveries line here. */}
                <div className="section-title text-h6 px-1 max-md:px-2">Recent <span className="font-bold">Deliveries.</span></div>

                {/* section cards here -- the outer cards viewer*/}
                <div className="h-fit section-cards w-full max-md:px-2 relative flex items-center" id="cards-viewer">
                    
                    {/* here place the card controller */}
                    <Controller zIndex='z-300' scrollRef={scrollRef}/>
                    <Controller zIndex='z-300' controlSide="right" scrollRef={scrollRef}/>

                    {/* all cards holder */}
                    <div ref={scrollRef} className="flex overflow-x-scroll scroll-smooth snap-x snap-mandatory gap-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden *:rounded-[40px] *:max-sm:rounded-2xl relative">


                        <DeliveryCards title={
                            [{text:'Artificial', classes:'font-bold'}, {text:'Personal'}, {text:'Assistant.'}]} body={{upper:'I', lower:'can handle all of your daily tasks and office work and let you get notified via daily reports, schedule...'}} buttonContent="Learn More " cardImage={{alt:'Artifical Personal Assistant', source:'/home/cards/product-1.webp'}} />
                        
                        <DeliveryCards title={
                            [{text:'Artificial', classes:'font-bold'}, {text:'Customer'}, {text:'Service Expert.'}]} body={{upper:'I', lower:'can handle all the customer query, managing their appointments, and...'}} buttonContent="Learn More " cardImage={{alt:'Artifical Customer Service Expert', source:'/home/cards/product-2.webp'}} />
                        
                        <DeliveryCards buttonContent="Explore More " cardImage={{alt:'Baymax Store', source:'/home/cards/product-3.webp'}} />

                    </div>

                </div>

            </div>

            {/* the sectino background here */}
            <div className="h-full absolute z-0 w-full bg-primary-grey opacity-10"></div>
        </section>
    );       
}