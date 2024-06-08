import React from 'react'

const IMAGE_WIDTH=240
const IMAGE_HEIGHT=200

export default function About() {
  return (
    <div className='py-20 px-4 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-slate-800'>About Orion Estate</h1>

      <p className='mb-4 text-slate-700'>Orion Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods. Our team of experienced agents is dedicated to providing exceptional service and making the buying and selling process as smooth as possible.</p>
      <p className='mb-4 text-slate-700'>
      Our mission is to help our clients achieve their real estate goals by providing expert advice, personalized service, and a deep understanding of the local market. Whether you are looking to buy, sell, or rent a property, we are here to help you every step of the way.
      </p>
      <p className='mb-4 text-slate-700'>Our team of agents has a wealth of experience and knowledge in the real estate industry, and we are committed to providing the highest level of service to our clients. We believe that buying or selling a property should be an exciting and rewarding experience, and we are dedicated to making that a reality for each and every one of our clients.</p>
      <div className='flex flex-row justify-evenly mt-[50px]'>
        <img src="/assets/image/P1.jpg" className='border-[2px] shadow shadow-slate-700 border-gray-600 rounded-[15px]'  style={{height:IMAGE_HEIGHT,width:IMAGE_WIDTH}}/>
        <img src="/assets/image/P2.jpg" className='border-[2px] shadow shadow-slate-700 border-gray-600 rounded-[15px]'  style={{height:IMAGE_HEIGHT,width:IMAGE_WIDTH}}/>
        <img src="/assets/image/P3.jpg" className='border-[2px] shadow shadow-slate-700 border-gray-600 rounded-[15px]'  style={{height:IMAGE_HEIGHT,width:IMAGE_WIDTH}}/>
        <img src="/assets/image/P4.jpg" className='border-[2px] shadow shadow-slate-700 border-gray-600 rounded-[15px]'  style={{height:IMAGE_HEIGHT,width:IMAGE_WIDTH}}/>
      </div>
    </div>
  )
}
