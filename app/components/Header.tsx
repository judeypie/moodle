// import React, { useState } from 'react'

import { WEBSITE_NAME } from "../constants";

export default function Header() {
  return (
    <>
      <header className="flex items-center justify-center ">
        <span className=""> @22413783</span>
        <h1 className= "font-bold text-3xl "> {WEBSITE_NAME} </h1>
        {/*Add menu in future*/}
      </header>
      
    </>
  );
}
