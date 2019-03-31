import styled from 'styled-components'
import IndexHeroBg from './IndexHeroBg.png'
import TestimonialsPink from './Testimonials/TestimonialsPink.png'
import TestimonialsYellow from './Testimonials/TestimonialsYellow.png'
import AssistHeroBg from './AssistHeroBg.png'
import { getColors } from "../../utils/styling";

const Section = styled("section")`
    width: 100%;
    position: relative;
    ${ props => props.indexHero &&
        `height: 696px; background-image: url(${IndexHeroBg}); background-size: cover;`
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
    ${ props => props.benefits && 
        "height: 1003px; p {margin-top: 10px; line-height: 32px;} h4 {font-weight: 400;} "
    }
    ${ props => props.customerLogos && `padding: 40px 0; background-color: ${getColors(props.theme).grey3}`}
    ${ props => props.intro && "height: 512px; p { margin-top: 20px; } button { margin-top: 20px; }"}
    ${ props => props.testimonials && 
        `height: 472px; background-image: url(${TestimonialsPink}); background-size:cover`
    }
    ${ props => props.features &&
        "height: 275px; div { width: 84%; margin: auto; }; h2 { margin: auto; display: block; }"
    }
    ${ props => props.grey &&
        `background-color: ${getColors(props.theme).grey3};`
    }
    ${ props => props.cta &&
        `background-image: url(${props.src}); background-size: cover; height: 558px; button {width: 200px; margin: 20px auto;}`
    }
`

export default Section