import { Component } from "react";

const Icon = (props) => {
  
        var iconURL = `http://openweathermap.org/img/wn/${props.icon}@2x.png`
        return(
<div className="Icon">
<img src={iconURL} width="100"/>
<p>{props.text}</p>
</div>
        );
}

export default Icon;