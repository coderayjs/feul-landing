import React from "react";
import './Download.css';
import phoneD from '../../assets/img/phoneD.svg';
import apple from '../../assets/img/ios.svg';
import google from '../../assets/img/android.svg'

const Download = () => {
    return (
        <section className="Download">
            <div className="download-app position-relative">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="download-text p-4 text-white">
                                <h3 className="get-text">Get the App</h3>
                                <p>Download the GoFuel app and order fuel from the comfort of your home.</p>
                                <div className="row"/>
                                    <div className="col-md-4">
                                        <img className="rounded float-left " src={apple} alt=""/>
                                    </div>
                                    <div className="col-md-4">
                                       <img className="google-float-right" src={google} alt="" />
                                    </div>
                                
                                <div className="col-md-4">
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4"></div>
                        <div className="col-md-4">
                           <img src={phoneD} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Download;