import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

import { deletePost, getAllPosts, postPost, putPost } from '../services/posts';
import { deleteUser, getAllUsers, postUser, putUser } from '../services/users';
import { deleteComment, getAllComments, postComment, putComment } from '../services/comments';

import Listing from '../screens/Listing/Listing'
import PostDetail from '../screens/Detail/PostDetail'
import Landing from '../screens/Landing/Landing';
import CreatePost from '../screens/Create/CreatePost'
import EditPost from '../screens/Edit/EditPost'
import Layout from '../Layout/Layout';
import Help from '../screens/Help/Help';

export default function MainContainer({currentUser}) {

    const [posts, setPosts] = useState([]);
    const [users, setUsers] = useState([]);
    const [comments, setComments] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchPosts = async () => {
          const postList = await getAllPosts();
          setPosts(postList);
        };
        fetchPosts();
      }, []);
    
      useEffect(() => {
        const fetchComments = async () => {
          const commentList = await getAllComments();
          setComments(commentList);
        };
        fetchComments();
      }, []);
    
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

    return (
      <Layout currentUser={currentUser}>
        <Switch>
            <Route path='/posts/:id/edit'>
                <EditPost posts={posts} handlePostUpdate={handlePostUpdate} />
            </Route>
            <Route path='/posts/new'>
                <CreatePost handlePostCreate={handlePostCreate} />
            </Route>
            <Route path='/posts/:id'>
                <PostDetail posts={posts} handlePostDelete={handlePostDelete} />
            </Route>
            <Route path='/posts'>
                <Listing posts={posts} />
            </Route>
            <Route path='/users'>
                {/* <Flavors flavors={flavors} /> */}
            </Route>
            <Route path='/'>
              <Landing />
            </Route>
            <Route exact path='/help'>
              <Help />
            </Route>
        </Switch>
      </Layout>
    )
}
