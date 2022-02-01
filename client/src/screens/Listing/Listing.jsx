import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../Listing/Listing.css'
import Footer from '../../components/Footer/Footer'

export default function Listing(props) {
    const [category, setCategory] = useState("")
    const [firstComment, setComment] = useState([])
    const { posts, users } = props;

    return (
        <div className="listing">
            <div className="main-container">
                    
                <div className="button-select">
                    <button onClick={() => setCategory("Sleepless Nights")} id="btn">
                        <p>Sleepless Nights</p>
                    </button>
                
                    <button onClick={() => setCategory("Sleep Advice")} id="btn">
                        <p>Sleep Advice</p>
                    </button>
                
                    <button onClick={() => setCategory("Somethings on My Mind")} id="btn">
                        <p>Somethings on My Mind</p>
                    </button>
                
            </div>
                <div className="result-groups">
                {
                    category ? posts.filter((post) => {
                        console.log(post)
                        return category === (post.categorey)
                    }).map((post) => {
                        const postUser = users.filter((user)=> user.id === post.user_id);
                        return (
                            <div className="result-box" key={post.id}>
                                    <div className="post-title">
                                        <div className="post-img">
                                            <img src={post.image} alt={post.title} />
                                        </div>
                                        <div className="post-username">
                                            <h1>{postUser[0].username}</h1>
                                        </div>
                                    </div>
                                <div className="post-description">
                                    <div className="post-div">
                                        <p key={post.id}>{post.title}</p>
                                        <p key={post.id}>{post.content}</p>
                                        <div className="read-more">
                                        <Link to={`/posts/${post.id}`}> Read More </Link>
                                        {/* <div className="first-comment">
                                            <p>{post.comments[0]?.content}</p>
                                        </div> */}
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) :
                         posts.map((post) => {
                            const postUser = users.filter((user)=> user.id === post.user_id)
                            console.log(post)
                            return (
                                <div className="result-box" key={post.id}>
                                    <div className="post-div">
                                        <div className="post-title">
                                            <div className="post-img">
                                                <img src={post.image} alt={post.title} />
                                                </div>
                                            <div className="post-username" key={post.id}>
                                               <h1>{postUser[0].username}</h1>
                                            </div>
                                    </div>
                                        <div className="post-description">
                                            <p key={post.id}>{post.title}</p>
                                            <p key={post.id}>{post.content}</p>
                                            <div className="read-more">
                                                <Link to={`/posts/${post.id}`}> Read More </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )})}
                </div>
            </div>
            <div className="chat-room">
                <div className='chat-title'>
                    <h1>Join a chat</h1>
                </div>
                <div classNames="chat-channels">
                    <div className='channel-optn'>
                        <h1 id='channel-name'>Sleepless Nights</h1>
                        <Link to={`/nightly-chat/Sleepless-Nights`}>
                            <button id='channel-btn'>+Join</button>
                        </Link>
                    </div>
                    <div className='channel-optn'>
                        <h1 id='channel-name'>Sleep Advice</h1>
                        <Link to={`/nightly-chat/Sleep-Advice`}>
                            <button id='channel-btn'>+Join</button>
                        </Link>
                    </div>
                    <div className='channel-optn'>
                        <h1 id='channel-name'>Somethings on My Mind</h1>
                        <Link to={`/nightly-chat/Something-On-My-Mind`}>
                            <button id='channel-btn'>+Join</button>
                        </Link>
                    </div>
                    <div className='channel-optn'>
                        <h1 id='channel-name'>Mediate</h1>
                        <Link to={`/nightly-chat/Meditate`}>
                            <button id='channel-btn'>+Join</button>
                        </Link>
                    </div>
                    <div className='channel-optn'>
                        <h1 id='channel-name'>Toy Stories</h1>
                        <Link to={`/nightly-chat/Toy-Stories`}>
                            <button id='channel-btn'>+Join</button>
                        </Link>
                    </div>
                    <div className='channel-optn' id="last-item">
                        <h1 id='channel-name'>Random Stuff</h1>
                        <Link to={`/nightly-chat/RandomStuff`}>
                            <button id='channel-btn'>+Join</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}
