import React from 'react';
import posed from 'react-pose'


// Animations
const Wrapper = posed.div({
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      opacity: { ease: 'easeOut', duration: 600 },
      y: {ease: 'easeOut', duration: 600 }
    }
  },
  hidden: {
    y: "-1%",
    opacity: 0
  }
});


class PageTransitionWrapper extends React.Component {
  constructor(props){
    super(props);
    this.timeout = null;
    this.state = {
      visible: true // Put to false to enable animations. For now its seems in production it causes some issues
    }
  }
  componentDidMount(){
    const timing = this.props.timing ? this.props.timing : 100;
    this.timeout = setTimeout(() => {
      this.setState(() => { return {visible: true}})
    }, 100)
  }
  componentWillUnmount(){
    clearTimeout(this.timeout);
  }

  render(){
    return (
      <Wrapper pose={this.state.visible ? 'visible' : 'hidden'}>
        <>
        {this.props.children}
        </>
      </Wrapper>
    )
  }
}

export default PageTransitionWrapper;


