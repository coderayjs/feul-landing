import { React } from "react";
import "./entails.css";
import { stats } from "../constants/index";

import { features } from '../constants/index'

const Entails = ({Entails}) => {
  return (
    <section className="Entails">
    <div className="container">
      <div className="row">
        <div className="col d-flex text-center">
          {stats.map((stats) => (
            <div key={stats.id} className="stat-item"> {/* Add a class for styling */}
              <img
                src={stats.icon}
                alt="client"
                className="logo-imgs" width={40}
              />
              <div className="stat-details"> 
                <h5 className="stat-title">{stats.title}</h5> 
                <p className="stat-value">{stats.value}</p> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  );
};

export default Entails;
