import { allPosts, Post } from 'contentlayer/generated'
import PostPreview from '../../components/PostPreview'
import PaginationComponent from '../../components/Pagination';
import Paginate from '@/utils/PaginationUtils'
import { notFound } from 'next/navigation';

const posts:Post[] = allPosts.sort((a,b)=> b.date.localeCompare(a.date));

interface ParamsProps{
    params:{
        page:string
    };
}

const Pagination = ({ params }: ParamsProps ) => {
    const currentPage = parseInt(params.page)
    
    // try{
    //     if(/^\d+$/.test(currentPage)){
    //         throw new Error("Invalid page")
    //     }
    // }catch(err){
    //     notFound()
    // }

    return (
        <>
            <div className='m-5'>
                <h1 className='text-center m-5 text-3xl text-bold'>List of posts</h1>
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