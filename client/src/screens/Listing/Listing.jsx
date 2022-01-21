import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import '../Listing/Listing.css'

export default function Listing(props) {
    const [category, setCategory] = useState("")
    const { posts, users } = props;

    // console.log("line 31", posts)

    // const postUsername = () => {
    //     let postCats = posts.map((post) => {
    //     return post.id})
    //     console.log(postCats)
    //     let postUser = users.filter((user)=> user.id === postCats.user_id)
    //     console.log(postUser[0].username)
    // }
    // postUsername();





    

    return (
        <div className="listing">
            <div className="main-container">
                    <div className="post-component">
                        <h1>Post Component</h1>           
                    </div>
                <div className="button-select">
                    <button onClick={() => setCategory("Sleepless Nights")} id="btn">
                        Sleepless Nights
                    </button>
                
                    <button onClick={() => setCategory("Sleep Advice")} id="btn">
                        Sleep Advice
                    </button>
                
                    <button onClick={() => setCategory("Somethings on My Mind")} id="btn">
                        Somethings on My Mind
                    </button>
                
            </div>
                <div className="result-groups">
                {
                    category ? posts.filter((post) => {
                        return category === (post.categorey)
                    }).map((post) => {
                        const postUser = users.filter((user)=> user.id === post.user_id)
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
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }) :
                         posts.map((post) => {
                            const postUser = users.filter((user)=> user.id === post.user_id)
                            console.log(postUser)
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
                    <div className='channel-optn'>
                        <h1 id='channel-name'>Random Stuff</h1>
                        <Link to={`/nightly-chat/RandomStuff`}>
                            <button id='channel-btn'>+Join</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
