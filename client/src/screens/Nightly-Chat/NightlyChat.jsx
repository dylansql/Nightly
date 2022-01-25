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
const [nickname, setNickname] = useState("");
const [user, setUser] = useState("")

// const user = nanoid(4)


const sendChat = (e) => {
    e.preventDefault()
    socket.emit('chat-message', {nickname: nickname, msg: msg})
    setMessage("")
}
useEffect(() => {
    socket.on("chat-message", (payload) => {
        setChat([...chat, payload])
        setNickname(currentUser?.username)
    })
}, []);

// useEffect(() => {
//     socket.on("chat-message", (nickname) => {
//         // setChat([...chat, (nickname)])
//     })
// }, []);


return (
        <div>
            <h1>{tag}</h1>
            {chat.map((payload, index) => {
                console.log("line 45", payload)
                return(
                    <div className="chat-li">
                        {/* {currentUser ? <div>{currentUser.username}</div> : <div>{user}</div>} */}
                       <p key={index}>{payload}</p>
                    </div>
                )
            })}
            <form onSubmit={sendChat}>
                <input type="text" name="chat" placeholder="Type Something..." onChange={(e) => {
                    setMessage(e.target.value)
                }}/>
                <button type="submit">Send</button>
            </form>
        </div>
    )
}
