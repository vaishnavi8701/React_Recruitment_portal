
import React from 'react';
const url="#";
class Footer extends React.Component{
    render(){
    return (
        <footer>
            <section className="footer-Content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-xs-12">
                            <div className="widget">
                                <div className="footer-logo">Terms and Conditions</div>
                                <br/>
                                <div className="textwidget">
                                    <p>Privacy</p>
                                </div>
                                <br/>
                                <div className="textwidget">
                                    <p>Refund Policy</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-xs-12">
                            <div className="widget">
                                <h3 className="block-title">Quick Links</h3>
                                <ul className="menu">
                                    <li><a href={url}>About Us</a></li>
                                    <li><a href={url}>Support</a></li>
                                    <li><a href={url}>Contact</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-xs-12">
                            <div className="widget">
                                <ul className="mt-3 footer-social">
                                    <li><a className="facebook" href={url}><i className="lni-facebook-filled"/></a></li>
                                    <li><a className="twitter" href={url}><i className="lni-twitter-filled"/></a></li>
                                    <li><a className="linkedin" href={url}><i className="lni-linkedin-fill"/></a></li>
                                    <li><a className="google-plus" href={url}><i className="lni-google-plus"/></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}
}
export default Footer;