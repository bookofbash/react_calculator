import React from 'react'; //import react module
import ScreenRow from './screenRow';
import PropTypes from 'prop-types'; // import PropTypes module

//Create our screen component as a functional component
//It would dsplay two screen rows, q for questions and the other for answers
//The value would be passed down from it's parent component as a prop
const Screen = (props) => {
    return (
        <div className="screen">
            <ScreenRow value={props.question}/>
            <ScreenRow value={props.answer}/>
        </div>
    );
}

//Define our props expected from parent components
Screen.propTypes = {
    question: React.PropTypes.string.isRequired,
    answer: React.PropTypes.string.isRequired
}

// export our component
export default Screen;