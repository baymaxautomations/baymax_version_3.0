import CardsVertical from "./CardsVertical";

export default function ExperiencesSnapshot(){

    const cards = [
        {path:'/home/experiences/1.webp', imgAlt:'late night messaging', text:<><span>Surprising customers</span> at late night <span>responses.</span></>, color:`text-primary-white`},
        {path:'/home/experiences/2.webp', imgAlt:'less talking more listening', text:<>Delivering the <span>intelligent</span> content that <span>listens to you.</span></>, color:`text-primary-black`},
        {path:'/home/experiences/3.webp', imgAlt:'humanoid bot', text:<>Delivering the <span>intelligent</span> content that <span>listens to you.</span></>, color:`text-primary-white text-shadow-xs text-shadow-secondary-grey`},
        {path:'/home/experiences/4.webp', imgAlt:'people discussing', text:<>Add new automations <span>metrics</span> to the <span>business.</span></>, color:`text-primary-white text-shadow-xs text-shadow-secondary-grey`}
    ]

    return (

        <section className="flex justify-center items-center h-fit w-full relative" id="experiences">

            {/* section content here goes */}
            <div className="content flex h-full w-full max-w-[1024px] flex-col gap-2 py-4 relative z-100 sm:max-lg:px-3">
            
            {/* section title goes here */}
            <div className="section-title text-h6 px-1 max-md:px-2"> <span className="font-bold">Snapshot</span> of Experiences.</div>

                {/* cards outer window*/}
                <div className="section-cards w-full max-md:px-2" id="cards-viewer">
                    
                    {/* card holder catalog */}
                    <div className="h-90 max-sm:h-50 flex overflow-x-scroll gap-6 max-md:gap-4 max-sm:gap-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden *:rounded-[40px] *:max-sm:rounded-2xl">

                        {/* cards here */}
                        {cards.map((card, index) => <CardsVertical key={index} imgAlt={card.imgAlt} imgSrc={card.path} content={card.text} textColor={card.color} />)}

                    </div>

                </div>

            </div>

            {/* the section background */}
            <div className="h-full absolute z-0 w-full bg-primary-grey opacity-10"></div>

        </section>

    );


}