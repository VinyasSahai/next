const getPostsData= async()=>{
    const res = await fetch("url")
    return res.json();
}

const getUserData= async()=>{
    const res = await fetch("url")
    return res.json();
}


export default async function ListOfPosts() {
    const [posts,users]=await Promise.all([getPostsData(),getUserData()]);
  //to fetch from 2 API's in the same component
    return (
    <div>
        {posts.map((post)=>{
            return <p>{post.title}</p>
        })}

        <div>
            {users.map((user)=>{
                return <p>{user.datails}</p>
            })}
        </div>
    </div>
  )
}


//for cases in which info keeps on changing
const getDogData= async()=>{
    const res = await fetch("url",{cache:"no-store"})
    return res.json();
}



