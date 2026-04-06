import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import TagLine from '../components/TagLine'
import Deliveries from '../components/Deliveries'
import ExperiencesSnapshot from '../components/Experiences'
import ScrollY from '../components/ScrollY'
import CoreElement from '../components/CoreElement'
import ContactMain from '../components/ContactMain'
import Footer from '../components/Footer'

function Home(){

    return (
        <>
            {/* navbar here */}
            <Navbar />
            
            {/* now the main section starts */}
            <main className='flex flex-col gap-3 max-sm:gap-2'>
                
                <Hero />
                <TagLine />
                <Deliveries />
                <ExperiencesSnapshot />
                <ScrollY />
                <CoreElement />
                <ContactMain />
                <Footer />

            </main>

            {/* footer hereby */}
        </>
    );

}

export default Home;