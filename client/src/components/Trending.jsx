import { trends } from "../data"


const Trending = () => {
  return (
    <div className="trending-container">
        <h2>Trending Now</h2>
        <div className="trends">
            <ol>
                {trends?.map((post)=> (
                    <li>
                    <div className="trend-post">
                        <div className="trend-head">
                            <img src={post.image} alt="name" />
                            <h3>{post.author}</h3>
                        </div>
                        <h2>{post.title}</h2>
                        <div className="time">
                            <span>{post.createdAt}</span>
                            <span>{post.readTime} read</span>
                        </div>
                    </div>
                    </li>
                ))}
                
            </ol>
        </div>
    </div>
  )
}

export default Trending