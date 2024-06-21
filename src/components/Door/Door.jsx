import React from "react";
import "./Door.css";

const Door = () => {
  return (
    <section className="Door">
      <div className="container-fluid door">
        <div
          style={{
            color: "#02621D",
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: 600,
            textAlign: "center",
            backgroundColor: "#FFFFFFD6",
            height: "100px",
            display: "center",
          }}
        >
          <div>
            <h1>GoFuel - Nigeria leading Door to Door Fuel Delivery Service</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Door;
