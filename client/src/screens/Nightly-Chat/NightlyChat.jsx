import './NightlyChat.css'
import { useState, useEffect } from 'react'
import io from 'socket.io-client'
import { useParams } from 'react-router-dom'

const socket = io("http://localhost:3002")


export default function NightlyChat(props) {

const { currentUser } = props;
const { tag } = useParams()
const [msg, setMessage] = useState("")
const [chat, setChat] = useState([])
const [nickname, setNickname] = useState("");
const [user, setUser] = useState("")


const sendChat = (e) => {
    e.preventDefault()
    socket.emit('chat-message', {nickname: nickname, msg: msg, roomTag: tag})
    console.log(tag)
    setMessage("")
}
useEffect(() => {
    socket.on("chat-message", (payload) => {
        setNickname(currentUser?.username)
        setChat([...chat, payload])
    })
});


return (
        <div className="group-chat-container">
            <div className="chat-container">
                <div className="chat-title">
                    <h1>{tag}</h1>
                </div>
                <div className='chat-box'>
                    {chat.map((payload, index) => {
                        return(
                            <div className="chat-li">
                            <p key={index}>{payload}</p>
                            </div>
                        )
                    })}
                    <div className="chat-input">
                    <form onSubmit={sendChat}>
                        <input type="text" name="chat" placeholder="Type Something..." onChange={(e) => {
                            setMessage(e.target.value) 
                        }}/>
                        <button type="submit">Send</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
