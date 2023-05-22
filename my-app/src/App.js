import React from "react";

import AppHeader from "./component/app-header";
import AppContent from "./component/app-content";
import AppHome from "./component/app-home";
import {AppFooter} from "./component/app-footer";
export class App extends React.Component {

    render() {
        return <div>
            <AppHeader/>
            <AppContent/>
            <AppHome/>
            <AppFooter src ="www.google.co.in" text = "Google"/>
        </div>
    }

}