import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import fire from "../../assets/img/fire.gif";

export default function CardDemo() {
    const fuelData = [
        { type: "Petrol", price: "₦670" },
        { type: "Diesel", price: "₦720" },
        { type: "Kerosine", price: "₦620" }
    ];
  
    // State variable to track current index
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % fuelData.length);
        }, 4000); // Change every 3 seconds
        return () => clearInterval(interval);
    }, [fuelData.length]);
  
    return (
        <div className="PriceCard"> 
            <Card
                sx={{
                    maxWidth: 600,
                    height: "30vh",
                    alignItems: "center",
                    display: "center",
                    paddingLeft: "20px",
                    background: "rgba(255, 255, 255, 0.1)", 
                    backdropFilter: "blur(2px)", 
                    borderRadius: "30px",
                    marginBottom: '50px',
                    marginTop: '-10px',
                    border: "2px solid rgba(5, 47, 16, 0.5)",
                }}
            >
                <CardContent sx={{ color: "white ", display: "flex", flexDirection: "column", borderRadius: "10px" }}>
                    <p variant="h4" gutterBottom>
                        CURRENT PRICE
                        <img src={fire} alt=""  height={30} width={30}/>
                    </p>
                    <Typography variant="h5" component="p" id={4}>
                        Fuel Type: <span style={{ marginLeft: "150px", fontWeight: "bold", fontSize: "1.2em", color:"white", padding:"5px",borderRadius: "5px", fontFamily: "inter" }}>{fuelData[currentIndex].type}</span>
                    </Typography>
                    <Typography variant="h5" component="p" id="product-price">
                        Fuel Price: <span style={{ marginLeft: "150px", fontWeight: "bold", fontSize: "1.5em", border: "10px",  }}>{fuelData[currentIndex].price}</span>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}
