import { useEffect, useRef, useState, useCallback } from 'react';
import ScrollCards from "./ScrollCards";

const AUTO_DELAY = 2500; // ms between auto-advances

export default function ScrollY() {

    const containerRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const timerRef = useRef(null);
    const isInteracting = useRef(false);

    const cards = [
        {
            text: <>Say you are a <span className="text-h3 max-sm:text-h5/tight">Doctor</span> and you want to respond to your patients <span className="font-bold">intelligently 24*7.</span></>,
            image: '/animes/img-1.webp',
            alt: 'doctor'
        },
        {
            text: <>You <span className="text-h3 max-sm:text-h5/tight">reach</span> us.<br /> We <span className="text-h3 max-sm:text-h5/tight">design</span> systems based on your given constrains.</>,
            image: '/animes/img-2.webp',
            alt: 'application'
        },
        {
            text: <>We add an <span className="text-h3 max-sm:text-h5/tight"> intelligent layer </span>to the <span className="text-h3 max-sm:text-h5/tight">product.</span></>,
            image: '/animes/img-3.webp',
            alt: 'intelligence-layer',
            className: 'object-cover h-full w-full'
        },
        {
            text: <>Get your product. <br /><span className="text-h3 max-sm:text-h5/tight">Future upgrades</span> also <span className="text-h3 max-sm:text-h5/tight">packed.</span></>,
            image: '/animes/img-4.webp',
            alt: 'finalized_product',
            className: 'object-cover h-full w-full'
        }
    ];

    /* ─── scroll a card into view ─── */
    const scrollTo = useCallback((index) => {
        const el = containerRef.current;
        if (!el) return;
        el.scrollTo({ left: el.clientWidth * index, behavior: 'smooth' });
        setActiveIndex(index);
    }, []);

    /* ─── start / restart the auto-advance timer ─── */
    const startTimer = useCallback(() => {
        clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            if (isInteracting.current) return;
            setActiveIndex(prev => {
                const next = (prev + 1) % cards.length;
                const el = containerRef.current;
                if (el) el.scrollTo({ left: el.clientWidth * next, behavior: 'smooth' });
                return next;
            });
        }, AUTO_DELAY);
    }, [cards.length]);

    /* ─── keep activeIndex in sync when the user manually swipes ─── */
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        let scrollEndTimer;
        const onScroll = () => {
            clearTimeout(scrollEndTimer);
            scrollEndTimer = setTimeout(() => {
                const idx = Math.round(el.scrollLeft / el.clientWidth);
                setActiveIndex(idx);
            }, 80);
        };

        el.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            el.removeEventListener('scroll', onScroll);
            clearTimeout(scrollEndTimer);
        };
    }, []);

    /* ─── kick off auto-scroll on mount ─── */
    useEffect(() => {
        startTimer();
        return () => clearInterval(timerRef.current);
    }, [startTimer]);

    /* ─── pause while user is touching / clicking ─── */
    const handleInteractStart = () => { isInteracting.current = true; };
    const handleInteractEnd   = () => {
        isInteracting.current = false;
        startTimer(); // restart the countdown from zero after they let go
    };

    /* ─── dot click ─── */
    const handleDotClick = (i) => {
        scrollTo(i);
        startTimer();
    };

    return (
        <>
            {/* section title */}
            <div className="w-full flex justify-center" id="takeLook">
                <div className="flex w-full max-w-[1024px] max-md:px-2 sm:max-lg:px-3">
                    <p className="text-h6 whitespace-nowrap max-[400px]:text-h6 *:font-bold">
                        <span>Lets</span> take a <span>look</span>
                    </p>
                </div>
            </div>

            {/* ── main section ── */}
            <section className="h-[600px] max-md:h-[520px] max-sm:h-[480px] bg-primary-black flex justify-center relative overflow-hidden">

                {/* scrollable card strip */}
                <div
                    ref={containerRef}
                    onMouseDown={handleInteractStart}
                    onMouseUp={handleInteractEnd}
                    onTouchStart={handleInteractStart}
                    onTouchEnd={handleInteractEnd}
                    className="
                        h-full w-full max-w-[1024px]
                        overflow-x-scroll
                        snap-x snap-mandatory
                        [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                        will-change-scroll
                        cursor-grab active:cursor-grabbing
                    "
                >
                    <div className="h-full flex">
                        {cards.map((card, index) => (
                            <ScrollCards
                                key={index}
                                cardContent={card.text}
                                cardImg={card.image}
                                cardImgAlt={card.alt}
                                imgClasses={card?.className}
                            />
                        ))}
                    </div>
                </div>

                {/* ── Apple-style pill indicator ── */}
                <div className="
                    absolute bottom-4 left-1/2 -translate-x-1/2
                    flex items-center gap-[6px]
                    px-3 py-2 rounded-full
                    bg-black/30 backdrop-blur-sm
                ">
                    {cards.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => handleDotClick(i)}
                            style={{
                                width:   i === activeIndex ? '22px' : '8px',
                                height:  '8px',
                                opacity: i === activeIndex ? 1 : 0.45,
                                transition: 'width 350ms cubic-bezier(0.34,1.56,0.64,1), opacity 300ms ease',
                            }}
                            className="
                                rounded-full bg-white
                                shrink-0 border-none outline-none
                                cursor-pointer
                            "
                        />
                    ))}
                </div>

            </section>
        </>
    );
}