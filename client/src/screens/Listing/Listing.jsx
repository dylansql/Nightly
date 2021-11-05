import React from 'react';
import { Link } from 'react-router-dom';
import { useState }  from 'react'

export default function Listing({posts}) {
    const [category, setCategory ] = useState("Sleepless Nights")
    const [categoryTwo, setCategoryTwo ] = useState("Sleep Advice")
    const [categoryThree, setCategoryThree ] = useState("Somethings on My Mind")

    return (
        <div>
            <h1>This is listing/Posts</h1>
            <button onClick={() => setCategory("Sleepless Nights")}>
            {category}
            
            </button>
            <button onClick={() => setCategoryTwo("Sleep Advice")}>
            {categoryTwo}
            </button>
            <button onClick={() => setCategoryThree("Somethings on My Mind")}>
            {categoryThree}
            </button>
            <div>
            {posts.map((post) => (
                <div className="result-box" key={post.id} >
                <Link to={`/posts/${post.id}`}>
                <img src={post.image} />
                <p key={post.id}>{post.title}</p>
                </Link>
                </div>
      ))}
      </div>

        </div>
    )
}
