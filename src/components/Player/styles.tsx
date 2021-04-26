import styled from 'styled-components';
interface Props {
  empty?: boolean;
  isActive?: boolean;
}
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
  gap: 2rem;
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
export const CurrentEpisode = styled.div`
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  img {
    border-radius: 1.5rem;
  }
  strong {
    display: block;
    margin-top: 2rem;
    font: 600 1.25rem Lexend, sans-serif;
    line-height: 1.75rem;
  }
  span {
    display: block;
    margin-top: 1rem;
    opacity: 0.6;
    line-height: 1.5rem;
  }
`;

export const FooterPlayer = styled.footer`
  align-self: stretch;
  &.empty {
    opacity: ${(props: Props) => (props?.empty ? 0.5 : 1)};
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
  transition: filter 0.2s;
  filter: ${(props: Props) =>
    props.isActive
      ? 'invert(0.35) sepia(1) saturate(3) hue-rotate(100deg)'
      : 'brightness(0.95)'};
  &:disabled {
    cursor: default;
  }
  &:hover {
    filter: ${(props: Props) =>
      props.isActive
        ? 'brightness(0.55) invert(0.35) sepia(1) saturate(3) hue-rotate(100deg)'
        : 'brightness(0.95)'};
  }
  &:hover:not(:disabled) {
    filter: brightness(0.75);
  }
`;
export const PlayButton = styled.button`
  background: transparent;
  border: 0;
  font-size: 0;
  width: 4rem;
  height: 4rem;
  border-radius: 1rem;
  background: var(--purple-400);
  transition: filter 0.2s;
  &:hover:not(:disabled) {
    filter: brightness(0.75);
  }
  &:disabled {
    cursor: default;
  }
`;
