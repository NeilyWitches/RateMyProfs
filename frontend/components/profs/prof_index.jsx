import React from 'react';
import { Link } from 'react-router-dom';
import ProfShow from './prof_show';

class ProfIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.requestProfs();
    };

    render() {
        const { profs } = this.props;

        return (
            <div id='prof-index'>
                <h1>Prof Index:</h1>
                <ul>
                    {
                        profs.map(prof => <ProfShow key={prof.id} prof={prof}/>)
                    }
                </ul>
                <div>Don't see the prof you're looking for?</div>
                <Link to='/profs/new'>Add a prof</Link>
            </div>
        );
    };
}

export default ProfIndex;