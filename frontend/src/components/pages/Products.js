import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import "../../App.css";
import { get_places } from "restapi/places";

export default function Products() {
  // const [object, setObject] = useState([
  //   {
  //     placeid: "",
  //     name: "",
  //     employees: "",
  //     numberofhuman: "",
  //   },
  // ]);

  // get_places().then((res)=>{
  //   for(let i = 0;i < res.data.length; i++) {

  //   }
  // })

  // await 를 사용하기 위해 async선언
  return (
    <div>
      <h1 className="products">PRODUCTS</h1>
    </div>
  );
}
