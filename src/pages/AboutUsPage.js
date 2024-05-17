/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable eol-last */
import React, { Component } from 'react';

import Header from 'parts/Header';
import About from 'parts/About';
import Footer from 'parts/Footer';

export default class AboutUsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <About />
        <Footer />
      </>
    );
  }
}
