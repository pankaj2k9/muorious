import styled, { css } from 'styled-components'
import IndexHeroBg from './IndexHeroBg.png'
import IndexTestimonials from './IndexTestimonials.png'
import AssistHeroBg from './AssistHeroBg.png'
import { getColors } from "../../utils/styling";

const Section = styled("section")`
    width: 100%;
    position: relative;
    ${ props => props.indexHero &&
        `height: 696px; background-image: url(${IndexHeroBg}); background-size: cover;`
    }
    ${ props => props.assistHero &&
        `height: 1005px; background-image: url(${AssistHeroBg}); background-size: cover;`
    }
    ${ props => props.customerLogos && `padding: 40px 0; background-color: ${getColors(props.theme).grey3}`}
    ${ props => props.intro && "padding: 30px 0; height: 512px; p { margin-top: 20px; } button { margin-top: 20px; }"}
    ${ props => props.testimonials &&
        `height: 472px; background-image: url(${IndexTestimonials}); background-size:cover`
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
    `

    }
    ${ props => props.grey &&
        `background-color: ${getColors(props.theme).grey3};`
    }
    ${ props => props.cta &&
        `background-image: url(${props.src}); background-size: cover; height: 558px; button {width: 200px; margin: 20px auto;}`
    }
`

export default Section