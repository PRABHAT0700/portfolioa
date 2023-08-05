import React from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Service = () => {
    return (<>

        <div className="my-3"> <br />
            <h1 className="text-center"> Our Service's </h1>
        </div>

        <br />

            { Sdata.map( (val, ind) => {
 
                    return <Card 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    />

                    } )
            }
        
{/* 
        <div className="container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">

                    <div className="row gy-4">
                      <div className="col-md-4 col-10 mx-auto">

                      

                     </div>
                    </div>

                </div>
            </div>
        </div> */}

    </>)
}

export default Service;