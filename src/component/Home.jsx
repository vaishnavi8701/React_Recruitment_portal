import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Works from './Works';
import Slider from './Slider';
import { Helmet } from "react-helmet";
const {ToastProvider} = require('react-toast-notifications');


class Home extends React.Component {

  render(){
  return (
    <div>
      <ToastProvider autoDismiss={true} autoDismissTimeout={2000}>
    <Header/>
            <Helmet>
            <title>Home</title>
            </Helmet>

            {this.props.children}
<Slider />
<Works />

            <Footer/>
            </ToastProvider>
            </div>
  );
  }
}

export default Home;
