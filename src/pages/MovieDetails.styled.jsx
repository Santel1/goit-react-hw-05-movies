import styled from 'styled-components';

export const StyledMovieDetails = styled.div`
  .genres-list {
    list-style: none;
    display: flex;
    gap: 10px;
    font-size: 20px;
  }

  .movie-descriptions {
    list-style: none;
    display: flex;
    gap: 10px;
    font-size: 20px;
  }
  .link {
    display: inline-block;
    margin-bottom: 10px;
    text-decoration: none;
    color: black;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 22px;
    transition: all 0.3s;
  }
  .link:hover {
    background-color: #696969;
    color: white;
    border: 1px solid white;
  }
`;

export const StyledMovieContainer = styled.div`
  padding: 0px 15px;
  .back-link {
    display: inline-block;
    margin-bottom: 10px;
    text-decoration: none;
    color: black;
    border: 1px solid black;
    border-radius: 10px;
    padding: 5px 10px;
    font-size: 22px;
    transition: all 0.3s;
  }
  .back-link:hover {
    background-color: #696969;
    color: white;
    border: 1px solid white;
  }
`;
