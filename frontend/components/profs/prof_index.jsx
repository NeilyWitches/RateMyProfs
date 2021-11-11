import React from 'react';
import { Link } from 'react-router-dom';
import ProfShow from './prof_show';

class ProfIndex extends React.Component {
    constructor(props) {
        super(props);

        this.clickProf = this.clickProf.bind(this);
    };

    componentDidMount() {
        this.props.requestProfs();
    };

    getAvgQual() {
        let profs = this.props.profs;
        let groupsOfProfReviews = profs.map(prof => prof.prof_reviews);
        let values = [];
        for (let i = 0; i < groupsOfProfReviews.length; i++) {
            if (groupsOfProfReviews[i] === undefined) {
                continue
            } else {
                values.push(Object.values(groupsOfProfReviews[i]))
            }
        };
        this.avgsQual = [];
        for (let i = 0; i < values.length; i++) {
            let sum = 0
            for (let j = 0; j < values[i].length; j++) {
                sum += values[i][j].quality
            }
            this.avgsQual.push(sum / values[i].length);
        }

    }

    getAvgDiff() {
        let profs = this.props.profs;
        let groupsOfProfReviews = profs.map(prof => prof.prof_reviews);
        let values = [];
        for (let i = 0; i < groupsOfProfReviews.length; i++) {
            if (groupsOfProfReviews[i] === undefined) {
                continue
            } else {
                values.push(Object.values(groupsOfProfReviews[i]))
            }
        };
        this.avgsDiff = [];
        for (let i = 0; i < values.length; i++) {
            let sum = 0
            for (let j = 0; j < values[i].length; j++) {
                sum += values[i][j].difficulty
            }
            this.avgsDiff.push(sum / values[i].length);
        }

    }

    getTakeAgainRatio() {
        let profs = this.props.profs;
        let groupsOfProfReviews = profs.map(prof => prof.prof_reviews);
        let values = [];
        for (let i = 0; i < groupsOfProfReviews.length; i++) {
            if (groupsOfProfReviews[i] === undefined) {
                continue
            } else {
                values.push(Object.values(groupsOfProfReviews[i]))
            }
        };
        this.takeAgainRatio = [];
        for (let i = 0; i < values.length; i++) {
            let count = 0
            for (let j = 0; j < values[i].length; j++) {
                if (values[i][j].take_again === true){
                    count++
                }
            }
            this.takeAgainRatio.push(count / values[i].length);
        }
    }

    checkRenderQual() {
        return (this.props.profs.length === 0 ? null : this.getAvgQual() )
    }

    checkRenderDifficulty() {
        return (this.props.profs.length === 0 ? null : this.getAvgDiff())
    }

    checkRenderTakeAgain() {
        return (this.props.profs.length === 0 ? null : this.getTakeAgainRatio())
    }

    clickProf(prof) {
        let path = `/profs/${prof.id}`;
        return () => this.props.history.push(path);
    }

    getNumOfRatings(prof) {
        return Object.values(prof.prof_reviews).length
    }

    render() {
        const { profs } = this.props;
        this.checkRenderQual();
        this.checkRenderDifficulty();
        this.checkRenderTakeAgain();
        const avgQuals = this.avgsQual;
        const avgDiffs = this.avgsDiff;
        const takeAgRats = this.takeAgainRatio;

        return (
            <div id='prof-index'>
                <h1 id='prof-index-header'>All profs</h1>
                <ul>
                    {
                        profs.map((prof, index) => 
                            <div id='prof-show-link' onClick={this.clickProf(prof)}>
                                <ProfShow 
                                key={prof.id} prof={prof} 
                                avgQual={avgQuals[index]} 
                                avgDiff={avgDiffs[index]} 
                                takeAgRat={takeAgRats[index]} 
                                numRatings={this.getNumOfRatings(prof)}/>
                            </div>
                        )
                    }
                </ul>
                <div>Don't see the prof you're looking for?</div>
                <Link to='/profs/new'>Add a prof</Link>
            </div>
        );
    };
}

export default ProfIndex;