import React from "react";

export default function Contact() {
  return (
    <>
      <div>
        <div
          style={{ backgroundColor: "#f8f8f8", height: "150px", width: "100%" }}
          className="mt-20"
        >
          <h1 className="text-4xl font-serif text-black text-center pt-12">
            Contact page
          </h1>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-ms-12">
            <div className="flex justify-evenly">
              <div>
                <p className="font-sans	text-2xl font-semibold pt-24">
                  Leave a Message
                </p>
                <form action="#" className="grid gap-y-4">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Frist Name"
                      className="bottom-5 rounded border-gray-100 border-solid border-2 py-2 pl-4 pr-40"
                    />

                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      className="bottom-5 rounded border-gray-100 border-solid border-2 py-2 pl-4 pr-40 ml-4"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="bottom-5 rounded border-gray-100 border-solid border-2 py-2 pl-4 pr-40"
                    />

                    <input
                      type="number"
                      name="phn"
                      placeholder="Phone Number"
                      className="bottom-5 rounded border-gray-100 border-solid border-2 py-2 pl-4 pr-40 ml-4"
                    />
                  </div>

                  <textarea
                    name="Message"
                    id="Messa"
                    cols="25"
                    rows="5"
                    placeholder="Message"
                    className="bottom-5 rounded border-gray-100 border-solid border-2 py-2 pl-4 pr-40"
                  ></textarea>
                </form>
                <button className=" bg-black text-white	font-sans	w-40 h-12 rounded-lg text-xl mt-3">
                  Save Message
                </button>
              </div>

              <div
                className="w-96 mt-24 rounded pt-8  grid gap-y-4"
                style={{ backgroundColor: "#f8f8f8", height: "400px" }}>
                <div className="container">
                  <div className="row">
                    <h4 className="font-bold">Get In Touch</h4>
                    <div className="flex pt-3">
                      <span className=" text-3xl text-black pt-1">
                        <ion-icon name="location-outline"></ion-icon>
                      </span>
                      <p className="font-sans text-lg text-slate-500 w-56 ml-4">
                        989 Bel Meadow Drive Los Angeles, CA 90017
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <span className=" text-2xl text-black  ">
                      <ion-icon name="call-outline"></ion-icon>
                    </span>
                    <p className="font-sans text-slate-600  w-56 ml-4">
                      (+1) 909-407-2988
                      <p className="font-sans text-slate-600  w-56 ">
                        (+1) 470-142-2412
                      </p>
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <span className=" text-2xl text-black  ">
                      <ion-icon name="time-outline"></ion-icon>
                    </span>
                    <p className="font-sans text-slate-600  w-56 ml-4">
                      Store Hours:
                      <p className="font-sans text-slate-600  w-56 ">
                        Mon - Sat : 8:00am - 5:00pm
                      </p>
                    </p>
                  </div>

                  <div className="flex">
                    <p className="font-sans	text-xl">Follow Us:</p>
                    <p  className="text-slate-600 text-xl pt-1 ">
                      <ion-icon name="logo-facebook"></ion-icon>
                      <ion-icon name="logo-twitter"></ion-icon>
                      <ion-icon name="logo-instagram"></ion-icon>
                      <ion-icon name="logo-youtube"></ion-icon>
                      <ion-icon name="logo-tiktok"></ion-icon>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12"></div>
    </>
  );
}
