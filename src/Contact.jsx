import React, { useState } from "react";

const Contact = () => {

    const [data, setData] = useState( { 
        fullname: "",
        phone: "",
        email: "",
        msg: "",
     } );

    const InputEvent = (event) => {
        // user jo bhi likhega usko ham target kar sakte hai inputevent me 
        const { name, value } = event.target;

        // set data me usestate me jo bhi data hai ham usko access kar skate hai 
        setData( (preVal) => { 
            return { ...preVal, [name]: value, }
         } )

    }

    const formSubmit = (e) => {
         e.preventDefault(); // is method se onsubmit par page apne aap refresh nhi hoga baar baar

        alert(`my name is ${data.fullname}. my mobile number is ${data.phone} and my email ${data.email}, here what is i want to say ${data.msg} `) 

    }

    return ( <> 
    
    <div className="my-5">
        <h1 className="text-center"> Contact Us </h1>
    </div>
    
    <div className="container contact_div">  
      <div className="row"> 
         <div className="col-md-6 col-10 mx-auto">

            <form onSubmit={formSubmit}>
              <div class="mb-1">

               <label for="exampleFormControlInput1" class="form-label"> Full Name</label>       
               <input 
               name="fullname" 
               value={data.fullname} 
               onChange={InputEvent} 
               type="text" class="form-control" id="exampleFormControlInput1" placeholder="enter your full name" />

                        <br/>

               <label for="exampleFormControlInput1" class="form-label"> Phone No. </label>
               <input 
               name="phone" 
               value={data.phone} 
               onChange={InputEvent} 
               type="number" class="form-control" id="exampleFormControlInput1" placeholder="enter your mobile number" />

                        <br />

               <label for="exampleFormControlInput1" class="form-label"> Email id </label>
               <input 
               name="email" 
               value={data.email} 
               onChange={InputEvent} type="email" class="form-control" id="exampleFormControlInput1" placeholder="enter your email@gmail.com" />

                        <br />

                </div>

                <div class="mb-3">

                <label for="exampleFormControlTextarea1" class="form-label"> Massage </label>
                <textarea 
                name="msg" 
                value={data.msg} 
                onChange={InputEvent} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>

                        <br />

                <div class="col-12">
                    <button class="btn btn-outline-primary" type="submit">Submit form</button>
                </div>


              </div>
            </form>

         </div>
      </div> 
    </div>

     </> )
}

export default Contact;