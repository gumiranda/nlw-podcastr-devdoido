import * as S from './styles';
import format from 'date-fns/format';
import ptBR from 'date-fns/locale/pt-BR';
import Link from 'next/link';

const HeaderPodcast = () => {
  const currentDate = format(new Date(), 'EEEEEE, d MMMM', { locale: ptBR });
  return (
    <S.Wrapper>
      <Link href="/">
        <S.Logo src="/logo.svg" alt="HeaderPodcast" />
      </Link>
      <S.Paragraph>O melhor está aqui</S.Paragraph>
      <S.SpanDate>{currentDate}</S.SpanDate>
    </S.Wrapper>
  );
};
export default HeaderPodcast;
