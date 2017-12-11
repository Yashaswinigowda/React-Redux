import React,{PropTypes} from 'react';


class LoadingDots extends React.Component {
  constructor(props, context)
  {
    super(props,context);
    this.state = {frame:1};
  }

  componentDidMount(){
        this.internal = setInterval(()=>{
          this.setState({
            frame: this.state.frame + 1
          });
        }, this.props.interval);
      }

  ComponentWillUnmount(){
    clearInterval(this.interval);
  }


render(){
  let dots= this.state.frame % (this.props.dots +1);
  let text= '';
  while (dots >0) {
    text += '.';
    dots--;
   }
  return <span{...this.props}>{text} &nbsp;</span>;
 }
}

LoadingDots.defaultProps ={
  internal: 300, dots:3
};

LoadingDots.propTypes={
  interval: PropTypes.number,
  dots : PropTypes.number
};


export default LoadingDots;
