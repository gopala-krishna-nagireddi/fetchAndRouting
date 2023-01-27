// Write your JS code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()

    const updatedData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogData: updatedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    return (
      <ul className="blog-list">
        {isLoading ? (
          <div data-testid="loader" className="loader-container">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          blogData.map(eachItem => (
            <BlogItem eachBlog={eachItem} key={eachItem.id} />
          ))
        )}
      </ul>
    )
  }
}

export default BlogList
