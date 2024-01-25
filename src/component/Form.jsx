import React from "react";

class Form extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
        }

        this.onEmailChangeHandler = this.onEmailChangeHandler.bind(this);
    }

    onEmailChangeHandler(event) {
        this.setState(() => {
            return {
                email: event.target.value,
            };
        });
    }

    render() {
        return (
            <div className="form">
                <input type="email" name="email" id="email" 
                    value={ this.state.email } onChange={ this.onEmailChangeHandler } />
            </div>
        );
    }
}

export default Form;