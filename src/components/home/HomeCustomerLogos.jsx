import React from 'react'
import styled from 'styled-components'
import { Row } from 'react-styled-flexboxgrid'
import Slider from 'react-slick'
import '../../../node_modules/slick-carousel/slick/slick.css'

import { IndexCustomerLogo } from '../../atoms/Images/Images.jsx'

const CustomerLogoContainer = styled('div')`
  margin: 20px;
  height: 50px;
  display: flex !important;
  align-items: center;
`

const SliderContainer = styled('div')`
  max-width: 1200px;
  margin-right:auto;
  margin-left:auto;
`

const HomeCustomerLogos = ({ customerLogos }) => {
  const settings = {
    autoplay: true,
    slidesToScroll: 6,
    adaptiveHeight: true,
    slidesToShow: 6,
    variableWidth: true,
    infinite: true,
    appendDots: () => null,
    arrows: false,
    autoplaySpeed: 4000,
    speed: 1000,
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
