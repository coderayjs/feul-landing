import { React } from "react";
import { features } from '../constants/index'
import "./features.css";

const Features = ({Features}) => {
  return (
    <section className="Features mb-2 mt-3">
      <div className="container-fluid p-0">

        <div className="row md-3">
          {features.map((feature, index) => (
            index === 0 && (
              <div className="col-md-6 text-center p-0">
                <div className={`card h-100 feature-item ${feature.id}`} key={feature.id}>
                  <div className="card-body">
                    <h2 className="card-title">{feature.title}</h2>
                    <p className="card-text">{feature.content}</p>
                  </div>
                </div>
              </div>
            )
          ))}

          <div className="col-md-6 text-center p-0">
            {features.map((feature, index) => (
              (index > 0 && index < features.length - 1) && (
                  <div className={`card feature-item ${feature.id}`} key={feature.id}>
                    <div className="card-body">
                      <h2 className="card-title">{feature.title}</h2>
                      <p className="card-text">{feature.content}</p>
                    </div>
                  </div>
              )
          ))}
          </div>

          {features.map((feature, index) => (
            index === features.length - 1 && (
              <div className="col-md-12 text-center p-0">
                <div className={`card feature-item ${feature.id}`} key={feature.id}>
                  <div className="card-body">
                    <h2 className="card-title">{feature.title}</h2>
                    <p className="card-text">{feature.content}</p>
                  </div>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;