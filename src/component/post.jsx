import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { CURRENT_USER } from '../App';
import PostService from '../service/postService';
import '../style/post.css';
import CreatePost from './CreatePost';

class Post extends React.Component {
  constructor(props) {
    super(props)

    let currentUser = localStorage.getItem(CURRENT_USER)
    currentUser = JSON.parse(currentUser)

    this.state = {
      currentUser,
      posts: []
    }

    this.postService = new PostService(currentUser.accessToken);
    this.loadPosts = this.loadPosts.bind(this);
    this.createPost = this.createPost.bind(this);

    this.loadPosts()

  }

  loadPosts() {
    this.postService.getPosts().then(data => {
      this.setState({ posts: data });
    })
  }

  createPost(title, content) {
    this.postService.createPost({
      enrollmentNo: this.state.currentUser.enrollmentNo,
      postTitle: title,
      postType: "sample file.jpeg",
      content: content
    }).then(() => this.loadPosts())
  }

  render() {
    return (
      <Container>
        <Row><CreatePost createPost={this.createPost} /></Row>
        {this.state.posts.map((post, i) => <div key={i}>
          <h1>{post.postTitle}</h1>
          <p>{post.postDate}</p>
          <p>{post.content}</p>
        </div>)}
      </Container>
    );
  }
}

export default Post;