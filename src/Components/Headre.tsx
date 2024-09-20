import React from 'react'
import Link from 'next/link'
const Headre = () => {
  return (
    <div className='flex gap-20 p-5 bg-lime-200 '>
      <Link href="\">Home</Link>
      <Link href="\About">About</Link>
      <Link href="\Politics">Politics</Link>
      <Link href="\Food">Food</Link>
    </div>
  )
}

export default Headre
