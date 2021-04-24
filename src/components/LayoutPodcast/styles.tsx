import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  @media (max-width: 722px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  main {
    flex: 1;
  }
`;
