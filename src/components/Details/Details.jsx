import { clients } from "../constants";
import styles from "../../style";
import './Details.css'

const Details = () => (
  <section className= 'Clients mb-3'>
    <div className="container">
      <div className="row">
        <div className="col-12 mb-3">
          <h2 className="head-companies">Our Clients</h2>
          <p className="text-comp">Brands That Trusts Us</p>
        </div>

        <div className="col-12 text-center">
          <div className="row">
            {clients.map((client) => (
              <div className={client.col}>
                <img
                    src={client.logo}
                    alt="client"
                    className="logo-imgs"
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Details;
