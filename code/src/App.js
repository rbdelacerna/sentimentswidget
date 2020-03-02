import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import { Layout } from "./components/Layout";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Badges } from "./components/Badges";
import { Rate } from "./components/Rate";
import { RateMore } from "./components/RateMore";
import { TellUsMore } from "./components/Tellusmore";
import { ThankYou } from "./components/ThankYou";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Layout>
          <Header />
          <Footer>
            <Badges />
            <Rate />
            <RateMore />
            <TellUsMore />
            <ThankYou />
          </Footer>
        </Layout>
      </React.Fragment>
    );
  }
}

export default App;
