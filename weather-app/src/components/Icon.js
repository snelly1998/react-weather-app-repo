import { Component } from "react";

class Icon extends Component{
    render(){
        var iconURL = `http://openweathermap.org/img/wn/${this.props.icon}@2x.png`
        return(
<div className="Icon">
<img src={iconURL} width="100"/>
</div>
        );}
}

export default Icon;