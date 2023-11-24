// Write your JS code here
import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogData: {},
  }

  componentDidMount() {
    this.getBlogItemData()
  }

  getBlogItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    this.setState({
      blogData: updatedData,
    })
  }

  render() {
    const {blogData} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogData
    return (
      <div className="blog-container">
        <h1 className="title">{title}</h1>
        <div className="author-section">
          <img src={avatarUrl} className="avatar" alt="avatar" />
          <p className="name">{author}</p>
        </div>
        <div className="content-section">
          <img src={imageUrl} className="imge" alt={title} />
          <p className="content">{content}</p>
        </div>
      </div>
    )
  }
}

export default BlogItemDetails
