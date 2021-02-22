import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { CURRENT_USER } from '../App';
import PostService from '../service/postService';
import CreatePost from './CreatePost';
import Image from './Layout/image';
import Document from './Layout/document';

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

  createPost(title, content, type) {
    this.postService.createPost({
      enrollmentNo: this.state.currentUser.enrollmentNo,
      postTitle: title,
      postType: type,
      content: content
    }).then(() => this.loadPosts())
  }

  render() {
    let file_extention = this.state.posts.postType.split('.').pop();
    return (
      <Container>
        <Row><CreatePost createPost={this.createPost} /></Row>
        
        if(file_extention === ("png" || "jpeg")){
          <Image />
          }
        else (file_extention === "pdf"){
          <Document />
        }
      </Container>
    );
  }
}

export default Post;