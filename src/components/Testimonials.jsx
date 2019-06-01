import React from 'react'
import Section from '../atoms/Section/Section'
import styled from 'styled-components'
import { get } from 'lodash'
import Slider from 'react-slick'
const data = {}

const CirclesOuter = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 15px 0;
  transform: translateY(-40px);
  @media (max-width: 992px) {
    transform: none;
    margin: 30px 0 0px;
  }
`

const Circle = styled.div`
  display: inline-block;
  width: 8px;
  height: 8px;
  margin: 0 4px;
  border-radius: 4px;
  cursor: pointer;
  border: 1px solid #fff;
  ${({ active }) => (active ? 'background-color: #fff;' : '')};
`

const Circles = ({ iterable, active, onClick }) => (
  <CirclesOuter>
    {iterable.map((i, idx) => (
      <Circle onClick={() => onClick(i)} active={i == active} key={idx} />
    ))}
  </CirclesOuter>
)

const TestimonialOuter = styled.div`
  margin-bottom: -30px;
  max-width: 1170px;
  margin: 0 auto;
  min-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateZ(0);
  @media (max-width: 992px) {
    padding: 50px 0 0;
  }
`

const TestimonialText = styled.p`
  font-family: Modern Era;
  font-style: italic;
  font-size: 22px;
  line-height: 40px;
  font-weight: 300;
  transform: translateZ(0);
  &:before {
    content: '“';
  }
  &:after {
    content: '”';
  }
  @media (max-width: 992px) {
    padding: 30px;
    font-size: 16px;
    line-height: 1.5;
    text-align: center;
  }
`

const colors = {
  pink: '#174F49',
  yellow: '#174F49',
  green: '#FFC509',
}

const TestimonialContent = styled.div`
  margin: 0 auto;
  min-height: 260px;

  max-width: 95vw;
  width: 670px;
  background-color: #ffffff;
  display: flex;
  padding: 0 130px 0 70px;
  justify-content: flex-start;
  align-items: center;
  color: #606060;
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 104px;
    height: 104px;
    position: absolute;
    top: -30px;
    left: -70px;
    background-color: ${({ color }) => colors[color]};
    background-image: url('data:image/png;base64,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');
    background-position: center;
    background-size: 59px 48px;
    background-repeat: no-repeat;
  }
  @media (max-width: 992px) {
    padding: 70px 0 0;
    display: block;
    &:before {
      top: -60px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`
const TestimonialAutor = styled.div`
  position: absolute;
  bottom: -40px;
  right: -160px;
  background-color: ${({ color }) => colors[color]};
  color: #fff;
  height: 230px;
  width: 230px;
  padding: 40px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  font-style: normal;
  @media (max-width: 992px) {
    position: static;
    width: 100%;
    height: auto;
    padding: 30px;
  }
`

const AuthorName = styled.p`
  font-family: Modern Era;
  font-size: 16px;
  line-height: 32px;
  font-weight: 700;
`
const AuthorJob = styled.p`
  font-family: Modern Era;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 300;
`
const CompanyLogo = styled.img`
  max-width: 80%;
  width: auto;
  height: 50px;
  float: left;
  margin-bottom: 10px;
  filter: brightness(0) invert(1);
`
const CompanyLogoGray = styled.img`
  max-width: 80%;
  width: auto;
  height: 50px;
  float: left;
  margin-bottom: 10px;
  filter: sepia(150%) hue-rotate(360deg) saturate(0.5);
`

const Testimonial = ({
  content,
  authorFirstName,
  authorLastName,
  authorJobTitle,
  authorCompany,
  indx,
  color = 'green',
}) => {
  const customerLogo = get(authorCompany, 'customerLogo.file.url')
  console.log(indx.authorCompany.customerName)
  return (
    <TestimonialOuter>
      <TestimonialContent color={color}>
        <TestimonialText>{content}</TestimonialText>
        <TestimonialAutor color={color}>
          {authorCompany && authorCompany.customerLogo ? (
            authorCompany.customerName === 'Heetch' ? (
              <CompanyLogoGray src={customerLogo} />
            ) : (
              <CompanyLogo src={customerLogo} />
            )
          ) : null}
          <AuthorName>
            {authorFirstName} {authorLastName}
          </AuthorName>
          {authorCompany ? <AuthorJob>{authorJobTitle}</AuthorJob> : null}
        </TestimonialAutor>
      </TestimonialContent>
    </TestimonialOuter>
  )
}

class Testimonials extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: 0, order: [], data: [] }
  }

  componentDidMount() {
    const { data } = this.props
    const count = data.length
    const order = Object.keys(data).reduce(
      (obj, value) => ({
        ...obj,
        [value]: Number(value) + 1 < count ? Number(value) + 1 : 0,
      }),
      {}
    )
    this.setState({ data, count, order })
  }

  choose = i => {
    if (this.slider) {
      this.slider.slickGoTo(i)
      this.setState({ active: i })
    }
  }

  render() {
    const { active, order, data } = this.state
    const { color } = this.props
    if (data) {
      const settings = {
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        afterChange: current => this.setState({ active: current }),
      }
      return (
        <Section testimonials color={color}>
          <div className="container">
            <Slider ref={el => (this.slider = el)} {...settings}>
              {data.map((i, idx) => (
                <Testimonial key={idx} color={color} indx={i} {...i} />
              ))}
            </Slider>
            <Circles
              onClick={this.choose}
              iterable={Object.keys(order)}
              active={active}
            />
          </div>
        </Section>
      )
    } else {
      return null
    }
  }
}

export default Testimonials
