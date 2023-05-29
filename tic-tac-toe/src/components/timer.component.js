import React from "react";

class Timer extends React.Component {
    state = {
        seconds: 0,
        milliseconds: 0
    }
    iid = null;

    render() {
        return (
            <div className='stopwatch'>
                <div className='display'>
                    <span>{this.state.seconds}</span>
                    <span>{this.state.milliseconds}</span>
                </div>
                <div className='controls'>
                    <button>Start</button>
                    <button>Stop</button>
                </div>
                {this.state.seconds}
            </div>
        );
    }

    start = () => {
        this.iid = setInterval(() => {
            var {seconds, milliseconds} = this.state;
            milliseconds += 100;
            if (milliseconds % 1000 === 0) {
                milliseconds = 0;
                seconds++;
            }
            this.setState({seconds, milliseconds});
        });
    }
    /*componentDidMount() {
        setInterval(() => {
            let s= this.state.seconds;
            this.setState({seconds : s++});
        }, 100)
    }*/
}

export default Timer;