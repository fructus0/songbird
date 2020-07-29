import React, {Component} from 'react';
import './App.css';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Bird from "./components/Bird";
import Main from "./components/Main";
class App extends Component {
  render() {
    return(
        <>
            <Header></Header>
            <Bird></Bird>
            <Main></Main>
        </>
    )
  }
}

export default App;
