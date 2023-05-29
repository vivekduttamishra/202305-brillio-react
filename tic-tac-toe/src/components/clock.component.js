import React from 'react';


class Clock extends React.Component {

    state={
        time:new Date(),
        number:0
    }

    render(){
        console.log('component rendered');
        return (
        <div className='clock'>
            {this.state.time.toLocaleTimeString()}
        </div>)
    }

    componentDidMount(){
        this.iid= setInterval(()=>{
            console.log('component time update');
            this.setState({ time:new Date()});
        },1000);

        console.log('component mounted');
    }

    componentWillUnmount(){
        if(this.iid){
            clearInterval(this.iid);
            this.iid=undefined;
        }
        console.log('component unmounted');
    }
}

export default Clock;