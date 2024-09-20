import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='fixedbottom-0 w-full flex justify-center p-4 bg-pink-300'>
        <Link href="#" className='pl-6 pr-6'>Privacy</Link>
        <Link href="#" className='pl-6 pr-6'>Terms</Link>
        <Link href="#" className='pl-6 pr-6'>Condition</Link>
      
    </div>
  )
}

export default Footer
