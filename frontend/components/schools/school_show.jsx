import React from 'react';

class SchoolShow extends React.Component {
    constructor(props) {
        super(props);

        // this.clickSchool = this.clickSchool.bind(this);
    }

    // clickSchool(school) {
    //     let path = `/school/${school.id}`;
    //     return () => this.props.history.push(path);    
    // }

    render() {
        const {school} = this.props;

        return (
            <div className='school-show'>
                <div className='school-show-rating-summary'>
                    <div id='school-show-quality-label'>QUALITY</div>
                    <div id='school-show-quality'>3.4</div>
                    <div id='school-show-num-ratings'>113 Ratings</div>
                </div>
                <div className='school-show-name'>
                    {school.name}
                </div>
                <div className='school-show-location'>
                    {school.city}, {school.state}
                </div>
            </div>
        )
    }
}

export default SchoolShow