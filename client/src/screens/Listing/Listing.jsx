import React from 'react';
import { Link } from 'react-router-dom';
import { useState }  from 'react'

export default function Listing({posts}) {
    const [category, setCategory ] = useState("")

    return (
        <div>
            <h1>This is listing/Posts</h1>
            <button onClick={() => setCategory("Sleepless Nights")}>
            Sleepless Nights
            
            </button>
            <button onClick={() => setCategory("Sleep Advice")}>
            Sleep Advice
            </button>
            <button onClick={() => setCategory("Somethings on My Mind")}>
            Somethings on My Mind
            </button>
            <div>
            {
            category ? posts.filter((post)=> {
                return category === post.categorey
            }).map((post) => (
                <div className="result-box" key={post.id} >
                <Link to={`/posts/${post.id}`}>
                <img src={post.image} />
                <p key={post.id}>{post.title}</p>
                </Link>
                </div>
      )) : 
            posts.map((post) => (
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
