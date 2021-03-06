import styled from 'styled-components'

import Section from '../../atoms/Section/Section'

const HeroSection = styled(Section)`
  height: 100vh;
  min-height: ${({ insightsHero }) => (insightsHero ? '1080px' : '900px')};
  display: flex;
  padding-top: 150px;
  align-items: flex-start;
  justify-content: flex-start;
  background-repeat: no-repeat;
  p {
    width: 80%;
    margin: 20px auto 0;
  }
  h2 {
    width: 80%;
    margin: 0 auto;
  }
  @media (max-width: 992px) {
    padding-top: 100px;
    min-height: auto;
    h1 {
      font-size: 26px;
      line-height: 1.4;
      width: 100%;
    }
    p {
      font-size: 14px;
      line-height: 23px;
      width: 100%;
      margin: 20px auto 20px;
    }
  }
`

HeroSection.Img = styled.img`
  display: block;
  margin: '40px auto 0';
  max-width: 90%;
  @media (max-width: 992px) {
    margin: ${({ assistHero, insightHero }) =>
      assistHero
        ? '60px auto 0'
        : insightHero
          ? '60px auto 60px'
          : '40px auto 0'};
  }
`

export default HeroSection
