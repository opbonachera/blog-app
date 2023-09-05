import { allPosts } from "contentlayer/generated";
import Link from "next/link";
const Pagination = ({ totalPages, currentPage }) =>{
    return (
        <>
            <div className="">
                <Link href={`pages/${ currentPage-1 }`}> Prev </Link>
                {
                    Array.from({length: totalPages}).map((_,index)=>(
                        
                            <Link href={`pages/${index+1}`} key={index}>
                                <button className="m-2">
                                     { index } 
                                </button>
                            </Link>
                    ))
                }
                <Link href={`pages/${ currentPage+1 }`}> Next </Link>
            </div>
        </>
    )
}

export default Pagination;