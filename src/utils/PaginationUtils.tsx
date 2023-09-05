import { allPosts, Post } from "contentlayer/generated";

const posts:Post[] = allPosts.sort((a,b)=> b.date.localeCompare(a.date));
const totalPages = Math.ceil(posts.length/3); 


const Paginate = (currentPage:number) =>{
   
    const offset = (currentPage-1) * totalPages;
    const currentPosts = allPosts.slice(offset, offset + 3);

    return {
        totalPages,
        currentPosts
    }
}  

export default Paginate;
