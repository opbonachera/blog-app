import Link from 'next/link';

const PostPreview = ({ posts }) =>{
    return(
            <>
                { posts && posts.map((post,index)=>(
                    <div key={index} className="container bg-gray-100 my-3 p-5 border rounded flex flex-col align-center justify-center shadow drop-shadow"  style={{width:'50%', height:'11rem'}}>
                        <p className='text-2xl font-semibold my-3'>{post.title}</p>
                        <p>{post.date}</p>
                        <Link href={`/post/01-blog`}><button className='border border-solid border-black rounded-full px-5 py-1 m-5 ml-0 justify-self-end'>GO TO ARTICLE</button></Link>
                    </div>
                ))}
            </>
    )
}

export default PostPreview;