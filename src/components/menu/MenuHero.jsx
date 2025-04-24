import React from 'react'

const MenuHero = () => {
  return (
    <section className=' flex flex-col justify-center items-center md:min-h-[530px] min-h-[300px]   p-[4rem] menu_hero md:mt-[0rem] mt-[2rem]'>
        <div className='text-white text-center '>
            <h2 className='md:text-7xl font-bold sm:text-5xl  text-3xl  '>Our Menu</h2>
            <p className=' sm:text-lg text-sm max-w-md mt-[1rem]'>Because life is too short for bland coffee. Our brews are an invitation to taste, to feel, to savor.</p>
        </div>
    </section>
  )
}

export default MenuHero