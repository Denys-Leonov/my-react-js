import React from "react";
import cl from "./MyButton.module.css"

const MyButton = ({children, ...props}) => {

    return(
        <button {...props} className={[cl.myBtn, props.create ? cl.myBtn__create : ''].join(' ')}>
             {children}
        </button>
    )
}
export default MyButton
