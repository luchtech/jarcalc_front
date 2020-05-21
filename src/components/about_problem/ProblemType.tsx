import React from "react";
import { MDBSelect, MDBSelectInput, MDBSelectOptions, MDBSelectOption } from "mdbreact";

export default function ProblemType() {
  const onChange = (event:any) => {
      console.log("im invoked...")
      console.log(event)
  }
  
  return (
    <div>
      <MDBSelect onChange={()=> onChange} color="primary" label="Example label" outline>
          <MDBSelectInput onChange={()=> onChange} className="text-center" selected="Choose your option" />
          <MDBSelectOptions onChange={()=> onChange}>
            <MDBSelectOption disabled>Choose your option</MDBSelectOption>
            <MDBSelectOption value="1" selected>Maximize</MDBSelectOption>
            <MDBSelectOption value="2">Minimize</MDBSelectOption>
          </MDBSelectOptions>
        </MDBSelect>
    </div>
  );
}
