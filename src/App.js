import React, {Component} from 'react';

class Ticker extends Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      pause: false,
      interval: 0,
      pausebtn: "Pause"
    };
  };

  componentDidMount() {

    this.setState({
      interval: setInterval(() => {
          this.setState({
            count: this.state.count + 1
          })
        }, 1000)
      })
    

  }
 
  shouldComponentUpdate(nextProps, nextState) {

    // if(nextState.count % 3 === 0){
    //   return true;
    // } else {
    //   return false;
    // }
    if(!this.state.pause){
      return true;
    } else {
      return false;
    } 


  }

  resetTicker = () => {
    this.setState({
      count: 0,
    })
  }

  pauseTicker = () => {
    this.setState({
      pause: !(this.state.pause)
    })
    if(!this.state.pause){
      this.setState({
        pausebtn: "Play",
        interval: clearInterval(this.state.interval),
      })
    } else {
      this.setState({
        pausebtn: "Pause",
        interval: setInterval(() => {
            this.setState({
              count: this.state.count + 1
            })
          }, 1000),
        })
    }
  }

  render() {
    return(
      <div>
        <p>The Ticker is: {this.state.count} </p>
        <button type = "button" onClick = {this.resetTicker}>Reset Ticker</button>
        <button type = "button" onClick = {this.pauseTicker}>{this.state.pausebtn}</button>
      </div>
    );
  };


};

export default Ticker;