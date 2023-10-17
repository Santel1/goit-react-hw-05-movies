import styled from 'styled-components';

export const StyledMovies = styled.div`
  padding: 0px 15px;
  .form {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  .input {
    background-color: transparent;
    padding: 10px;
    font-size: 20px;
    border: 1px solid black;
    border-radius: 30px;
    outline: none;
  }
  .input:hover,
  .input:focus {
    border: 1px solid #696969;
    color: #696969;
    background-color: transparent;
  }

  .input-btn {
    border-radius: 30px;
    border: 1px solid black;
    background-color: transparent;
    fill: black;
    transition: all 0.3s;
    cursor: pointer;
  }
  .input-btn:hover {
    background-color: #696969;
    fill: white;
    border: 1px solid white;
  }
`;
