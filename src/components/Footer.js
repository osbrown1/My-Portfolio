import React from 'react'
import Layout from './Layout'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark
    font-medium text-lg">
      <Layout className='py-8 flex items-center justify-between'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
        <div className='flex items-center'>
        Web Development <span className='text-primary text-2xl px-1'>&#9825;</span><Link href="/">Game Development</Link>
        </div>
        <Link href="/" target={"_blank"}>Say Hello</Link>
      </Layout>
    </footer>
  )
}

export default Footer