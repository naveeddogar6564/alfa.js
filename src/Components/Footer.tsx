import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className='flex gap-20 fixed-bottom-0 w-full justify-center p-7 bg-pink-300'>
        <Link href="\Conditions">Conditions</Link>
        <Link href="\Privacy">Privacy</Link>
        <Link href="\Terms">Terms</Link>
       
       </div>
  )
}

export default Footer
