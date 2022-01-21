import './NightlyChat.css'
import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { nanoid } from 'nanoid'
import { useParams } from 'react-router-dom'

const socket = io("http://localhost:3002")


export default function NightlyChat(props) {
const { currentUser } = props;
const { tag } = useParams()
const [msg, setMessage] = useState("")
const [chat, setChat] = useState([])
const [nickname, setNickName] = useState("");

const user = nanoid(4)


useEffect(() => {
    socket.on("chat-message", (msg) => {
        setChat([...chat, (msg)])
        setNickName(currentUser?.username)
    })
}, []);

const sendChat = (e) => {
    e.preventDefault()
    socket.emit('chat-message', (nickname, msg))
    // console.log('line 29',nickname)
    setNickName("")
    setMessage("")
}

return (
        <div>
            <h1>{tag}</h1>
            {chat.map((msg, index) => {
                return(
                    <div className="chat-li">
                        {/* {currentUser ? <div>{currentUser.username}</div> : <div>{user}</div>} */}
                       <p key={index}>{msg}</p>
                    </div>
                )
            })}
            <form onSubmit={sendChat}>
                <input type="text" name="chat" placeholder="Say hello..." onChange={(e) => {
                    setMessage(e.target.value)
                }}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
