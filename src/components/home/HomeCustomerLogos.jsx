import React from 'react'
import styled from 'styled-components'
import { Row } from 'react-styled-flexboxgrid'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css'

import { mediaQueries, maxMediaQueries } from '../../utils/styling'

import { IndexCustomerLogo } from '../../atoms/Images/Images.jsx'

const CustomerLogoContainer = styled('div')`
  margin: 20px;
  height: 50px;
  display: flex !important;
  align-items: center;
  width: 100%;
`

const SliderContainer = styled('div')`
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
  ${maxMediaQueries.sm`
    padding: 0 30px
  `};
`

const HomeCustomerLogos = ({ customerLogos }) => {
  const settings = {
    autoplay: false,
    slidesToScroll: 4,
    adaptiveHeight: true,
    slidesToShow: 4,
    variableWidth: false,
    infinite: true,
    appendDots: () => null,
    arrows: false,
    autoplaySpeed: 4000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
    customPaging: () => '',
  }
  return (
    <SliderContainer>
      <Slider {...settings}>
        {customerLogos.map(
          (logo, index) =>
            logo.customerLogo && (
              <CustomerLogoContainer key={index}>
                <a href={logo.customerUrl}>
                  <IndexCustomerLogo src={logo.customerLogo.file.url} />
                </a>
              </CustomerLogoContainer>
            )
        )}
      </Slider>
    </SliderContainer>
  )
}

export default HomeCustomerLogos
