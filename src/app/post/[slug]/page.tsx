import { allPosts, Post } from 'contentlayer/generated'
import React from 'react'
import PostComponent from '../../../components/Post'
import { useMDXComponent as UseMDXComponent } from 'next-contentlayer/hooks' ;
import { notFound } from 'next/navigation'

const posts:Post[] = allPosts.sort((a,b)=> b.date.localeCompare(a.date));

interface ParamsProps{
    params:{
        slug:string;
    };
}


export const generateMetadata = ({params}:ParamsProps) =>{
    const post = allPosts.find((p)=>p._raw.flattenedPath === params.slug);
    return{
        title:post?.title,
        description:post?.description
    };
}

export const generateStaticParams = () =>{
    return allPosts.map((post)=>({slug: post._raw.flattenedPath}))
}
const page = ({ params }: ParamsProps ) => {
    let MDXContent;
    const post = allPosts.find((p)=>p._raw.flattenedPath === params.slug);

    if(!post){ 
        return notFound();
    }else{
        MDXContent = UseMDXComponent(post.body.code)
    }

    return (
        <>
            <div className="container mx-auto px-4">
                { post && <PostComponent title={post.title} description={post.description} date={post.date} body={<MDXContent />}  slug={post._raw.flattenedPath} />}
            </div>
        </>
  )
}

export default page