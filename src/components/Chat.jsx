import React from 'react'
import { useState } from 'react';

//Styles
import '../css/chat.css'

const Chat = () => {
    const [chatVisibility, setChatVisibility] = useState(false);
    
    return (
        <div>
            <button className='chat-compacted'>Who's Online?</button>
        </div>
    )
}

export default Chat