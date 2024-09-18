import React from 'react';
import './homepagestyle.css';
import { InputField } from "./inputfield";
//import { Box } from "./gradient";

export const HomePage = () => {
    return (
       
        <div className="home-page">
            <div className ="frame">
                <div className="box">
                    <div className="background-gradient" />
                    <div className="overlap">
                        <div className="heading-text">
                            <div className="overlap-group">
                                <div className="welcome-text">
                                    <div className="div">
                                        <p className="welcome-to-sabine">
                                            <span className="span">Welcome to</span>
                                            <span className="text-wrapper-2">&nbsp;</span>
                                            <span className="text-wrapper-3">Sabine</span>
                                        </p>
                                        <div className="text-wrapper-4">Sabine</div>
                                    </div>
                                </div>
                                <p className="your-VALORANT-AI">
                                    <span className="text-wrapper-5">Your </span>
                                    <span className="text-wrapper-6">VALORANT</span>
                                    <span className="text-wrapper-5"> AI assistant</span>
                                </p>
                            </div>
                        </div>
                        <div className = "input-field-container">
                            <InputField className="input-field-instance" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;