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
        this.props.requestSchoolsWithRatings(this.props.match.params.query);
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
        let numSchools = schools.length;
        if (numSchools === 0 || schoolRatings.length === 0) {
            return (
                <div className='page'>
                    <div className='no-search-results'>No school with <strong>"{this.props.match.params.query}"</strong> in its name.</div>
                    <div className='no-search-results-subtext'>Use the search bar above and check the spelling or try an alternate spelling.</div>
                    <div id='add-prof'>
                        <div>Don't see the school you're looking for?</div>
                        <Link to='/schools/new' id='add-prof-link'>Add a school</Link>
                    </div>
                </div>
            )
        }

        let groupedRatings = this.groupRatings(schoolRatings)

        return (
            <div className='page'>
                <div className='search-header'>{numSchools} schools with <strong>"{this.props.match.params.query}"</strong> in its name.</div>
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