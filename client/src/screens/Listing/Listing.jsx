import React from 'react';

export default function Listing({posts}) {

    return (
        <div>
            <h1>This is listing/Posts</h1>
            <div className="button-selections">
                <button>Sleep Nights?</button>
                <button>Sleep Advice?</button>
                <button>Somethings on My Mind</button>
            </div>
            {posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}

        </div>
    )
}
