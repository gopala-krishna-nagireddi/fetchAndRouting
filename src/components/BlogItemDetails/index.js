// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogItem: {}, isLoading: true}

  componentDidMount = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()

    const blogData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      topic: data.topic,
      content: data.content,
    }

    this.setState({blogItem: blogData, isLoading: false})
  }

  render() {
    const {blogItem, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, topic, content} = blogItem
    return (
      <div className="blog-item-details-container">
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <h1>{title}</h1>
            <div className="blog-author-details-container">
              <img src={avatarUrl} alt={topic} />
              <p>{author}</p>
            </div>
            <img className="blog-item-image" src={imageUrl} alt={title} />
            <p>{content}</p>
          </>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
