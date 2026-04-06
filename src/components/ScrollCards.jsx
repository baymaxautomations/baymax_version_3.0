export default function ScrollCards({cardContent, cardImg, cardImgAlt, imgClasses ='',}){

    return (

        <div className="shrink-0 w-full aspect-video max-md:aspec-[9/12] relative grid grid-cols-2 grid-rows-1 max-sm:flex max-sm:flex-col-reverse max-sm:justify-end max-sm:items-center items-center gap-10 max-sm:gap-0 max-sm:mb-2 snap-center snap-always">
              
              <p className="max-w-[80%] sm:justify-self-end text-h4/tight max-lg:text-h5/tight max-sm:text-h6/tight text-primary-white *:font-bold max-sm:my-10">{cardContent}</p>
              
              <div className="aspect-[400/500] overflow-hidden w-[70%] rounded-xl max-sm:w-full max-sm:aspect-square max-sm:rounded-none">
                <img src={cardImg} alt={cardImgAlt} className={imgClasses}/>
              </div>

        </div>

    );

}


// AI made

// export default function ScrollCards({ cardContent, cardImg, cardImgAlt, imgClasses = '' }) {

//     return (

//         <div className="
//             shrink-0 w-full h-full
//             relative snap-center snap-always
//             grid grid-cols-2 grid-rows-1 items-center gap-10
//             max-sm:flex max-sm:flex-col max-sm:gap-0
//         ">

//             {/* ── image ── always the same height on mobile ── */}
//             <div className="
//                 order-2
//                 aspect-[400/500] overflow-hidden w-[70%] rounded-xl
//                 max-sm:order-1 max-sm:w-full max-sm:rounded-none
//                 max-sm:h-[58%] max-sm:aspect-auto max-sm:shrink-0
//             ">
//                 <img
//                     src={cardImg}
//                     alt={cardImgAlt}
//                     className={`w-full h-full object-cover ${imgClasses}`}
//                 />
//             </div>

//             {/* ── text ── */}
//             <p className="
//                 order-1
//                 max-w-[80%] sm:justify-self-end
//                 text-h4/tight max-lg:text-h5/tight max-sm:text-h6/tight
//                 text-primary-white *:font-bold
//                 max-sm:order-2 max-sm:px-4 max-sm:py-4
//                 max-sm:max-w-full max-sm:w-full
//             ">
//                 {cardContent}
//             </p>

//         </div>

//     );
// }