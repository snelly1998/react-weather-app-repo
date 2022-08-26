import weatherImg from '../imgs/weatherArrow2.png'

const Wind = (props) => {
    const weatherIcon = {
        transform: 'rotate(' + props.wind.deg + 'deg)',
        width:'50px',
      };
return(
<div className='Wind'>
<div className="wind-wrapper">
    <p className='wind-speed'>Wind Speed: {props.wind.speed} m/s </p>
    <div className='wind-container grid-container half'>
   
      <div></div>
      <div><p>N</p></div><div></div>
    <div><p>W</p></div>
    <img alt="Wind Direction" src={weatherImg} style={weatherIcon}/>
    <div><p>E</p></div>
    <div></div><div><p>S</p></div>
    </div>
    </div>
</div>
);
}

export default Wind;