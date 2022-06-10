import styled from "styled-components";
import { StyledForm } from "../components/StyledForm";

const Login = () => {
  return (
    <Container>
      <StyledForm>
        <h2>Login</h2>
        <div className="form-control">
          <label>Email</label>
          <input type="email" />
        </div>
        <div className="form-control">
          <label>Password</label>
          <input type="password" />
        </div>
        <button className="btn" type="submit">
          Sign In
        </button>
      </StyledForm>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  margin-top: 70px;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  justify-content: center;
  background: url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80") !important;
  background-size: cover;
  position: relative;

  ::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.45);
  }

  @media (max-width: 768px) {
    background-image: url("https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80");
    min-height: 100vh;
  }
`;
