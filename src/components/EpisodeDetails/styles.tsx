import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 72rem;
  padding: 5rem 4rem;
  margin: 0 auto;
  header {
    padding-bottom: 1.6rem;
    border-bottom: 1px solid var(--gray-100);
    h1 {
      margin-top: 3.2rem;
      margin-bottom: 1.8rem;
    }
    span {
      display: inline-block;
      font-size: 1.4rem;
      & + span {
        margin-left: 1.6rem;
        padding-left: 1.6rem;
        position: relative;
        &::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 2px;
          background: #000;
          position: relative;
          left: 0;
          top: 50%;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
`;
export const ThumbnailContainer = styled.div`
  position: relative;
  img {
    border-radius: 1.6rem;
  }
  button {
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 1.5rem;
    border: 0;
    position: absolute;
    z-index: 5;
    font-size: 0;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
    &:first-child {
      left: 0;
      top: 50%;
      background: var(--purple-500);
      transform: translate(-50%, -50%);
    }
    &:last-child {
      right: 0;
      top: 50%;
      background: var(--green-500);
      transform: translate(50%, -50%);
    }
  }
`;
export const DescriptionContainer = styled.div`
  margin-top: 3.2rem;
  line-height: 2rem;
  color: var(--gray-800);
  p {
    font-size: 1.6rem;
    margin: 1.5rem 0;
  }
`;
