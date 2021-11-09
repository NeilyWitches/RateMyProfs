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

    getAvgQual() {
        // console.log(Object.values(this.props.profs[0].prof_reviews)[0].quality);
        let profs = this.props.profs;
        let groupsOfProfReviews = profs.map(prof => prof.prof_reviews);
        let values = groupsOfProfReviews.map(group => Object.values(group));
        this.avgsQual = [];
        for (let i = 0; i < values.length; i++) {
            let sum = 0
            for (let j = 0; j < values[i].length; j++) {
                sum += values[i][j].quality
            }
            this.avgsQual.push(sum / values[i].length);
        }

    }

    getAvgDifficulty() {
        let profs = this.props.profs;
        let groupsOfProfReviews = profs.map(prof => prof.prof_reviews);
        let values = groupsOfProfReviews.map(group => Object.values(group));
        this.avgsDiff = [];
        for (let i = 0; i < values.length; i++) {
            let sum = 0
            for (let j = 0; j < values[i].length; j++) {
                sum += values[i][j].difficulty
            }
            this.avgsDiff.push(sum / values[i].length);
        }
    }

    checkRenderQual() {
        return (this.props.profs.length === 0 ? null : this.getAvgQual() )
    }

    checkRenderDifficulty() {
        return (this.props.profs.length === 0 ? null : this.getAvgDifficulty())
    }

    render() {
        const { profs } = this.props;
        this.checkRenderQual();
        this.checkRenderDifficulty();
        const avgQuals = this.avgsQual;
        const avgDiffs = this.avgsDiff;

        return (
            <div id='prof-index'>
                <h1>Prof Index:</h1>
                <ul>
                    {
                        profs.map((prof, index) => <ProfShow key={prof.id} prof={prof} avgQual={avgQuals[index]} avgDiff={avgDiffs[index]} />)
                    }
                </ul>
                <div>Don't see the prof you're looking for?</div>
                <Link to='/profs/new'>Add a prof</Link>
            </div>
        );
    };
}

export default ProfIndex;