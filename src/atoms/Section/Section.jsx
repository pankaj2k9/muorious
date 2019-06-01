import styled, { css } from 'styled-components'
import IndexHeroBg from './IndexHeroBg.png'
import InsightsHeroShape from '../Images/InsightsHeroShape.png'
import MobileHeroBg from '../../components/layout/MenuBackground.png'
import TestimonialsPink from './Testimonials/TestimonialsPink.png'
import TestimonialsGreen from './Testimonials/TestimonialsGreen.png'
import TestimonialsYellow from './Testimonials/TestimonialsYellow.png'
import AssistHeroBg from './AssistHeroBg.png'
import { getColors, mediaQueries } from '../../utils/styling'

const bgs = {
  pink: TestimonialsPink,
  green: TestimonialsGreen,
  yellow: TestimonialsYellow,
}

const Section = styled('section')`
    width: 100%;
    position: relative;
    ${({ indexHero }) =>
      indexHero &&
      css`
            padding-top: 96px;
            padding-bottom: 96px;
            ${mediaQueries.lg`
              padding-top: 180px;
            `};
            ${'' /* max-height: 696px; */}
            ${'' /* height: 70vh; */}
            background-image: url(${IndexHeroBg});
            background-size: cover;
            h1,h2 {
                padding-bottom: 20px;
            }
            h4 {
                padding-bottom: 20px;
            }
            ${
              '' /* @media(max-width: 992px){ 
                background-image: url(${MobileHeroBg});
                height: 40vh;
                h1 {
                    font-size: 20px;
                    line-height: 30px;
                }
            } */
            }
        `}

    /* TODO: Move these hero-specific styles */
    ${({ assistHero }) =>
      assistHero &&
      css`
        background-image: url(${AssistHeroBg});
        background-size: cover;
      `}
    ${({ insightsHero }) =>
      insightsHero &&
      css`
        background-image: url(${InsightsHeroShape});
        background-size: 50%;
        background-position: top left;
        background-repeat: no-repeat;
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-bottom: 100px; /* removes bottom overlapping with next section */
        @media (max-width: 992px) {
          min-height: 0;
          margin-bottom: 0;
        }
      `}

    ${props =>
      props.customerLogos &&
      `padding: 40px 0; background-color: ${getColors(props.theme).grey3}`}
    ${props =>
      props.intro &&
      css`
        padding: 60px 0;
        p {
          margin-top: 20px;
        }
        button {
          margin-top: 20px;
        }
        @media (max-width: 992px) {
          height: auto;
          padding: 30px 0;
        }
      `}
    

      ${({ testimonials }) =>
        testimonials &&
        css`
          min-height: 420px;
          padding: 40px 0;
          background-size: cover;
          background-size: 100%;
          background-position: center;
          @media (max-width: 992px) {
            padding: 80px 0;
          }
        `}
        ${({ assisttestmonials }) =>
          assisttestmonials &&
          css`
            @media (max-width: 992px) {
              margin: 60px 0;
            }
          `}
      ${({ insightsTestimnoial }) =>
        insightsTestimnoial &&
        css`
          @media (max-width: 992px) {
            padding: 80px 20px;
          }
        `}
      
    ${({ color }) =>
      color &&
      css`
        background-image: url(${bgs[color]});
      `}
   
    ${props =>
      props.features &&
      css`
        height: 275px;
        div {
          width: 84%;
          margin: auto;
        }
        h2 {
          margin: auto;
          display: block;
        }
        @media (max-width: 992px) {
          height: auto;
          padding: 30px 0;
          div {
            width: 100%;
          }
        }
      `}
    ${props =>
      props.grey && `background-color: ${getColors(props.theme).grey3};`}
    ${props =>
      props.cta &&
      css`
        & > div {
          height: 100%;
        }
        background-image: url(${props.src});
        background-size: cover;
        background-position: center;
        height: 558px;
        button {
          width: 200px;
          margin: 20px auto;
        }
      `}
    ${props =>
      props.benefits &&
      css`
        padding-top: 100px;
        p {
          width: 430px;
          line-height: 32px;
          padding: 15px 0;
          font-size: 16px;
        }
        h4 {
          font-weight: 400;
          padding: 15px 0;
        }
        @media (max-width: 992px) {
          p {
            width: 100%;
          }
        }
      `}
`

export default Section
