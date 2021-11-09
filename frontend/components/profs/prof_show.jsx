import React from 'react';
import  { Link } from 'react-router-dom';

class ProfShow extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { prof } = this.props;
        return (
            <div>
                First Name:
                {prof.first_name}
                Last Name:
                {prof.last_name}
                Subject:
                {prof.subject}
                <Link to={`/profs/${prof.id}`}>{prof.first_name}'s Reviews</Link>
                Quality:
                {this.props.avgQual}
            </div>
        )
    }
}

export default ProfShow