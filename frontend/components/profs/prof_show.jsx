import React from 'react';
import  { Link } from 'react-router-dom';

class ProfShow extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const { prof } = this.props;
        return (
            <div className='prof-show'>
                <div className='prof-stats'>
                    <div className='avg-quality-label'>QUALITY</div>
                    <div className='avg-quality'>{this.props.avgQual.toFixed(1)}</div>
                    <div className='num-ratings'>{this.props.numRatings} ratings</div>
                </div>
                <div>
                    <div className='prof-show-name'>{prof.first_name} {prof.last_name}</div>
                    <div className='prof-show-subject'>{prof.subject}</div>
                    <div className='take-again-lvl-diff'>
                        <div className='prof-show-take-again'>{this.props.takeAgRat.toFixed(2) * 100}%</div>
                        <div className='prof-show-take-again-label'>would take again</div>
                        <div>|</div>
                        <div className='prof-show-avg-diff'>{this.props.avgDiff.toFixed(1)}</div>
                        <div className='prof-show-lvl-diff-label'>level of difficulty</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfShow