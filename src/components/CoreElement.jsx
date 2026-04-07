export default function CoreElement(){

    return (

        // main section of the div
        <section className="flex justify-center items-center h-fit w-full relative">

            {/* main content holder here */}
            <div className="content w-full max-w-[1024px] aspect-video flex flex-col justify-center max-sm:items-center gap-2 p-4 relative z-100 sm:max-lg:px-8">

                {/* text content here */}
                <div className="text-content max-sm:mb-5">
                <p className="font-bold text-h3 max-sm:text-h5 max-sm:text-center max-sm:pt-2">Core Element</p>
                <div>
                    <span className="text-h4 max-sm:text-h6 md:block">What you <span className="underline font-bold text-primary-red underline-offset-4">THINK</span></span>
                    <span className="text-h4 max-sm:text-h6 max-sm:pl-2 md:block">is what we <span className="underline font-bold underline-offset-4">MAKE</span></span>
                </div>
                </div>

                {/* presentation video here */}
                <div className="absolute max-sm:relative z-50 right-0 aspect-square h-[80%] max-sm:h-auto max-sm:w-[60%] max-sm:mt-10 max-sm:mb-6 order-first sm:max-lg:px-5">
                    <video autoPlay muted loop playsInline poster="/home/sections/think_1.png">
                        <source src="/home/sections/think_square_2.mp4" type="video/mp4" />
                        {/* <!-- <source src="video.webm" type="video/webm"> --> */}
                    </video>
                </div>
            </div>

            {/* main background here */}
          <div className="h-full absolute z-0 w-full bg-primary-grey opacity-10"></div>

        </section>

    );

}