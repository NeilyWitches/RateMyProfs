import React from "react";

class DemoLoginButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: 'demouser@demo.com',
            first_name: 'Demo User',
            last_name: 'Demo User',
            password: 'cupcake',
        };

        this.clickDemo = this.clickDemo.bind(this);

    }

    clickDemo(e) {
        e.preventDefault();
        this.props.login(this.state)
        .then(() => this.props.history.push('/'));
    };

    render() {
        return (
            <button onClick={this.clickDemo}>Demo Login</button>
        )
    };
};

export default DemoLoginButton;