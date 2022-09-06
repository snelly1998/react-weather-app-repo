const Week = (props) => {
    console.log(props);
    var sundayStyle, mondayStyle, tuesdayStyle, wednesdayStyle, thursdayStyle, fridayStyle, saturdayStyle = {fontSize:"1rem"};
    if (props.weekday === 0){
        sundayStyle={fontSize:"1.5rem"};
    } else if (props.weekday === 1){
        mondayStyle={fontSize:"1.5rem"};
    } else if (props.weekday === 2){
        tuesdayStyle={fontSize:"1.5rem"};
    } else if (props.weekday === 3){
        wednesdayStyle={fontSize:"1.5rem"};
    } else if (props.weekday === 4){
        thursdayStyle={fontSize:'1.5rem'};
    } else if (props.weekday === 5){
        fridayStyle={fontSize:'1.5rem'};
    } else if (props.weekday === 6){
        saturdayStyle={fontSize:'1.5rem'}
    }
    return(
<div className="Props flex-row">
    <div>
<p style={sundayStyle}>Sun</p>
    </div>
    <div>
<p style={mondayStyle}>Mon</p>
    </div>
    <div>
<p style={tuesdayStyle}>Tue</p>
    </div>
    <div>
        <p style={wednesdayStyle}>Wed</p>
    </div>
    <div>
        <p style={thursdayStyle}>Thur</p>
    </div>
    <div>
        <p style={fridayStyle}>Fri</p>
    </div>
    <div>
        <p style={saturdayStyle}>Sat</p>
    </div>
</div>);
}

export default Week;