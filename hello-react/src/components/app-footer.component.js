import {Component} from 'react';

class AppFooter extends Component{ 

    render() {
        return <div>
            &copy;
            <a href={this.props.link} >
                {this.props.text}
            </a>
        </div>;
    }
}

export default AppFooter;