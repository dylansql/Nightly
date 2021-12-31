import { useState } from 'react';
import { Redirect } from 'react-router';

export default function CreatePost(props) {
    const [formData, setFormData ] = useState({
        title: "",
        categorey: "", 
        image: "", 
        content: "",
    }); 
    const [isCreated, setCreated] = useState(false);
    
    const { handlePostCreate } = props

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
           ...formData,
           [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData?.image !== "")
        {
          const created = await handlePostCreate(formData); ;
        setCreated({ created });
        } else {
          alert("Please upload picture")
         }
        
      };
    
      if (isCreated) {
        return <Redirect to={`/posts`} />;
      }
      console.log(formData)
      
    return (
        <div className="addItem">
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
              {/* <div>
                <h4>Location</h4>
                <input
                  className="input-location"
                  placeholder="Zip Code"
                  value={formData.content}
                  name="location"
                  required
                  onChange={handleChange}
                />
              </div> */}
            </div>
            <div className="secondLine">
              {/* <input
                className="input-imgURL"
                placeholder="Image URL"
                value={item.imgURL}
                name="imgURL"
                required
                onChange={handleChange}
              /> */}
              {/* <Image posts={posts} formData={formData} /> */}
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
