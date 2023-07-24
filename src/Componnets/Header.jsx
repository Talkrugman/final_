import Navbar from "./Navbar";

export default function Header() {
    return <header className="bg-blue-500 py-4">
        <nav className="container mx-auto flex items-center justity-between px-4">
            <a href="#" className="text-white text-lg font-semibold">Homemade Gluten Free Products</a>
            <ul className="flex space-x-4">
                <li><a href="#" className="text-white hover:text-gray-200">Home</a></li>
                <li><a href="#" className="text-white hover:text-gray-200">About</a></li>
                <li><a href="#" className="text-white hover:text-gray-200">Service</a></li>
                <li><a href="#" className="text-white hover:text-gray-200">Content</a></li>
            </ul>
        </nav>
    </header>
    {/* <header>
        <Navbar />
    </header> */}
}

