export default function ContactMain(){

    return (

        <section className="w-full relative flex justify-center py-4 max-lg:py-2 max-sm:py-0">

            <div className="relative w-full max-w-[1024px] aspect-video max-sm:h-screen max-h-[700px] overflow-hidden rounded-[40px] max-[1025px]:rounded-none">
                
                <div className="relative z-200 h-full w-full flex flex-col justify-center items-center">
                    <div className="text-h3 font-bold absolute max-sm:text-h4 text-center text-wrap text-primary-white">
                        <a href="#">Connect with Baymax Automations &gt;</a>
                    </div>
                </div>

                <div className="absolute h-full w-full bg-blue-300 top-0 left-0 z-100">
                    <img src="/sections/hand_shake.webp" alt="contact_hand" className="bg-linear-0 from-neutral-200/15 to-neutral-500 object-cover h-full w-full " />
                </div> 
                
            </div>

        </section>

    );
    
}