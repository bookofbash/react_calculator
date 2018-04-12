import React from 'react'; // import react module
import Screen from './screen'; //Impirt our screen component from this directory
import Button from './Button'; //Import our button component from this directory

// create a class which extends react component
class Frame extends React.Component {
    constructor() {
        super();
        //set our default state
        this.state = {
            question: '',
            answer: ''
        }
        //Bind our handleClick method (sets 'this' explicitly to referto this component)
        // We did this because 'this' would refer to the source of the click events
        this.handleClick = this.handleClick.bind(this);
    }

    // Reneder function to create component to be renedered on the DOM
    // This method must return a single parent element-as you can see here.
    // The component is wrapped around () to make it a single expression.
    render() {
        return (
            <div className="row">
                <div className="frame col-xs-8 col-xs-offset-2">
                    <div className="calculator-title row">
                        R_N calculator
                    </div>
                    <Screen question = {this.state.question} answer={this.state.answer}/>
                    <div className="button-row">
                        <Button label={'1'} handleClick={this.handleClick} type='input' />
                        <Button label={'2'} handleClick={this.handleClick} type='input' />
                        <Button label={'3'} handleClick={this.handleClick} type='input' />
                        <Button label={'4'} handleClick={this.handleClick} type='input' />
                        <Button label={'-'} handleClick={this.handleClick} type='action' />
                        <Button label={'+'} handleClick={this.handleClick} type='action' />
                    </div>
                    <div className="button-row">
                        <Button label={'5'} handleClick={this.handleClick} type='input' />
                        <Button label={'6'} handleClick={this.handleClick} type='input' />
                        <Button label={'7'} handleClick={this.handleClick} type='input' />
                        <Button label={'8'} handleClick={this.handleClick} type='input' />
                        <Button label={'*'} handleClick={this.handleClick} type='action' />
                        <Button label={'/'} handleClick={this.handleClick} type='action' />
                    </div>
                    <div className="button-row">
                        <Button label={'9'} handleClick={this.handleClick} type='input' />
                        <Button label={'.'} handleClick={this.handleCLick} type='input' />
                        <Button label={'0'} handleClick={this.handleClick} type='input' />
                        <Button label={'Cls'} handleClick={this.handleClick} tyoe='action' />
                        <Button label={'='} handleClick={this.handleClick} type='action' />
                    </div>
                </div>
            </div>
        );
    }
// our method to handle all click evernt from our buttons
handleClick(event) {
    const value = event.target.value;// get the value from the target element (button)
    switch (value) {
        case '=': { //if it's an equal sign use the eval module to evaluate
            //converst the answer (in number) to String
            const answer = eval(this.state.question).toString();
            //update answer in our state
            this.setState({answer});
            break;
        }
        case 'Cls': {
            //if its the Cls sign, just clean out our question and anser in the state
            this.setState({ question: '', answer: ''});
            break;
        }
        default: {
            //for every other command, update the answer in the state
            this.setState({ question: this.stat.question += value})
            break;
            }
        }
    }
}
// export our frame component. To be used in our client/index.js file
export default Frame;