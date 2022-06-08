import { BsSearch } from "react-icons/bs";
import styled from "styled-components";
import { posts } from "../data";

const Post = () => {
  const post = posts[0];
  return (
    <Container>
      <div className="post-main-container">
        <div className="post-header">
          <img src={post.author.image} alt={post.author.name} />
          <div className="post-name">
            <h3>{post.author.name}</h3>
            <div className="post-durations">
              <p>{post.createdAt}</p>
              <p>{post.readTime}</p>
            </div>
          </div>
        </div>
        <h1>{post.title}</h1>
        <h2>{post.desc}</h2>
        <img className="post-img" src={post.image} alt={post.title} />
        <p className="story">
          Like most people I know, I’ve been angry about guns in America for a
          while. I’ve long wanted to distill my thinking and summarize several
          years of what I’ve read about this issue. The latest mass murder in
          Parkland, Florida finally compelled me to action. And the reason I’ve
          wanted to write about guns in America — despite the many professional
          commentaries and Facebook posts available — is that I think most
          liberals are thinking incorrectly about this issue. Republican
          politicians are not inclined to use preemptive government action to
          prevent gun deaths, and they internally justify that opposition by
          pointing out just how ignorant most liberals are about guns. (See 1:50
          of this clip of last week’s CNN town hall on guns, for just one
          example.) If liberals were to better educate ourselves, we could take
          action that would actually save lives and undermine Republicans’
          natural reluctance to pass gun safety legislation. To that end, here
          are things I believe to be empirically true about guns and gun deaths:
          An assault weapons ban is a relatively useless law, and every time it
          is brought up — as among the first policies typically proposed by
          liberals — we reveal our own ignorance. The reason an assault weapons
          ban is useless is pretty simple. Automatic weapons, where you can pull
          the trigger and continually fire bullets, are essentially banned in
          America. It’s possible to acquire them under some extremely tight
          restrictions, but outside of that, the only guns one can reasonably
          acquire in this country are semi-automatic, meaning that you have to
          pull the trigger for each bullet you fire. Because you have to pull
          the trigger each time you fire, there is no real difference between
          the lethality of a handgun containing a 10-bullet magazine and a fancy
          Call of Duty-looking “assault rifle” containing a 10-bullet magazine.
          The latter may look cooler and better satisfy certain psychological
          desires, but it doesn’t make you more deadly in any meaningful way.
          For instance, the June 2015 Charleston church shooter killed nine
          people with a pistol that could hold 13 rounds, while the June 2013
          Santa Monica shooter killed just five people with a .223
          semi-automatic rifle, similar to the famous AR-15. [Ed. Note: I’ve
          revised my thinking slightly on this paragraph and published a more
          thorough discussion of rifles vs. handguns here.] A visible exception
          to this is the October 2017 Las Vegas shooter, whose use of a “bump
          stock” effectively turned a semi-automatic gun into an automatic. A
          bump stock essentially uses the recoil of the gun to trigger the
          firing of another round, so a shooter can hold the trigger down and
          fire continuously. Bump stocks should be illegal, and this is so
          obvious that even someone as intellectually dishonest as Rep. Trey
          “Benghazi” Gowdy admits as much. The Trump administration has already
          taken steps towards banning bump stocks through regulation. On top of
          the relative uselessness of banning assault weapons when other
          semi-automatic guns are still legal, it’s also incredibly difficult to
          define what exactly constitutes an assault weapon. Does it become most
          assault-y when you add another handle to it? What about when you paint
          it a bitchin’ camo color? Liberals should stop proposing and
          supporting assault weapons bans. They are a waste of time and energy
          and would do very little if passed.
        </p>
      </div>
      <div className="post-side-nav">
          <div className="side-wrapper">
          <div className="search">
          <BsSearch />
          <input type="text" className="search" placeholder="Search..."/>
          </div>
          <h4>More like {post.author.name}</h4>
          <div className="more">
              <div className="more-header">
                  <img src={post.author.image} />
                  <h3>{post.author.name}</h3>
              </div>
              <h3>{post.title}</h3>
          </div>
          </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 70px;
  display: flex;

  .post-main-container {
    flex: 2;
    padding: 1rem 4rem;
  }

  .post-header {
    display: flex;
    align-items: center;
    height: 60px;
    /* background-color: pink; */
  }

  .post-header img {
    border-radius: 50%;
    height: 48px;
    width: 48px;
    margin-right: 8px;
  }

  .post-name h3 {
    color: rgba(25, 25, 25, 1);
    font-weight: 400;
    font-size: 16px;
    margin-bottom: 6px;
  }

  .post-durations {
    display: flex;
    font-size: 15px;
  }

  .post-durations p {
    margin-right: 8px;
    color: rgba(117, 117, 117, 1);
  }

  h1 {
    line-height: 40px;
    font-size: 32px;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: rgba(41, 41, 41, 1);
    margin: 1rem 0;
  }

  h2 {
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    color: #afafaf;
    font-size: 1.5em;
    line-height: 24px;
    font-style: italic;
    font-weight: 400;
    margin-bottom: 2rem;
  }

  .post-img {
    width: 100%;
    height: 467px;
    object-fit: cover;
    max-width: 100%;
    cursor: zoom-in;
  }

  .story {
    font-size: 18px;
    line-height: 1.58;
    font-family: charter, Georgia, Cambria, "Times New Roman", Times, serif;
    margin-top: 1rem;
    letter-spacing: 0.004em;
    color: rgba(41, 41, 41, 1);
  }

  .story::first-letter {
    padding: 0 0.3rem;
    margin-right: 10px;
    border-radius: 8px;
    font-size: 66px;
    float: left;
    line-height: 0.83;
  }

  .post-side-nav {
    flex: 1;
    border-left: 1px solid #e0e0e0;
    padding: 1rem 2rem;
  }

  .search {
    border: 1px solid rgba(230, 230, 230, 1);
    border-radius: 20px;
    display: flex;
    align-items: center;
    padding: 0 1rem;
  }

  .search input {
      width: 100%;
      outline: none;
      border: none;
      padding: 8px 0px 11px;
      line-height: 20px;
      font-size: 14px;
      margin-right: 20px;
  }

  .search svg {
      font-weight: 400;
      margin-right: 8px;
      width: 22px;
      height: 22px;
  }

  .post-side-nav h4 {
      text-transform: uppercase;
      font-size: 13px;
      margin-top: 30px;
  }

  .more h3 {
      font-size: 16px;
  }

  .more-header {
      display: flex;
      align-items: center;
      margin: 10px 0;
  }

  .more-header img {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-right: 10px;
  }

  .side-wrapper {
    position: sticky;
  top: 80px;
  left: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .post-main-container {
          padding: 0 1.5rem;
      }

      .post-side-nav {
          border: none;
          padding: 1rem 1.5rem;
      }

    .search {
        display: none;
    }
  }

  @media (max-width: 406px) {
      

      .post-main-container {
          padding: 0 1.2rem;
      }

      .post-side-nav {
          border: none;
          padding: 1rem 1.2rem;
      }
  }
`;

export default Post;
