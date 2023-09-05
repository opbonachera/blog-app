import { allPosts, Post } from 'contentlayer/generated'
import PostPreview from '../../../components/PostPreview'
import PaginationComponent from '../../../components/Pagination';
import Paginate from '@/utils/PaginationUtils'
import { notFound } from 'next/navigation';

const posts:Post[] = allPosts.sort((a,b)=> b.date.localeCompare(a.date));

interface ParamsProps{
    params:{
        page:string
    };
}

export const generateStaticParams = ()=>{
    return Array.from({length:allPosts.length}).map((_,index)=>({
        page:  `${index}`
    }))
}

const Pagination = ({ params }: ParamsProps ) => {
    const currentPage = parseInt(params.page);
    
    try{
        if(isNaN(currentPage)){
            throw new Error("Page not found");
        }
    }catch(err){
        notFound()
    }

    return (
        <>
            <div className='m-5'>
                <h1 className='text-center m-5 mb-1 text-5xl text-bold'>List of Articles</h1>
                <p className='text-3xl font-light text-center'>Browse articles about general culture</p>
            </div>
            <div className='flex flex-col items-center'>
            { posts && <PostPreview posts={ Paginate(currentPage).currentPosts } /> }
            </div>
            <div className='flex flex-col items-center p-5'>
                <PaginationComponent totalPages={ Paginate(currentPage).totalPages } currentPage={ currentPage }/>
            </div>
        </>
  )
}

export default Pagination