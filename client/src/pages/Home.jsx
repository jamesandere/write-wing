import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Posts from "../components/Posts"
import Trending from "../components/Trending"

const Home = () => {
  return (
    <div className="home-container">
        <Hero />
        <Trending />
        <Posts />
    </div>
  )
}

export default Home