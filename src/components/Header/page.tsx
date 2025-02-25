import Image from 'next/image'

const Header = () => {
  return (
    <div className='container flex items-center justify-between py-4'>
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={80} height={80} />
        <h1 className="text-3xl text-text-header font-[family-name:var(--font-nav)] -ml-2 font-semibold">Threadamp</h1>
      </div>
        <p className="text-text-header text-sm">
            Spring is coming. 
            <span className="text-text-paragraph">Get 20% off in the next template i work on bro</span>
            Threadamp20
        </p>
        <button className="group flex h-8 w-8 flex-col items-end justify-evenly z-50 relative after:absolute after:left-1/2 after:top-1/2 after:z-[-1] after:h-10 after:w-10 after:-translate-x-1/2 after:-translate-y-1/2 after:rounded-lg hover:after:bg-red-200" aria-label="Navigation toggle" type="button">
        <div className=" w-[1.6rem] rounded-full border-t-[1.5px] border-white transition duration-300"></div>
        <div className=" rounded-full border-t-[1.5px] border-white transition duration-300 w-[21px]"></div>
        <div className=" rounded-full border-t-[1.5px] border-white transition duration-300 w-[15px]"></div>
        </button>
    </div>
  )
}

export default Header
