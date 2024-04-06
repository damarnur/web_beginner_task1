import React from 'react'

function Button({ href, deskripsi }) {
  return (
    // button wrapper
      <div>
        <button className='bg-[#333] text-white w-full py-2 rounded-lg hover:bg-[#c5f82a] hover:text-black hover:transition-all transform ease-in-out duration-300'><a href={href}>{deskripsi}</a></button>
      </div>
  )
}

export default Button