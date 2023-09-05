import Link from 'next/link';

const Post = ({ title, description, date, body, slug }) =>{
    return(
            <div className='p-5'>
                <div style={{width:'60rem',height:'30rem'}} className="p-4 container rounded overflow-hidden shadow-lg m-auto p-3 text-center flex flex-col align-center justify-center">
                    <h1 className="font-bold p-5 text-4xl mb-2 font-medium">{ title }</h1>
                    <div className='my-2'>Published on: { date }</div>
                    <h2>{ description }</h2>
                    <div className="text-gray-700 text-base">{ body }</div>
                    <div className=''><Link href={`posts`}></Link></div>
                </div>
            </div>
    )
}

export default Post;