import * as S from './styles';

const Player = () => (
  <S.Wrapper>
    <S.HeaderPlayer>
      <img src="/playing.svg" alt="Tocando agora" />
      <S.HeaderPlayerText>Tocando agora</S.HeaderPlayerText>
    </S.HeaderPlayer>
    <S.EmptyPlayer>
      <strong>Selecione um podcast para ouvir</strong>
    </S.EmptyPlayer>
    <S.FooterPlayer>
      <S.FooterPlayerProgress>
        <S.FooterPlayerProgressTextIndicator>00:00</S.FooterPlayerProgressTextIndicator>
        <S.FooterPlayerSlider />
        <S.FooterPlayerEmptySlider />
        <S.FooterPlayerProgressTextIndicator>00:00</S.FooterPlayerProgressTextIndicator>
      </S.FooterPlayerProgress>
      <S.FooterPlayerButtons>
        <S.GenericButton type="button">
          <img src="/shuffle.svg" alt="Embaralhar" />
        </S.GenericButton>
        <S.GenericButton type="button">
          <img src="/play-previous.svg" alt="Tocar anterior" />
        </S.GenericButton>
        <S.PlayButton type="button">
          <img src="/play.svg" alt="Tocar" />
        </S.PlayButton>
        <S.GenericButton type="button">
          <img src="/play-next.svg" alt="Tocar próxima" />
        </S.GenericButton>
        <S.GenericButton type="button">
          <img src="/repeat.svg" alt="Repetir" />
        </S.GenericButton>
      </S.FooterPlayerButtons>
    </S.FooterPlayer>
  </S.Wrapper>
);

export default Player;
