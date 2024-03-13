import React from "react";
import Logo from "../Navbar/Images/logo-3.png";
import Button from "./Button";
// import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="shadow-md w-full fixed top-0 left-0" style={{position:"absolute" ,
    zIndex:"1", }}>
        <div className="h-20">
          <div className="flex justify-around content-center	p-4	">
            
            <div className="">
              <img src={Logo} />
            </div>
           
            <ul className="font-medium flex gap-8 items-center text-base cursor-pointer">
              <li>
                <a href="/" className="text-gray-800 no-underline ">
                  Home
                </a>
              </li>
              <li>
                <a href="/shop" className="text-gray-800 no-underline ">
                  Shop+
                </a>
              </li>
              <li>
                <a href="/pages" className="text-gray-800 no-underline ">
                  Pages +
                </a>
              </li>
              <li>
                <a href="/blog" className="text-gray-800 no-underline ">
                  Blog +
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-800 no-underline ">
                  Contact
                </a>
              </li>
            </ul>

            <div className="flex" >
                  <Button/>
              {/* <form
                action="#"
                className="rounded-full border-gray-20 border-2 w-64 h-9 text-center p-1"
              >
                <input type="text" name="search" placeholder="Search keyword" />
                <button>
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </form> */}
             
            </div>
            {/* <div className="text-3xl absolute right-2 top-6 ">
              <ion-icon name="menu-outline"></ion-icon>
            </div> */}
          </div>
        </div>
      </div>
      {/* -==========banner=============== */}
      {/* <div className='my-0 '>
            <img src={banner}/>
      </div> */}
    </>
  );
}
