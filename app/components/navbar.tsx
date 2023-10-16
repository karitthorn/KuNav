import Image from "next/image"
import logo from '@/public/image/logo.png'
export default function Navbar(){
    return(<>
<nav className="bg-transparent border-gray-200">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <div className="flex items-center">
      <Image src={logo} className="h-8 mr-3" alt="Flowbite Logo" width={30} height={20} />
      <span className="self-center text-2xl font-semibold whitespace-nowrap">KuNav</span>
    </div>
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
      </ul>
    </div>
  </div>
</nav>
    </>)
}