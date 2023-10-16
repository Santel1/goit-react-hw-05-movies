import styled from 'styled-components';

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3dbc5;
  padding: 20px;
  margin-bottom: 20px;

  .header-link {
    color: #ff6b6b;
    border: 1px solid #ff6b6b;
    border-radius: 10px;
    display: inline-block;
    padding: 20px;
    font-size: 22px;
    text-decoration: none;
    margin-right: 15px;

    transition: all 0.3s;

    &.active {
      border: 1px solid white;
      background-color: #ff6b6b;
      color: white;
    }
  }
`;
