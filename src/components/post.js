import React from 'react' ;


const Post = ({currentPosts,loading}) => {
    if(loading){
        return <h1>Loading....</h1>
    }
    return (
        <>
        {
            currentPosts.map((post,index)=>{
                return( 
                <div key ={index} style={{padding:10,margin:10,background:"#cecece20",borderRadius:20,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column' }} >
                    <h1 style={{textAlign:'justify',marginBottom:0}} >{post.id}</h1>
                    <h4 style={{textAlign:'center'}} >{post.title}</h4>
                    <p style={{textAlign:'justify'}} >{post.body}</p>
                    <a style={{textAlign:'center',}} href={`https://jsonplaceholder.typicode.com/posts/${post.id}`}>Read more...</a>
                </div>
                )
            })
        }   
        </>
    )
}

export default Post ;