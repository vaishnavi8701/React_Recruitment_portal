import React from "react";

class Works extends React.Component {
    render(){
    return (
        <section className="how-it-works section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">How It Works?</h2>
                    <p>
Internshala provide training in online training in different streams like Python, Data Science, Machine Learning, Advance Excel, Ethical Hacking, Web Development and much more popular courses. They also provide certification after the completion of course which you may attach on your resume.However, on this platform, there are fraudulent companies as well that claim to offer you internships to look out for.</p>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="work-process">
                        <span className="process-icon">
                            <i  style={{color:'#00008B'}} className="lni-user"/>
                        </span>
                        <a href='/register'>
                            <h4>Create an Account</h4>
                            <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers
                                find place best.</p>
                                </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="work-process step-2">
                        <span className="process-icon">
                            <i style={{color:'#00008B'}} className="lni-search"/>
                        </span>
                        <a href='/jobs'>
                            <h4>Search Jobs</h4>
                            <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers
                                find place best.</p>
                                </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                        <div className="work-process step-3">
                        <span className="process-icon">
                            <i  style={{color:'#00008B'}} className="lni-cup"/>
                        </span>
                        <a href='/jobs'>
                            <h4>Apply</h4>
                            <p>Post a job to tell us about your project. We'll quickly match you with the right freelancers
                                find place best.</p>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
}
export default Works;