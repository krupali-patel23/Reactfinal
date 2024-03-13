import React from 'react'
import pro2 from "./images/pro-2.png";
import pro3 from "./images/pro-3.png";
import pro4 from "./images/pro-4.png";
import pro5 from "./images/pro-5.png";
import shop from "./images/shop-1.png";
import shop1 from "./images/shop-2.png";
import shop2 from "./images/shop6.png";

export default function Shop() {
  return (
    <>

<div style={{backgroundColor:"#f8f8f8",height:"150px",width:"100%"}} className='mt-20'>
          <h1 className="text-5xl font-serif text-black text-center pt-12">Shop page</h1>
      </div>

        <div className="container mt-20">
        <div className="row">
          <div className="col-md-12">
            <div className="flex justify-evenly fixe">
              <div>
                <img src={pro3} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Light Wood Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $550
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src={pro4} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Dark Stripe Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $850
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src={pro5} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Modern Fir Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $440
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src={pro2} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Dark Brown Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $740
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-20">
        <div className="row">
          <div className="col-md-12">
            <div className="flex justify-evenly fixe">
              <div>
                <img src={shop} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Light Wood Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $550
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src={pro2} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Dark Brown Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $740
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src={shop1} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Dark Stripe Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $850
                    </span>
                  </div>
                </div>
              </div>
              <div>
                <img src={shop2} style={{ width: "300px", Height: "400px" }} />
                <div
                  className="w-42 h-14 rounded-lg mt-6	"
                  style={{ backgroundColor: "#F8F8F8" }}
                >
                  <div className="flex justify-around py-3">
                    <p className="text-black	text-xl font-semibold	">
                      Modern Fir Door
                    </p>
                    <span className="text-gray-500	text-center	text-xl	">
                      $440
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <div className='mt-12'>

      </div>
    </>
  )
}
