import { useState } from 'react';
import { Redirect, useParams } from 'react-router';

import { postComment } from '../../services/comments';


export default function CreateComment(props) {
    const { id } = useParams;
    const [isCreated, setCreated] = useState(false); 
    const [commentData, setCommentData] = useState({
        content: '',
    });
    
    const { handleCommentCreate } = props
    
    const { content } = commentData

    const handleChange = e => {
        const { name, value } = e.target
        setCommentData(prevState => ({
           ...prevState,
           [name]: value,
        }));
    };

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     e.preventDefault()
    //     handleCommentCreate(id, commentData)
    // }

    const handleSubmit = e => {
        e.preventDefault()
        handleCommentCreate(id, commentData)
      }

console.log(commentData)

      if (isCreated) {
          return <Redirect to={`/posts/${id}`} />
      }

    return (
        <div>   
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
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    )
}
