import Link from 'next/link';
import MobileNav from './MobileNav';
import Image from 'next/image';
import Logo from '../app/logo.png';

const Header = () => {
  return (
    <header className="bg-black text-slate-50 w-full px-[30px] lg:px-[100px] h-[100px] lg:h-[140px] flex items-center">
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        {/* logo */}
        <Link href="/" className='flex items-center gap-x-4'>
          <Image src={Logo} alt="" height={80} className='' />
          <h2 className='font-bold text-xl lg:text-2xl'>ArjunCodess</h2>
        </Link>
 
        <nav className='hidden lg:flex gap-x-12 font-semibold'>
          <Link href="/" className='text-[#696c6d] hover:text-white transition'>Home</Link>
          <Link href="/about" className='text-[#696c6d] hover:text-white transition'>About</Link>
          <Link href="/skills" className='text-[#696c6d] hover:text-white transition'>Skills</Link>
          <Link href="/projects" className='text-[#696c6d] hover:text-white transition'>Projects</Link>
          <Link href="/contact" className='text-[#696c6d] hover:text-white transition'>Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header