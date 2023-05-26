import React from 'react';

class Stopwatch extends React.Component{

    state={
        seconds:0,
        ms:0,
        run:false
    }
    
   

    componentDidMount=()=>{
        console.log('started');
        this.iid = setInterval(()=>{

            if(!this.props.run)
                return ; 

            var {seconds,ms}=this.state;

            ms+=100;

            if(ms%1000===0){
                ms=0;
                seconds++;
            }

            this.setState({seconds,ms});
        },100);
    }

    componentWillUnmount=()=>{
        console.log('stopped');
        if(this.iid)
            clearInterval(this.iid);
    }

    reset=()=>{
        this.setState({seconds:0, ms:0});
    }

    render(){
        
        var {seconds,ms} = this.state;
        if(seconds<10)
            seconds="0"+seconds;

        if(ms===0)
            ms="000";

        

        return (
        <div className='stopwatch'>
            <h2>{this.props.name}</h2>
            <div className='display'>
                <span className='seconds'>
                    {seconds}
                </span>
                <span className='ms'>
                    {ms}
                </span>
            </div>           
        </div>
        );
    }

}

export default Stopwatch;