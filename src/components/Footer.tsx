
function Footer(){
return <footer className="bg-black  text-gray-400 py-12">
       <div className="max-w-6xl  mx-auto grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
         px-4 gap-10 sm:px-6 lg:px-8">
       <div>
        <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
        <p className="mb-4">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
       </div>
       <div>
       <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
       <ul>
        <li>
            <a href="#" 
            className="hover:text-white transition-color duration-300">Home</a>
        </li>
       </ul>
       <ul>
        <li>
            <a href="#" 
            className="hover:text-white transition-color duration-300">About</a>
        </li>
       </ul>
       <ul>
        <li>
            <a href="#" 
            className="hover:text-white transition-color duration-300">Courses</a>
        </li>
       </ul>
       <ul>
        <li>
            <a href="#" 
            className="hover:text-white transition-color duration-300">Contact Us</a>
        </li>
       </ul>
       </div>
       <div>
        <h2 className="text-lg font-semibold text-white mb-4">Follow Us</h2>
        <div className="flex  flex-col item-center space-x-4">
            <a 
            href="https://www.facebook.com/define.sunily"
            className="hover:text-white ml-4 transition-color duration-300"
            >Facebook</a>
            <a
            href="https://www.instagram.com/thedeepesh_x/"
            className="hover:text-white transitionn-color duration-300"
            >Instagram</a>
            <a
            href="https://github.com/TheDeepeshX"
            className="hover:text-white transitionn-color duration-300"
            >Github</a>
        </div>
       </div>
       <div>
       <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>Gwalior, India</p>
          <p>Dabra,Danda</p>
          <p>Email: Thedeepesh@gamil.com.com</p>
          <p>Phone:+91 8516815519</p>
        </div>
       </div>
     </div>
       <p className="text-center text-s pt-8">© 2024 Music School. All rights reserved.</p>
    </footer>
}
export default Footer;;