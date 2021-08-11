import React from 'react';

class Jumbotron extends React.Component{
    render(){
    return (
        <div className="container">
            <div className="row space-100">
                <div className="col-lg-7 col-md-12 col-xs-12">
                    <div className="contents">
                        <h2 className="head-title">Find the job <br/> that you prefer</h2>
                        <p>We are a technology company on a mission to equip students with relevant skills & practical exposure through internships and online trainings. Imagine a world full of freedom and possibilities. A world where you can discover your passion and turn it into your career. A world where your practical skills matter more than your university degree. A world where you do not have to wait till 21 to taste your first work experience (and get a rude shock that it is nothing like you had imagine it to be). A world where you graduate fully assured, fully confident, and fully prepared to stake claim on your place in the world.</p>
                        <div className="button-group">
                      
                               <a className="button btn btn-common" style={{backgroundColor:'#00008B'}} href='/jobs'>Apply for a Job</a>
                         
                           
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 col-md-12 col-xs-12">
                    <div className="intro-img">
                        <img src="assets/img/sub.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default Jumbotron;