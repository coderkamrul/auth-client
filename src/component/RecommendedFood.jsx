import React from 'react'
import FoodCard from "../assets/food-card.png"
import Item2 from "../assets/item2.png"
import Item3 from "../assets/item3.png"
import Item4 from "../assets/item4.png"
import { FaHeart, FaStar } from 'react-icons/fa'

const RecommendedFood = () => {
    const data=[
        {
        image:FoodCard,
        name:"Kebab",
        rating:"4.3",
        rCount:"4",
        price:"$120",
        },
        {
            image:Item2,
            name:"Pasta",
            rating:"4.3",
            rCount:"4",
            price:"$160",
            },
        {
        image:Item3,
        name:"Chicken",
        rating:"4.3",
        rCount:"4",
        price:"$90",
        },
        {
        image:Item4,
        name:"Fried Rice",
        rating:"4.3",
        rCount:"4",
        price:"$30",
        },
    ]
    console.log(data)
  return (
    <div className=' py-3 px-10 sm:px-4 md:px-6 lg:px-6'>
        <div className='container mx-auto py-[2vh]'>
            <div className=' text-2xl md:text-3xl font-bold text-center text-[#2e2e2e] lg:text-4xl'>
                Recommendate <span className='text-[#f54748]'>Foods</span>
            </div>
            <div className='grid py-6 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
            {data.map((item)=>
                <div className='food-card bg-red-500/10 rounded-xl flex flex-col cursor-pointer items-center p-5'>
                    <div className=' relative mb-3'>
                        <img src={item.image} alt='' className='h-64' />
                        <div className=' absolute top-2 left-2'>
                            <button className=' shadow-sm text-white bg-red-500 hover:bg-red-700 cursor-pointer p-5 rounded-full relative'> <FaHeart className=' absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
                            </button>
                        </div>
                        <div className=' absolute bottom-2 right-2'>
                            <button className=' shadow-sm bottom-4 border-white text-white bg-[#fdc55e] cursor-pointer p-3 h-14 w-14 text-xl font-bold rounded-full relative'>
                                <div className=' absolute text-xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{item.price}</div>
                            </button>
                        </div>
                    </div>
                    <div className='flex gap-4 mb-3 items-center'>
                        <p className=' text-xl text-center font-bold text-[#f54748]'>
                            {item.name}
                        </p>
                        <div className='flex text-sm space-x-2 cursor-pointer'>
                            <span className=' font-normal text-[#fdc55e]'>{item.rating}</span>
                            <FaStar size={16} className='text-[#fdc55e]'/>
                            <span className=' font-medium'>({item.rCount})</span>
                        </div>
                    </div>
                    <button className=' bg-[#f54748] active:scale-90 transition duration-150 transform hover:shadow-xl shadow-md rounded-full px-8 py-2 text-xl font-medium text-white'>
                        Order Now
                    </button>
                </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default RecommendedFood