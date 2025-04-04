import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const WaitList = () => {
  return (
    <div className='w-full min-h-screen bg-primary-ghibli'>
      <div className="container text-text-ghibli pt-10 max-w-7xl">
        <nav className="flex items-center justify-between">
        <Link href="/" className="flex ga items-center">
          <h1 className="text-3xl text-text-ghibli font-[family-name:var(--font-nav)] -ml-2 font-bold">Permissionless</h1>
        </Link>
        </nav>

        <div className="flex flex-col gap-1 mt-16 items-center justify-center">
            <h1 className="text-4xl text-text-ghibli font-bold">{`Discover What Others Can't See`}</h1>
            <p className="text-lg text-text-ghibli/90 ">Actionable data to find trends before they go mainstream</p>


            <div className="flex mt-6 items-center rounded-md">
                <input type="email" placeholder="Enter your email" className="px-4 py-2 w-96 rounded-l-md border border-secondary-light focus:outline-none focus:ring-2 focus:ring-primary-ghibli" />
                <button className="bg-primary-ghibli text-white px-4 py-2 rounded-r-md hover:bg-secondary-light transition duration-300">Join the Waitlist</button>
            </div>
            <small className="font-bold ">7 days free trial. Cancel anytime</small>

            <div className="flex gap-10 mt-20 items-center max-w-[80%]">
                <Image src="/after.jpeg" alt="before" width={600} height={600} className="rounded-lg object-cover h-[450px] w-[400px]" />
                <Image src="/before.jpeg" alt="after" width={600} height={600} className="rounded-lg object-cover h-[450px] w-[400px]" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default WaitList
