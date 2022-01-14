import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getOnePost, addCommentToPost } from '../../services/posts'
import { postComment } from '../../services/comments'
import { Link, Redirect } from 'react-router-dom'

import '../Detail/PostDetail.css'

export default function PostDetail(props) {
    const [postPage, setPostPage ] = useState(null)
    const { id } = useParams();
    const { handlePostDelete, currentUser, setRefresh, users } = props;
    const [isCreated, setCreated] = useState(false);
    const [commentData, setCommentData] = useState({
      content: '',
    });

    const { content } = commentData
    

    useEffect(() => {
      const fetchPostItem = async () => {
          const postData = await getOnePost(id);
          setPostPage(postData);
        };
        fetchPostItem();
      }, [id]);

    

    const handleChange = e => {
        const { name, value } = e.target
        setCommentData(prevState => ({
           ...prevState,
           [name]: value,
        }));
    };

    const handleSubmit = async e => {
        e.preventDefault()
        let newComment = await postComment({
          content: commentData.content,
          post_id: id, 
          user_id: currentUser.id,
        })
        setRefresh(prevState => !prevState) 
        setCreated(newComment)
        window.location.reload()
      }
      
      if (isCreated) {
        return <Redirect to={`/posts/${id}`} />
      }

    // console.log(postPage.comments[0].user_id)

    
    // const findUser = () => {
    //   users.filter((user) => {
    //     if (user.id === 57) {
    //       return user.id
    //     }
    //   })
    // } 

    // for (let i = 0; i < users.length; i++ ) {
      
    //   if (users[i].id === 57) {
    //     return users[i]
    //   }
    //   return users[i]
    // }

    console.log(postPage)

    console.log(users)
 
    return (
        <div className="post-detail">
            <div className="post-detail-container">
              <div className="detail-image">
                <img src={postPage?.image} style={{height: "400px", width: "400px"}} />
              </div>
              <div className="crud-functions">
                <Link to={`/posts/${postPage?.id}/edit`}><button id="detail-btn">Edit</button></Link>
                <Link to={`/posts`}><button onClick={() => handlePostDelete(postPage?.id)} id="detail-btn">Delete</button></Link>
                </div>
              <div className="detail-content">
                <h2>{postPage?.title}</h2>
                <p>{postPage?.content}</p>
              </div>
            <div className="comments">
              <h2>Comments</h2>
            {postPage?.comments?.map((comment) => {
                const blogger = users.filter((user)=> user.id === comment.user_id)
                return (
              <div className="comment-per-user">
                <div>{blogger[0].username}</div>
                <div>{comment.content}</div>
              </div> 
            )})}
            </div>
            <div>
              {/* <Link to={`/comments`}><button>Add Comment</button></Link> */}
              <div className="form-textarea">
                <form 
                autoComplete='off'
                onSubmit={handleSubmit}
                >
                    <div className="comment-textarea">
                        <h4>Share Your Story</h4>
                        <textarea
                        className="form-content"
                        placeholder="Description"
                        value={content}
                        name="content"
                        required
                        onChange={handleChange}
                    />
                    </div>
                    {currentUser ? (<button type="submit" className="submit-button">Submit</button>): <button type="submit" className="submit-button" disabled={true}>Sign in to Comment</button> }
                    
                </form>
            </div>
            </div>
            </div>
        </div>
    )
}
