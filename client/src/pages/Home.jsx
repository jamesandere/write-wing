import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Trending from "../components/Trending"

const Home = () => {
  return (
    <div className="home-container">
        <Hero />
        <Trending />
    </div>
  )
}

export default Home