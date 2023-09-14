import React from 'react'

const page = () => {
  return (
    <section className="bg-gray-900 px-6 pt-14 lg:px-8 font-montserrat w-screen h-screen" id="home">
      <div className='flex justify-center gap-5 w-full'>
        <div className=''>
          <p className='text-white'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, corrupti.
          </p>
        </div>
        <div className=''>
          {/* lorempicsum */}
          <img src="https://picsum.photos/200/300" alt="" />
        </div>
      </div>
    </section>
  )
}

export default page