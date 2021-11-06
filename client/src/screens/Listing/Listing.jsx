import React from 'react';
import { Link } from 'react-router-dom';
import { useState }  from 'react'

export default function Listing({posts}) {
    const [category, setCategory ] = useState("")

    return (
        <div className="button-select">
            <button onClick={() => setCategory("Sleepless Nights")}>
            Sleepless Nights
            </button>
            <button onClick={() => setCategory("Sleep Advice")}>
            Sleep Advice
            </button>
            <button onClick={() => setCategory("Somethings on My Mind")}>
            Somethings on My Mind
            </button>
            <div className="result-groups">
            {
            category ? posts.filter((post)=> {
                return category === post.categorey
            }).map((post) => (
                <div className="result-box" key={post.id} >
                <Link to={`/posts/${post.id}`}>
                <img src={post.image} style={{height: "250px", width: "250px"}} />
                <p key={post.id}>{post.title}</p>
                </Link>
                </div>
      )) : 
            posts.map((post) => (
                <div className="result-box" key={post.id} >
                <Link to={`/posts/${post.id}`}>
                <img src={post.image} style={{height: "250px", width: "250px"}}/>
                <p key={post.id}>{post.title}</p>
                </Link>
                </div>
      ))}
      </div>

        </div>
    )
}
