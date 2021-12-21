import React from 'react';
import {Link} from 'react-router-dom';
import SchoolShow from './school_show';

class SchoolIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    update(field) {
        return e => {
            return this.setState({
                [field]: e.currentTarget.value,
            })
        }
    }

    componentDidMount() {
        this.props.requestSchools();
    };



    render() {
        const { schools, history } = this.props;
        if (schools.length === 0) return null

        return (
            <div className='page'>
                <h1 id='prof-index-header'>All Schools</h1>
                <ul>
                    {
                        schools.map((school) =>
                            <SchoolShow
                            key={school.id}
                            school={school}
                            history={history}/>
                        )
                    }
                </ul>
                <div id='add-prof'>
                    <div>Don't see the school you're looking for?</div>
                    <Link to='/schools/new' id='add-prof-link'>Add a school</Link>
                </div>
            </div>
        )
    }
}

export default SchoolIndex