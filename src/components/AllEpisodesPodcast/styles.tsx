import styled from 'styled-components';

export const Wrapper = styled.section`
  padding-bottom: 2rem;
  table {
    width: 100%;
    th,
    td {
      padding: 0.75rem 1rem;
      border-bottom: 1px solid var(--gray-100);
    }
    th {
      color: var(--gray-200);
      text-transform: uppercase;
      font: 500 1rem Lexend, sans-serif;
      text-align: left;
    }
    td {
      font-size: 1.2rem;
      img {
        width: 6rem;
        height: 5rem;
        border-radius: 1rem;
      }
      a {
        color: var(--gray-800);
        font-family: Lexend, sans-serif;
        font-weight: 600;
        text-decoration: none;
        line-height: 2rem;
        font-size: 1rem;
        &:hover {
          text-decoration: underline;
        }
      }
      button {
        width: 2rem;
        height: 2rem;
        background: var(--white);
        border: 1px solid var(--gray-100);
        border-radius: 0.5rem;
        font-size: 0;
        transition: filter 0.2s;
        img {
          width: 1.75rem;
          height: 1.75rem;
        }
        &:hover {
          filter: brightness(0.95);
        }
      }
    }
  }
`;
