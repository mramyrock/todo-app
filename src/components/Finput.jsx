import React, { useState } from 'react'
import './finput.css'
import Photo from '../TodoReact/Images.js/photo.jpg'
import Test1 from './Test1'
import Test2 from './Test2'
import New from './New'

const Finput = () => {
    const [inputdata, setInputData] = useState("");
    // const [btndata, setBtnData] = useState("");
    // cosnt submit =(e)=>{

    // }
    var age=9;
    var  drive;
    if(age>=18){
        drive=("Yes Drive")
    }else{
        drive=("No Drive apply Next Time")
    }
    console.log(drive);


    var old = 39;
    var election = old>=35? "yes pm" : "no Pm"
    console.log(election)
    
    // const name = "one";
    // if (name === "one"){
    //     return <Test1/>
    // }else{
    //     return <Test2/>
    // }


    // const name = "on";
    // let data;
    // if (name === "one"){
    //     data = <Test1/>
    // }else{
    //     data = <Test2/>
    // }


    const name = "am";
    const agee = 20;
    


    return (
        <>
            <div className='container'>
            {/* {data} */}
            {
            (name === "amy" )? <Test1/> : <Test2/> 
                 /* (name === "amy") && <h1>Helo amy</h1>  */
            }

            {
            agee >= 18 ? <Test1/> : <Test2/> 
            }
                <div className='main-div'>
                    <figure >
                        <img src={Photo} alt="Error imgsrc" />
                        <figcaption>Add Your List Here {inputdata}</figcaption>
                    </figure>
                    <div>
                        <input
                            type="text"
                            placeholder='✍ Add item'
                            onChange={(event) => setInputData(event.target.value)}
                            value={inputdata}
                        />
                        {/* <button onClick={submit}>➕</button> */}
                    </div>

                </div>
            </div>

        </>
    )
}

export default Finput;
