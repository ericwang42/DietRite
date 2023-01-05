import { useEffect, useState } from "react";

function Calculator() {
    const [height, setHeight]=useState(0);
    const [weight, setWeight]=useState(0);
    const [age, setAge]=useState(0);
    const [gender, setGender]=useState(false);
    const [cal, setCal]=useState(0);

    function setHeightOn(e){
        console.log(e.target);
        setHeight(e.target.value);
    }

    function setWeightOn(e){
        setWeight(e.target.value);
    }

    function setAgeOn(e){
        setAge(e.target.value);
    }

    function setGenderOn(e){
        setGender(e.target.value);
    }

    useEffect(() =>
    {
        if(height!==0)
        {
            if (gender) {
                setCal(10*weight+6.25*height-5*age-(-5));
            } else {
                setCal(10*weight+6.25*height-5*age-(161));
            }
        } else {}
        if (cal > 1000) {
        }
        else {

        }
        
    });
    return (
        <div className="calculatorclass">
            <h1>Calorie Calculator</h1>
            Height <br/><input onChange={setHeightOn}></input><br/>
            Weight <br/><input onChange={setWeightOn}></input><br/>
            Age <br/><input onChange={setAgeOn}></input><br/>
            Male <br/><input type ="checkbox" onChange={setGenderOn}></input><br/>
            <h1>Daily Maintenance Calories: {cal}</h1>
        </div>
    );
}
export default Calculator;