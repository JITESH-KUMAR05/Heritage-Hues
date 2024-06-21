import React from "react";
import HussainSagarImage from "./HussainSagar.jpg";
import GolcondaImg from "./Golconda.jpg";
import Birla from "./Birla.jpg";
import SalarJung from "./Salar_jung.jpg";

function Destinations() {
    return (
        <div className="w-full h-full ">
            <div className="content">
                <br />
                <h1><b>Popular Destinations</b></h1>
                <br />
            </div>
            <div className="cards w-full  flex gap-4 justify-center mt-3 mb-3">
                <div className="card  w-[20%] ">
                    <img src={HussainSagarImage} className="w-[20rem] bg-white h-[20rem] shadow-2xl rounded-lg  " alt="Hussain Sagar" />
                    <h3>Hussain Sagar</h3>
                </div>
                <div className="card w-[20%] ">
                    <img src={GolcondaImg} className="w-[20rem] bg-white h-[20rem] shadow-2xl rounded-lg" />
                    <h3>Golconda Fort</h3>
                </div>
                <div className="card w-[20%] ">
                    <img src={SalarJung} className="w-[20rem] bg-white h-[20rem] shadow-2xl rounded-lg" />
                    <h3>Salar jung museum</h3>
                </div>
                <div className="card w-[20%] ">
                    <img src={Birla} className="w-[20rem] bg-white h-[20rem] shadow-2xl rounded-lg " alt="Hussain Sagar" />
                    <h3>Birla mandir</h3>
                </div>
            </div>
        </div>
    );
}

export default Destinations;