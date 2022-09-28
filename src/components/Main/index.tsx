import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado da imagem"
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      ReactJS, NextJS, Typescript e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Ilustração de um programador em frente a um computador"
    />
  </S.Wrapper>
)

export default Main
