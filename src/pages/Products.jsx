import Navbar from "../components/Navbar";
import Footer from '../components/Footer'

export default function Products(){
    return(
        <>
            {/* here comes the navbar */}
            <Navbar></Navbar>

            {/* here comes the main element */}
            <main className="min-h-[1000px]">
                <p>This is the product page.</p>
            </main>

            {/* here comes the footer. */}
            <Footer></Footer>
        </>
    );
}