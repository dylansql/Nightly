import React from 'react';
import { Link } from 'react-router-dom';
import { useState }  from 'react'
import '../Listing/Listing.css'

export default function Listing({posts}) {
    const [category, setCategory ] = useState("")

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
