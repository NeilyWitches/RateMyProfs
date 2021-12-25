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
        this.props.requestSchoolRatings();
    };

    groupRatings(schoolRatings) {
        let groupedRatings = {};
        for (let i = 0; i < schoolRatings.length; i++) {
            if (!groupedRatings[schoolRatings[i].school_id]) {
                groupedRatings[schoolRatings[i].school_id] = []
            }
            groupedRatings[schoolRatings[i].school_id].push(schoolRatings[i])
        }
        return groupedRatings
    }

    render() {
        const { schools, history, schoolRatings } = this.props;
        if (schools.length === 0 || schoolRatings.length === 0) return null

        let groupedRatings = this.groupRatings(schoolRatings)

        return (
            <div className='page'>
                <h1 id='prof-index-header'>All Schools</h1>
                <ul>
                    {
                        schools.map((school) =>
                            <SchoolShow
                            key={school.id}
                            school={school}
                            history={history}
                            schoolRatings={groupedRatings[school.id]}/>
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