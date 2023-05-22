import {Component} from 'react'

import AppHeader from './components/app-header.component';
import AppFooter from './components/app-footer.component';
import Content from './components/app-home.component';


export class App extends Component {
    render() {
        return (
                <>
                    <AppHeader size={12} color="orangered" >
                        Book's Web
                    </AppHeader>
                    <Content/>
                    <AppFooter link="https://react.dev" 
                                text="React" />
                </>
        );
    }
}
