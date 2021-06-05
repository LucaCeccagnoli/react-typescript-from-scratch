import React from "react";
import {hot} from "react-hot-loader";
import "./App.css";

interface IProps{}
interface IState{}

export class App extends React.Component<IProps, IState>{
    render(){
        return(
            <div className = "app">
                <h1>It works!</h1>
            </div>
        )
    }
}

export default hot(module)(App);