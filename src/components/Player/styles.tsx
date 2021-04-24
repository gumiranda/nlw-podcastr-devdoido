import styled from 'styled-components';
export const BackgroundPlayer = styled.div`
  background: var(--purple-500);
`;
export const Wrapper = styled.div`
  padding: 4.5rem 5.5rem;
  width: 30rem;
  height: 82vh;
  background: var(--purple-500);
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderPlayer = styled.header`
  display: flex;
  align-items: center;
  gap: 1.2rem;
`;
export const HeaderPlayerText = styled.strong`
  font-family: Lexend, sans-serif;
  font-weight: 600;
`;

export const EmptyPlayer = styled.div`
  height: 20rem;
  width: 100%;
  border: 1.5px dashed var(--purple-300);
  border-radius: 2.4rem;
  background: linear-gradient(
    143.8deg,
    rgba(145, 100, 250, 0.8) 0%,
    rgba(0, 0, 0, 0) 100%
  );
  padding: 6.4rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FooterPlayer = styled.footer`
  align-self: stretch;
  &.empty {
    opacity: 0.5;
  }
`;
export const FooterPlayerProgress = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 0.875rem;
`;
export const FooterPlayerProgressTextIndicator = styled.span`
  display: inline-block;
  width: 4rem;
  text-align: center;
`;
export const FooterPlayerSlider = styled.div`
  width: 100%;
  height: 4px;
  background: var(--purple-300);
  border-radius: 4px;
  flex: 1;
`;
export const FooterPlayerEmptySlider = styled.div`
  width: 100%;
  height: 4px;
  background: var(--purple-300);
  border-radius: 4px;
`;
export const FooterPlayerButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  gap: 3rem;
`;
export const GenericButton = styled.button`
  background: transparent;
  border: 0;
  font-size: 0;
`;
export const PlayButton = styled.button`
  background: transparent;
  border: 0;
  font-size: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: var(--purple-400);
`;
