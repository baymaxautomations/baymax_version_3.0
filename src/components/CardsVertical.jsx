export default function CardsVertical({imgAlt, imgSrc, content="sample content", textColor="text-primary-white"}){

    return (
        //the card here
        <div className="h-full aspect-[617/771] relative overflow-hidden shrink-0 p-[5%] max-sm:px-[3%]">

            {/* card content here */}
            <p className={`relative z-100 ${textColor} *:font-bold text-h6 w-[65%] max-sm:text-h7 max-sm:w-[70%]`}>{content}</p>

            {/* card image here */}
            <img src={imgSrc} alt={imgAlt} className="absolute z-0 top-0 left-0 object-cover object-top" />
        </div>
    );

}