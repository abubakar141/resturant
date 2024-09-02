import React from 'react'

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/resturant.jpeg')" }}
    >
      <button className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800">
        Explore Menu
      </button>
    </div>
  )
}

export default Hero
