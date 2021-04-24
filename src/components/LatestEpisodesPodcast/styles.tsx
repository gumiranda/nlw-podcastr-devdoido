import styled from 'styled-components';

export const Wrapper = styled.section`
  ul {
    list-style: none;
    display: grid;
    @media (max-width: 500px) {
      grid-template-columns: auto;
    }
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    li {
      background: var(--white);
      border: 1px solid var(--gray-100);
      padding: 2rem;
      border-radius: 2.1rem;
      position: relative;
      display: flex;
      align-items: center;
    }
  }
`;
export const EpisodeDetails = styled.div``;
