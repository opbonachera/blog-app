import Navbar from "../components/Navbar"
import Link from "next/navigation";
import Image from '../assets/home-bg.avif'

export default function Home() {
  return (
    <>
      <div style={{width:'100%', height:'80vh'}} className="grid grid-cols-4">
        <div className="col-span-2 flex justify-center content-center items-center">
            <p className="text-8xl m-5 text-end text-black">A blog website to discover</p>
        </div>
        <div className="absolute bg-black-200 right-0 opacity-60" style={{width:'50%', height:'80vh'}}></div>
        <div  className="col-span-2 flex flex-col justify-center content-start p-5 bg-cover bg-home text-white">
        <p style={{width: '75%'}}className="text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quo consequuntur corporis quasi inventore odit modi, adipisci magnam fugit incidunt aut illum repellendus optio, amet quidem possimus aliquam commodi quas?</p>
        <button style={{width:'25%'}}className="border text-white rounded-full border-solid border-white p-3 px-1 mt-3">Browse Articles</button>
        </div>
       </div>
    </>
  )
}
