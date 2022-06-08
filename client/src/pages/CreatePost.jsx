import styled from "styled-components";

const CreatePost = () => {
  return (
    <Container>
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Description" />
        <input type="file" />
        <textarea placeholder="Write..." />
        <button className="publish-btn">Publish</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 70px;
  padding: 2rem 3rem;
  display: flex;
  justify-content: center;

  form {
    max-width: 700px;
    /* background-color: yellow; */
  }

  input,
  textarea {
    width: 100%;
  }

  input::placeholder,
  textarea::placeholder {
    color: #cecece;
  }

  input {
    border: none;
    outline: none;
    border-bottom: 1px solid rgba(230, 230, 230, 1);
    height: 50px;
    font-size: 20px;
    letter-spacing: 1px;
    margin-bottom: 8px;
  }

  form input:nth-child(3) {
      border: none;
      height: 30px;
      font-size: 16px;
  }

  textarea {
    height: 400px;
    outline: none;
    border-color: #c5c5c5;
    padding: 1rem;
    font-size: 20px;
    border-radius: 4px;
  }

  textarea::placeholder {
      font-size: 20px;
  }

  .publish-btn {
    background-color: green;
    color: white;
    width: 100px;
    padding: 8px;
    border-radius: 4px;
    font-size: 18px;
    border: none;
    outline: none;
    cursor: pointer;
    margin-top: 10px;
  }

  @media (max-width: 406px) {
      padding: 2rem 1.6rem;

    input::placeholder,
  textarea::placeholder {
    font-size: 16px;
  }

  input {
      height: 40px;
  }

  input, textarea {
      font-size: 16px;
  }

  textarea {
      height: 300px;
  }

  .publish-btn {
      width: 80px;
      font-size: 16px;
  }
  }
`;

export default CreatePost;
