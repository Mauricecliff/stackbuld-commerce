"use client";

import * as React from 'react'
import Image from "next/image";
import { cn } from '@/lib/utils';



const ProductGallery = ({images}: {images: string[]}) => {
 const [currentImage, setCurrentImage] = React.useState(0)

  return (
    <div className='space-y-4'>
      <Image 
        src={images[currentImage]}
        height={1000}
        width={1000}
        className='min-h-[300px] object-cover object-center'
        alt='product-image'
      />
      <div className='flex'>
        {images.map((image, index) => (
          <div key={image} className={cn('border mr-2 cursor-pointer hover:border-orange-600', currentImage === index && 'hover:border-orange-500' )} onClick={() => setCurrentImage(index)}
>
             <Image alt="product-thumbnail" height={100} width={100} src={image}/>
          </div>

        ))}
      </div>
    </div>
  )
}



export default ProductGallery