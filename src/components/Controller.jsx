export default function Controller({zIndex = 'z-0', controlSide = 'left', scrollRef}){
    
    function scrollLeft(){
        const amount = window.innerWidth < 640 ? -400 : -800
        scrollRef.current.scrollBy({ left:amount, behavior: 'smooth'})
    }
    function scrollRight(){
        const amount = window.innerWidth < 640 ? 400 : 800
        scrollRef.current.scrollBy({ left:amount, behavior: 'smooth'})
    }

    return(
        <button onClick={controlSide=='left'?scrollLeft:scrollRight} className={`absolute ${zIndex} h-full w-fit flex items-center ${controlSide=='left'?'left-0':'right-0'}`}>
            <p className="h-fit aspect-square rounded-full text-h1 max-sm:text-h5 px-2 max-sm:px-3 text-white">
                {controlSide=='left'?'<':'>'}
            </p>
        </button>
        // <div id="controller" className={`h-full w-full absolute top-0 flex justify-between items-center ${zIndex}`}>
        //     <button className="text-center bg-blue-400 flex items-center">{'<'}</button>
        //     <button className="text-center bg-blue-400 flex items-center">{'>'}</button>
        // </div>

        // classes used - p-2 text-h1 font-bold hover:bg-primary-grey/50
    );

}