import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getOnePost, addCommentToPost } from '../../services/posts'
import { Link } from 'react-router-dom'

import '../Detail/PostDetail.css'

export default function PostDetail(props) {
    const [postPage, setPostPage ] = useState(null)
    const { id } = useParams();
    const { handlePostDelete } = props;

    useEffect(() => {
        const fetchPostItem = async () => {
          const postData = await getOnePost(id);
          setPostPage(postData);
        };
        fetchPostItem();
      }, [id]);

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
            {postPage?.comments?.map((comment) => (
              <div>{comment.content}</div>
            ))}
            </div>
            </div>
        </div>
    )
}
