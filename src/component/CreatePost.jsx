import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'

export default function CreatePost(props) {

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.createPost(title, content);
    }

    return <Form onSubmit={handleSubmit}>
        <Form.Group controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="Enter Post Title" />
        </Form.Group>

        <Form.Group controlId="content">
            <Form.Label>Title</Form.Label>
            <Form.Control as="textarea" value={content} onChange={e => setContent(e.target.value)} placeholder="Write Something..." />
        </Form.Group>

        <Button variant="primary" type="submit" >Post</Button>
    </Form>
}