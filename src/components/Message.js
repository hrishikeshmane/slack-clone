import React from 'react'
import styled from 'styled-components';

function Message({ message, timestamp, user, userImage }) {
    console.log(userImage)
    return (
        <MessageContaniner>
            <img src={userImage} alt="" />
            <MessageInfo>
                <h4>
                    {user}
                    <span>{ new Date(timestamp?.toDate()).toUTCString()}</span>
                </h4>
                <p>{message}</p>
            </MessageInfo>
        </MessageContaniner>
    )
}

export default Message;

const MessageContaniner = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img {
        height: 50px;
        border-radius: 8px;
    }
`;

const MessageInfo = styled.div`
    padding-left:10px;
    
    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 5px;
        font-size: 12px;
    }
`;
