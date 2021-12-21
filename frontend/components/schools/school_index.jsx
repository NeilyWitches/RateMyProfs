import React from 'react';
import {Link} from 'react-router-dom'

class SchoolIndex extends React.Component {
    constructor(props) {
        super(props)

    }

    render() {
        return (
            <div className='page' id='add-prof'>
                    <div>Don't see the school you're looking for?</div>
                    <Link to='/schools/new' id='add-prof-link'>Add a school</Link>
            </div>
        )
    }
}

export default SchoolIndex