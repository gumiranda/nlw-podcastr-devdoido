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
      img {
        width: 4.6rem;
        height: 4.6rem;
        border-radius: 0.6rem;
      }
      button {
        position: absolute;
        right: 2.5rem;
        bottom: 2.5rem;
        width: 3.5rem;
        height: 3.5rem;
        background: var(--white);
        border: 0.5px solid var(--gray-100);
        border-radius: 0.875rem;
        font-size: 0;
        transition: filter 0.2s;
        img {
          width: 2.5rem;
          height: 2.5rem;
        }
        &:hover {
          filter: brightness(0.9);
        }
      }
    }
  }
`;
export const EpisodeDetails = styled.div`
  flex: 1;
  margin-left: 1rem;
  a {
    display: block;
    color: var(--gray-800);
    font-family: Lexend, sans-serif;
    font-weight: 600;
    text-decoration: none;
    line-height: 1.4rem;
    &:hover {
      text-decoration: underline;
    }
  }
  p {
    font-size: 1rem;
    margin-top: 0.8rem;
    max-width: 70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  span {
    display: inline-block;
    margin-top: 0.7rem;
    font-size: 1rem;
    &:last-child {
      margin-left: 0.8rem;
      padding-left: 0.8rem;
      position: relative;
      &::before {
        content: '';
        width: 4px;
        height: 4px;
        border-radius: 2px;
        background: #ddd;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
`;
