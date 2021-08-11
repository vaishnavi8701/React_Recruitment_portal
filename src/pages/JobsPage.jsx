/* eslint-disable */
import React, { useState, useEffect } from "react";
import AxiosConfig from "../AxiosConfig";
import JobItem from "../component/JobItem";
import BaseLayout from "../component/BaseLayout";

function JobsPage (props) {
    const [jobs, setJobs] = useState("");
    const [position, setPosition] = useState("");
    const [location, setLocation] = useState("");
    const [error, setError] = useState("");

    
    


useEffect(() => {
        AxiosConfig.get('jobs/')
            .then(res => {
                setJobs(res.data);
            })
            .catch(err => setError(err));
    }, []);

    const onSearch = (e) => {
        e.preventDefault();
    }

    return (
        <BaseLayout title={'All jobs'}>
            <div className="page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-header">
                                <h3>Find your desired job</h3>
                            </div>
                            <div className="job-search-form bg-cyan job-featured-search">
                                <form>
                                    <div className="row justify-content-center">
                                        <div className="col-lg-3 col-md-5 col-xs-15">
                                            <div className="form-group">
                                                <input className="form-control" type="text" placeholder="Position"/>
                                            </div>
                                        </div>
                                    <div className="col-lg-3 col-md-5 col-xs-12">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Job Title or Company Name"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-5 col-xs-12">
                                        <div className="form-group">
                                            <div className="search-category-container">
                                                <label className="styled-select">
                                                    <select>
                                                        <option value="none">Locations</option>
                                                        <option value="none">New York</option>
                                                        <option value="none">California</option>
                                                        <option value="none">Delhi</option>
                                                        <option value="none">Norway</option>
                                                        <option value="none">Chennai</option>
                                                        <option value="none">Mumbai</option>
                                                    </select>
                                                </label>
                                            </div>
                                            <i className="lni-map-marker"/>
                                        </div>
                                    </div>
                                        <div className="col-lg-1 col-md-1 col-xs-12">
                                            <button type="button" onClick={onSearch} className="button" style={{backgroundColor:'#00008B'}}><i className="lni-search"/></button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <section id="featured" className="section bg-cyan">
                <div className="container">
                    <div className="row">
 
                            <JobItem />
                            <JobItem />
                            <JobItem />
                            <JobItem />
                            <JobItem />
                            <JobItem />
                 
                    </div>
                </div>
            </section>
        </BaseLayout>
    );
};

export default JobsPage;
