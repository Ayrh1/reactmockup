
//import NavBackground from '../img/NavBAckground6.png'; // Correct the path as necessary
//import Logo from '../img/logo.png'; // Correct the path as necessary

function Header() {
    return (
        <header className="flex flex-col justify-center h-screen w-3/12 bg-repeat" style={{ backgroundImage: `url("/NavBAckground6.png")` }}>
            <div className="flex flex-col justify-top h-screen w-full rounded-full">
                <img className="w-52 m-5 rounded-md self-center shadow-2xl shadow-black" src='./img/logo.png' alt="TechLogoImg" />
                <div className="rounded-full self-center mb-8 bg-[#00214f] border-4 border-white border-solid shadow-black shadow-xl outline outline-4 outline-white outline-offset-4">
                    <img id="display_image" className="h-32 w-32 rounded-full bg-black" src="./path/to/bookworm1.jpeg" alt="Bookworm Avatar" /> {/* Correct the path as necessary */}
                </div>

                <button id="openModal" className="bg-blue-800 self-center rounded-md h-8 w-28 text-white shadow-black shadow-md">My Avatar</button>

                <div id="avatarModal" className="modal">
                    <div className="modal-content">
                        <span className="close">&times;</span>
                        <div id="avatar-gallery">
                            {/* Update image paths and use className */}
                            <img className="avatar-option" src="./public/img/avators/book1.jpeg" alt="Avatar 1" />
                            <img className="avatar-option" src="./public/img/avators/book2.jpeg" alt="Avatar 2" />
                            <img className="avatar-option" src="./public/img/avators/bookworm1.jpeg" alt="Avatar 3" />
                            <img className="avatar-option" src="./public/img/avators/cat.jpeg" alt="Avatar 4" />
                            <img className="avatar-option" src="./public/img/avators/fox.jpeg" alt="Avatar 5" />
                            <img className="avatar-option" src="./public/img/avators/owl.png" alt="Avatar 6" />
                        </div>
                    </div>
                </div>
            </div>
            <nav className="flex flex-col content-center h-3/4 w-full max-h-fit">
                {/* Update buttons to use React's onClick for navigation */}
                <button onClick={() => window.location.href = '/dashboard'} className="bg-sky-500 w-4/5 h-14 m-4 self-center shadow-white shadow-inner rounded-lg text-3xl font-serif antialiased hover:bg-[#f4edd6] outline outline-4 outline-sky-600 outline-offset-4 hover:outline-[#f4edd6]">Dashboard</button>
                <button onClick={() => window.location.href = '/Mylist'} className="bg-sky-500 w-4/5 h-14 m-4 self-center shadow-white shadow-inner rounded-lg text-3xl font-serif antialiased hover:bg-[#f4edd6] outline outline-4 outline-sky-600 outline-offset-4 hover:outline-[#f4edd6]">MyList</button>
                <button onClick={() => window.location.href = '/login'} className="bg-sky-500 w-4/5 h-14 m-4 self-center shadow-white shadow-inner rounded-lg text-3xl font-serif antialiased hover:bg-[#f4edd6] outline outline-4 outline-sky-600 outline-offset-4 hover:outline-[#f4edd6]">Login</button>
                <button onClick={() => window.location.href = '/logout'} className="bg-sky-500 w-4/5 h-14 m-4 self-center shadow-white shadow-inner rounded-lg text-3xl font-serif antialiased hover:bg-[#f4edd6] outline outline-4 outline-sky-600 outline-offset-4 hover:outline-[#f4edd6]">Logout</button>
            </nav>
        </header>
    );
}

export default Header;