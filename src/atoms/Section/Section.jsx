import styled, { css } from 'styled-components'
import IndexHeroBg from './IndexHeroBg.png'
import MobileHeroBg from '../../components/layout/MenuBackground.png'
import TestimonialsPink from './Testimonials/TestimonialsPink.png'
import TestimonialsGreen from './Testimonials/TestimonialsGreen.png'
import TestimonialsYellow from './Testimonials/TestimonialsYellow.png'
import AssistHeroBg from './AssistHeroBg.png'
import { getColors } from "../../utils/styling";

const bgs = {
    pink: TestimonialsPink,
    green: TestimonialsGreen,
    yellow: TestimonialsYellow
}

const Section = styled("section")`
    width: 100%;
    position: relative;
    ${ ({ indexHero }) => indexHero &&
        css`
            max-height: 696px;
            height: 70vh;
            background-image: url(${IndexHeroBg});
            background-size: cover;
            h1 {
                padding-bottom: 20px;
            }
            h4 {
                padding-bottom: 20px;
            }
            @media(max-width: 992px){ 
                background-image: url(${MobileHeroBg});
                height: 40vh;
                h1 {
                    font-size: 20px;
                    line-height: 30px;
                }
            }
        `
    }
    ${ props => props.assistHero && css`
        padding-top: 100px;
        height: 100vh; 
        background-image: url(${AssistHeroBg}); 
        background-size: cover;
        p {
            width: 80%;
            margin: 20px auto 0;
        }
        h2 {
            width: 80%;
            margin: 0 auto;
        }
        @media (max-width: 800px) {
            padding-top: 0px;
            h1 {
                font-size: 26px;
            }
            p {
                font-size: 14px;
                line-height: 23px;
            }
        }
        `
    }
    ${ props => props.customerLogos && `padding: 40px 0; background-color: ${getColors(props.theme).grey3}`}
    ${ props => props.intro && css`
        padding: 30px 0;
        height: 512px; 
        p { margin-top: 20px; }
        button { margin-top: 20px; }
        @media (max-width: 992px) {
            height: auto;
            padding: 30px 0;
        }
    `}
    ${ ({ testimonials }) => testimonials &&
        css`
            min-height: 472px; 
            display: flex;
            background-size: cover;
            justify-content: center;
            align-items: center;
            background-size: 100%;
            background-position: center;
            @media (max-width: 992px){
                padding: 80px 0;
            }
        `
    }

    ${({ color }) => color && css`background-image: url(${bgs[color]});`}
   
    ${ props => props.features && css`
        height: 275px; 
        div { width: 84%; margin: auto; }
        h2 { margin: auto; display: block; }
        @media (max-width: 992px) {
            height: auto;
            padding: 30px 0;
            div {
                width: 100%;
            }
        }
    `}
    ${ props => props.grey &&
        `background-color: ${getColors(props.theme).grey3};`
    }
    ${ props => props.cta &&
        css`background-image: url(${props.src}); background-size: cover; background-position: center; height: 558px; button {width: 200px; margin: 20px auto;}
        `
    }
    ${ props => props.benefits && css`
        padding-top: 100px;
        p { 
            width: 430px;
            line-height: 32px;
            padding: 15px 0; 
        }
        h4 { 
            font-weight: 400;
            padding: 15px 0; 
        }
        @media(max-width: 992px){
            p {
                width: 100%;
            }
        }
        `
    }
`

export default Section