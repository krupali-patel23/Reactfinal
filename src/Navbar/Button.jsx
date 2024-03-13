import React from 'react'

export default function Button() {
  return (
    <div className='flex'>
        <form
                action="#"
                className="rounded-full border-gray-20 border-2 w-64 h-9 text-center p-1"
              >
                <input type="text" name="search" placeholder="Search keyword"/>
                <button>
                  <ion-icon name="search-outline"></ion-icon>
                 
                </button>
        </form>
        <div className=" text-xl m-1 ">
                <ion-icon name="heart-outline" ></ion-icon>
                <ion-icon name="bag-outline" ></ion-icon>
        </div>
    </div>
  )
}
