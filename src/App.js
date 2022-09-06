import React, {useEffect,useState} from 'react';
import Axios from 'axios';
import Post from '../src/components/post';
import Page from './components/page';
import Navbar from './components/navbar';


function App() {

  const [posts,setPosts] = useState([]);
  const [loading,setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage,setPostPerPage] = useState(15);

  useEffect(()=>{
    const getPosts = async()=>{
      setLoading(true);
      await Axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
        setPosts(res.data);
      })
    }
    getPosts();
    setLoading(false);
  },[]);

  const indexOfLastPost = currentPage*postPerPage ;
  const indexOfFirstPost = indexOfLastPost-postPerPage ;
  const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost);
  
  const paginate = (page)=>{
    setCurrentPage(page);
  }

  return (
    <div className="App">
      <Navbar/>
      <div style={{display:'grid',gridTemplateColumns:'auto auto auto',paddingTop:80}} >
        <Post loading = {loading} currentPosts={currentPosts} ></Post>
      </div>
      <Page posts = {posts.length} postPerPage={postPerPage} paginate={paginate} ></Page>
    </div>
  
        
  );
}

export default App;
