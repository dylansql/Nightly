import React from 'react';
import { Link } from 'react-router-dom';
import { useState }  from 'react'
import '../Listing/Listing.css'

export default function Listing({posts}) {
    const [category, setCategory ] = useState("")
    
    console.log("line 31", posts)

    return (
        <div className="listing">
            <div className="button-select">
                <div className='btn-option'>
                        <button onClick={() => setCategory("Sleepless Nights")} id="btn">
                            Sleepless Nights
                        </button>
                    </div>
                <div className='btn-option'>
                    <button onClick={() => setCategory("Sleep Advice")} id="btn">
                        Sleep Advice
                    </button>
                </div>
                <div className='btn-option'>
                    <button onClick={() => setCategory("Somethings on My Mind")} id="btn">
                        Somethings on My Mind
                    </button>
                </div>
            </div>
            <div className="result-groups">
            {
                category ? posts.filter((post)=> {
                    return category === post.categorey
                }).map((post) => (
                    <div className="result-box" key={post.id}>
                        <div className="post-div">
                            <div className="post-img">
                                <img src={post.image} alt={post.title} style={{height: "200px", width: "200px"}} />
                            </div>
                            <div className="post-description">
                                <p key={post.id}>{post.title}</p>
                                <p key={post.id}>{post.content}</p>
                            </div>
                            <div className="read-more">
                                <Link to={`/posts/${post.id}`}> Read More </Link>
                            </div>
                    </div>
                </div>
      )) : 
            posts.map((post) => (
                <div className="result-box" key={post.id}>
                    <div className="post-div">
                            <div className="post-img">
                                <img src={post.image} alt={post.title} style={{height: "200px", width: "200px"}} />
                            </div>
                            <div className="post-description">
                                <p key={post.id}>{post.title}</p>
                                <p key={post.id}>{post.content}</p>
                            </div>
                            <div className="read-more">
                                <Link to={`/posts/${post.id}`}> Read More </Link>
                            </div>
                    </div>
                </div>
      ))}
            </div>
        </div>
    )
}
