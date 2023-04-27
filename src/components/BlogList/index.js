// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {details} = props
  return (
    <ul className="unordered-list">
      {details.map(eachItem => (
        <BlogItem userDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default BlogList
