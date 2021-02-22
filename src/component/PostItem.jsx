import React from "react"
import CommentItem from "./CommentItem"

export default function PostItem(props) {
    return <div>
        <h1>{props.postTitle}</h1>
        <h3>{props.postDate}</h3>
        <p>{props.content}</p>
        <hr />
        <div style={{ padding: "0px 50px" }}>
            {props.comments?.map((comment, i) => <CommentItem key={i} {...comment} />)}
        </div>
    </div>
}