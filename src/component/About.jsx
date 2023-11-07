import React from "react";

export default function About(props) {
  return (
    <div>
      {console.log("property: ", props)}
      <h1>About</h1>
      <h1>i = {props.i} </h1>
      <h1>
        {" "}
        array=
        {props.arr1.map(function (ele, ind) {
          return (
            <h1>
              {ind} = {ele}
            </h1>
          );
        })}
      </h1>
     <h1>
     obj =
        {props.obj.name}
        <br></br>
        {props.obj.email}
     </h1>
    </div>
  );
}
