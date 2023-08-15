import React from "react";
import classes from "./CssModules.module.scss";

export const CssModules: React.FC = () => {
    return(
        <div className={classes.container}>
            <p className={classes.title}>CSSモジュール</p>
            <button className={classes.button}>OK</button>
        </div>
    );
};

export default CssModules;