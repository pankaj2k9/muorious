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

const HomeCustomerLogos = ({ customerLogos }) => {
  const settings = {
    // autoplay: true,
    adaptiveHeight: true,
    slidesToShow: 10,
    variableWidth: true,
    infinite: true,
    appendDots: () => null,
    arrows: false,
    autoplaySpeed: 2000,
    speed: 1000,
    customPaging: () => '',
  }
  return (
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
  )
}

export default HomeCustomerLogos
