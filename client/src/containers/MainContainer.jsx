import Listing from '../screens/Listing/Listing'
import PostDetail from '../screens/Detail/PostDetail'
import Landing from '../screens/Landing/Landing';
import CreatePost from '../screens/Create/CreatePost'
import EditPost from '../screens/Edit/EditPost'
import Layout from '../Layout/Layout';
import Help from '../screens/Help/Help';

import '../screens/Landing/Landing'
import '../screens/About Me/AboutMe.css'
import '../screens/Create/CreatePost.css'
import '../screens/Detail/PostDetail.css'
import '../screens/Edit/EditPost.css'
import '../screens/Help/Help.css'
import '../screens/Listing/Listing.css'
import '../screens/Signin/Signin.css'
import '../screens/Signup/Signup.css'




import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { deletePost, getAllPosts, postPost, putPost } from '../services/posts';
import { getAllUsers } from '../services/users';
import { deleteComment, getAllComments, postComment, putComment } from '../services/comments';
import CreateComment from '../screens/CreateComments/CreateComment';


export default function MainContainer({currentUser, handleLogout}) {
    const [user, setUser] = useState()
    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const history = useHistory();
    const [refresh, setRefresh]= useState(false)



    useEffect(() => {
        const fetchPosts = async () => {
          const postList = await getAllPosts();
          setPosts(postList);
        };
        fetchPosts();
      }, [refresh]);

    useEffect(()=> {
      const fetchUsers = async () => {
        const userList = await getAllUsers();
        setUsers(userList)
      };
      fetchUsers();
    }, [refresh]);
    
      // useEffect(() => {
      //   const fetchComments = async () => {
      //     const commentList = await getAllComments();
      //     setComments(commentList);
      //   };
      //   fetchComments();
      // }, []);
    
      const handlePostCreate = async (formData) => {
        const newPost = await postPost(formData);
        setPosts((prevState) => [...prevState, newPost]);
        history.push('/posts');
      };

      
      const handlePostUpdate = async (id, formData) => {
        const newPost = await putPost(id, formData);
        setPosts((prevState) =>
        prevState.map((post) => {
          return post.id === Number(id) ? newPost : post;
        })
        );
        history.push('/posts');
      };
      
      const handlePostDelete = async (id) => {
        await deletePost(id);
        setPosts((prevState) => prevState.filter((post) => post.id !== id));
      };
      
      // const handleCommentCreate = async (commentData) => {
      //   const postBlogComment = await postComment(commentData);
      //   setComments((prevState) => [...prevState, postBlogComment]);
      //   history.push('/comments');
      // }

      // const handleAddCommentToPost = async (comment_id, id) => {
      //   const newComment = await postComment(comment_id);
      //   setComments((prevState) => [...prevState, newComment]);
      //   history.push(`/comments/${comment_id}/posts/${id}`)
      // };
      
    return (
      <Layout currentUser={currentUser} handleLogout={handleLogout} >
        <div className="main-container">
        <Switch>
            <Route path='/posts/:id/edit'>
                <EditPost posts={posts} handlePostUpdate={handlePostUpdate} />
            </Route>
            <Route path='/posts/new'>
                <CreatePost posts={posts} handlePostCreate={handlePostCreate} />
            </Route>
            <Route path='/posts/:id'>
                <PostDetail posts={posts} handlePostDelete={handlePostDelete} 
                // handleAddCommentToPost={handleAddCommentToPost}
                // handleCommentCreate={handleCommentCreate} 
                currentUser={currentUser}
                setRefresh={setRefresh}
                users={users}
                />
            </Route>
            <Route path='/posts'>
                <Listing posts={posts} users={users} />
            </Route>
            <Route path='/users'>
                {/* <Flavors flavors={flavors} /> */}
            </Route>
            <Route exact path='/'>
              <Landing />
            </Route>
            <Route exact path='/help'>
              <Help />
            </Route>
            {/* <Route path to='/comments/:comment_id/posts/:id'>
              <CreateComment />
            </Route> */}
        </Switch>
      </div>
      </Layout>
    )
}
