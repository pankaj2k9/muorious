import styled, { css } from 'styled-components'
import IndexHeroBg from './IndexHeroBg.png'
import MobileHeroBg from '../../components/layout/MenuBackground.png'
import TestimonialsPink from './Testimonials/TestimonialsPink.png'
import TestimonialsYellow from './Testimonials/TestimonialsYellow.png'
import AssistHeroBg from './AssistHeroBg.png'
import { getColors } from "../../utils/styling";

const Section = styled("section")`
    width: 100%;
    position: relative;
    ${ ({ indexHero }) => indexHero &&
        css`
            height: 696px; 
            background-image: url(${IndexHeroBg});
            background-size: cover;
            @media(max-width: 992px){ 
                background-image: url(${MobileHeroBg});
            }
        `
    }
    ${ props => props.assistHero &&
        `height: 1081px; 
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
    ${ props => props.testimonials &&
        `height: 472px; 
        background-size:cover;
        .box {
            padding: 6% 14%;
            margin: auto;
            width: 79%;
            font-style: italic;
            line-height: 40px;
            background-color: ${getColors(props.theme).white}
        }
        `
    }
    ${ props => props.pink &&
        `background-image: url(${TestimonialsPink});`
    }
    ${ props => props.yellow &&
        `background-image: url(${TestimonialsYellow});`
    }
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
        css`background-image: url(${props.src}); background-size: cover; background-position: center; height: 558px; button {width: 200px; margin: 20px auto;}`
    }
    ${ props => props.benefits &&
        `p { width: 430px; line-height: 32px; padding: 15px 0; } h4 {font-weight: 400; padding: 15px 0;} `
    }
`

export default Section