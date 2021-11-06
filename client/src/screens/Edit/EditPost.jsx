import { useState, useEffect } from "react";
import { useParams, Redirect, Link } from "react-router-dom";
import { getOnePost, } from "../../services/posts";
import { putPost } from "../../services/posts";



export default function EditPost(props) {
    const { id } = useParams()
    const [formData, setFormData ] = useState({
        title: "",
        categorey: "", 
        image: "", 
        content: "",
    }); 

    const { post } = props

    const [isUpdated, setUpdated] = useState(false);
    
    useEffect(() => {
        const fetchPost = async () => {
          const post = await getOnePost(id);
          setFormData(post);
        };
        fetchPost();
      }, [id]);

    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData({
        ...formData,
        [name]: value,
        });
      };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const updated = await putPost(id, formData);
      setUpdated(updated);
    };

    if(isUpdated) {
        return <Redirect to={`/posts/${id}`} />;
    }

    return (
        <div>
            <form className="post-create" onSubmit={handleSubmit} >
            <div className="first-option">
              <div>
                <h4>Title</h4>
                <input
                  className="input-title"
                  placeholder="Title"
                  value={formData.title}
                  name="title"
                  required
                  autoFocus
                  onChange={handleChange}
                />
              </div>
              <div>
              <h4>Category</h4>
                <select value={formData.categorey}
                  name="categorey"
                  onChange={handleChange}
                  className="categorey">
                  <option value="Categorey">Choose a Category</option>
                  <option className ="drop-down" value="Sleepless Nights">Sleepless Nights</option>
                  <option className ="drop-down" value="Sleep Advice">Sleep Advice</option>
                  <option className ="drop-down" value="Somethings on My Mind">Somethings on My Mind</option>
                </select>
              </div>
              <div className="break"></div>
              <div>
                <h4>Image</h4>
                <input
                  className="input-price"
                  placeholder="Image"
                  value={formData.image}
                  name="image"
                  required
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="thirdLine">
              <h4>Share Your Story</h4>
              <textarea
                className="form-content"
                placeholder="Description"
                value={formData.content}
                name="content"
                required
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>
    )
}
