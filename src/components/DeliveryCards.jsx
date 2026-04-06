export default function DeliveryCards({title=[], body={upper:'',lower:''}, buttonContent='', cardImage={}}){

    return(
        // the card here
        <div className="w-full aspect-video shrink-0 snap-start overflow-hidden relative grid grid-rows-[1fr_0.6fr] md:grid-rows-2 gap-10 px-15 max-sm:px-6 max-sm:gap-4">
            
            {/* card title here */}
            <div id="card-title" className="relative z-100 h-full w-full text-h4/tight max-sm:text-h6/tight">
                <div className="flex flex-col justify-end h-full">
                    {title.map((content, index) => (<span key={index} className={content?.classes || ''}>{content.text}</span>))}
                    {/* {title.map((content, index) => (
                        <span key={index} className={content?.classes || ''}>{content.text}</span>
                    ))} */}
                </div>
            </div>

            {/* card body/description here */}
            <div id="card-body" className="relative z-100 h-full w-[40%] row-start-2 col-start-1 flex flex-col *:w-fit">
                <div id="card-description" className="text-h5 max-sm:hidden h-[60%] overflow-hidden"><span className="font-bold text-h4">{body.upper}</span> {body.lower}</div>
                <button className="text-h4 max-sm:text-h6 font-bold text-primary-grey opacity-60 cursor-pointer whitespace-nowrap">{buttonContent} &#8594;</button>
            </div>

            {/* card image here */}
            <img src={cardImage?.source} alt={cardImage?.alt} class="absolute object-cover scale-110 inset-0" />

        </div>

    );

}