import styled from 'styled-components';

export const StyledMovieDetails = styled.div`
  padding: 0px 15px;
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
    color: black;
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
    text-decoration: none;
  }
  .link:hover {
    border: 1px solid #ff6b6b;
    color: #ff6b6b;
  }
`;
