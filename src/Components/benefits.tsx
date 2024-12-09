import React from 'react'
import Image from 'next/image'

const beneifits = () => {
  return (

    <div>
        

        <div className='bg-[#FAF3EA] flex flex-col md:flex-row justify-between items-center p-5 md:p-10 my-5 md:my-10 gap-6 md:gap-0'>
        <div className='flex items-center space-x-2'>
            <div>
                { <Image src="/trophy 1.png" width={50} height={50} alt='High Quality' /> }
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>High Quality</h3>
                <p className='text-sm md:text-base'>crafted from top materials</p>
            </div>
        </div>

        <div className='flex items-center space-x-2'>
            <div>
                { <Image src="/guarantee.png" width={50} height={50} alt='High Quality' /> }
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>warenty protection</h3>
                <p className='text-sm md:text-base'>crafted from top materials</p>
            </div>
        </div>

        <div className='flex items-center space-x-2'>
            <div>
                {<Image src="/shipping.png" width={50} height={50} alt='High Quality' /> }
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'> free shipping</h3>
                <p className='text-sm md:text-base'>crafted from top materials</p>
            </div>
        </div>

        <div className='flex items-center space-x-2'>
            <div>
                { <Image src="/customer-support.png" width={50} height={50} alt='High Quality' /> }
            </div>
            <div>
                <h3 className='text-lg md:text-xl font-bold'>24/7 support</h3>
                <p className='text-sm md:text-base'>crafted from top materials</p>
            </div>
        </div>
    </div>


    </div>
  )
}

export default beneifits;