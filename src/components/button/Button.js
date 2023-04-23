import React, { useState } from "react";
import './button.scss';

function Button (props) {
   const {clas,setShowTab,view,text} = props;
   const [newView, setNewView] = useState(view)
   return(
      <>
         <a className={clas} onClick={() => { setShowTab(newView) }}>{text}</a>

      </>
   )
}

export default Button;