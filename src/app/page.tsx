import Navbar from "../components/Navbar"
import Link from "next/navigation";

export default function Home() {
  return (
    <>
      <div style={{width:'100%', height:'90vh'}} className="grid grid-cols-4">
        <div className="col-span-2 flex justify-center content-center items-center">
            <p className="text-8xl m-5 text-end">This is the Home Page</p>
        </div>
        <div  className="col-span-2 flex flex-col justify-center content-start p-5">
        <p style={{width: '75%'}}className="text-2xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro quo consequuntur corporis quasi inventore odit modi, adipisci magnam fugit incidunt aut illum repellendus optio, amet quidem possimus aliquam commodi quas?</p>
        <button style={{width:'25%'}}className="border rounded-full border-dashed border-black p-3 px-1 mt-3">See all posts</button>
        </div>
       </div>
    </>
  )
}
