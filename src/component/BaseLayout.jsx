/* eslint-disable */
import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Helmet } from "react-helmet";
import PropTypes from 'prop-types';


BaseLayout.propTypes={
    children: React.ReactNode,
    title: PropTypes.string
}

function BaseLayout(props) {
    return (
        <React.Fragment>
            <Header/>
            <Helmet>
                <title>{props.title}</title>
            </Helmet>

            {props.children}

            <Footer/>
        </React.Fragment>
    )
};

export default BaseLayout;