import React from 'react'
import '../styles/buttonhover.css'
const ButtonHover = () => {
  return (
    <div className='container'>
      <h1>Button Hover</h1>
      <div className='flex justify-space-between'>
        <button className='btn btn-1'>First</button>
        <button className='btn btn-2'>Second</button>
        <button className='btn  btn-border-slide'>Third</button>
        <div className='btn-grp'>
          <button className='btn btn-4'>Buy Now</button>
          <button className='btn  back-btn'>Buy Then</button>
        </div>
        <button className='btn btn-5'>Fifth</button>
      </div>
    </div>
  )
}

export default ButtonHover
