import React, { useState} from "react";
import { Link } from "react-router-dom";

export default function NavBar () {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);

  return (
    <>
      <header
        className={`w-full bg-black/5 backdrop-blur-lg sticky top-0 z-20`}
      >
        <div className="max-w-6xl mx-[6rem] py-4 px-4 xl:px-0 flex items-center justify-between z-50">
          <Link href={"/"}>
            <img
              width="1000"
              height="1000"
              src='./assets/logoImage.png'
              alt="Logo"
              className="w-auto h-10 lg:h-12"
            />
          </Link>

          {/* Navigation section */}
          <nav>
            <ul className="text-primary text-lg font-semibold hidden lg:flex gap-10">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">Services</Link>
              </li>
              <li>
                <Link href="/">About Us</Link>
              </li>
              <li>
                <Link to="/quiz">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="flex gap-4">
            <Link
              href={"/auth/login"}
              className="hidden lg:flex bg-secondary font-bold text-primary py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
            >
              Login
            </Link>

            <Link
              href={"/auth/signup"}
              className="hidden lg:flex bg-secondary font-bold text-primary py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all duration-300 ease-in-out"
            >
              Register
            </Link>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleDrawer} className="z-50">
              {isOpen ? (
                  (
                    <img  width="100"
                height="1000"
                src='./assets/logoImage.svg'
                alt="Logoss" className="w-10 h-10  bg-red" />
                  )
                
              ) :
               (
                <img  width="100"
                height="1000"
                src='./assets/menu.png'
                alt="Logo" className="w-20 h-30 ml-10 bg-grey " />
              )
              }
            </button>
          </div>
        </div>
      </header>
      <div
        className={`h-screen overflow-hidden fixed z-[90] left inset-0 bg-white transition-all duration-500 ease-in-out overflow-x-hidden lg:hidden ${
          isOpen ? "w-screen" : "w-0"
        }`}
      >
        <div className="flex items-center justify-between p-4 w-full">
          <Link href={"/"}>
            <img
              width="1000"
              height="1000"
              src='./assets/logoImage.png'
              alt="Logos"
              className="w-auto h-10 lg:h-12"
            />
          </Link>
          <button onClick={toggleDrawer}>
          <img  width="100"
                height="1000"
                src='./assets/decline.svg'
                alt="Logoddd" className="w-10 h-10 text-primary" />
            {/* <XMarkIcon className="w-10 h-10 text-primary" /> */}
          </button>
        </div>
        <div className=" bg-primary font-semibold  w-full h-full">
          <div className="p-3 flex flex-col gap-2 overflow-hidden text-black">
            <button className=" p-4 text-left w-full rounded-lg">
              <Link href="/">Home</Link>
            </button>
            <button className=" p-4 text-left w-full rounded-lg">
              <Link href="/">Services</Link>
            </button>
            <button className=" p-4 text-left w-full rounded-lg">
              <Link href="/">About Us</Link>
            </button>
            <button className=" p-4 text-left w-full rounded-lg">
              <Link href="/">Contact</Link>
            </button>

            <button className=" p-4 text-left w-full rounded-lg">
              <Link href="/">Login</Link>
            </button>

            <button className="p-4 text-left w-full rounded-lg relative font-bold">
              <Link to="/quiz">Get Started</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
