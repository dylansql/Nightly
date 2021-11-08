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

            <h2>{postPage?.title}</h2>
            <img src={postPage?.image} style={{height: "300px", width: "300px"}} />
            <p>{postPage?.content}</p>
            <Link to={`/posts/${postPage?.id}/edit`}><button>Edit</button></Link>
            <Link to={`/posts`}><button onClick={() => handlePostDelete(postPage?.id)}>Delete</button></Link>
            <div className="comments">
              <h2>Comments</h2>
            {postPage?.comments?.map((comment) => (
              <div>{comment.content}</div>
            ))}
            </div>
        </div>
    )
}
