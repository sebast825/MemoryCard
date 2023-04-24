import React, { useState } from "react";
import './button.scss';

function Button (props) {
   const {clas,setShowTab,view,text} = props;

   return(
      <>
         <a className={clas} onClick={() => { setShowTab(view) }}>{text}</a>

      </>
   )
}

export default Button;