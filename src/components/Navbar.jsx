export default function Navbar() {

    return (

        <header className="w-full flex justify-center sticky z-500 top-0 bg-primary-white/80 backdrop-blur-sm">
            <nav className="max-w-[1024px] flex w-full py-1 px-4">
                <div id="logo" className="flex gap-2 items-center">
                    <img src="/logo.svg" alt="logo" className="object-contain h-[18px]" />
                    <span className="text-h6 max-md:hidden">BAYMAX AUTOMATIONS</span>
                </div>
                <div id="login" className="flex-1 flex justify-end">
                    <button className="text-h6 border-2 border-primary-black px-2 cursor-pointer">login</button>
                </div>
            </nav>
        </header>

    );

}