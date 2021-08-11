/* eslint-disable */
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";


const JobItem = function ()  {


    return (
        <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="job-featured">
                <div className="icon">
                   <img src="assets/img/download.png" height="50px" width="50px"></img>
                </div>
                <div className="content">
                    <h3>
                        <Link to={`/jobs/1`}>Web developer</Link>
                    </h3>
                    <p className="brand">Techvolt</p>
                    <div className="tags">
                        <span><i className="lni-map-marker"/> Chennai</span>
                        <br/>
                        <span><i className="lni-user"/>Full Time</span>
                    </div>
                   
                    
                    Tags:
                    
                                <span key="1" className="full-time" style={{color: '#fff', backgroundColor: '#000'}}>#Jobs #Fulltime</span>
                               
                     <Button  type="button" className="full-time" style={{color: '#fff', backgroundColor: '#000'}}  >Apply</Button>
                </div>
            </div>
        </div>
    );
};


export default JobItem;
