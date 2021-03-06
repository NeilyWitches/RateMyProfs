import React from 'react';

class ProfShow extends React.Component {
    constructor(props) {
        super(props);

        this.clickProf = this.clickProf.bind(this);
        this.state = {
            profSave: this.props.profSave
        }

        this.clickSave = this.clickSave.bind(this);
        this.clickUnsave = this.clickUnsave.bind(this);
    };

    styleQuality(qual) {
        if (qual < 3) {
            return 'rgb(255, 156, 156)'
        } else if (qual >= 4) {
            return '#68ffbe'
        } else {
            return 'rgb(255, 254, 104)'
        }
    }

    getStats(profReviews, numReviews) {
        let sumQual = 0;
        let sumDiff = 0;
        let numWouldTakeAgain = 0;
        let numWouldNotTakeAgain = 0;
        for (let i = 0; i < numReviews; i++) {
            sumQual += profReviews[i].quality;
            sumDiff += profReviews[i].difficulty;
            if (profReviews[i].take_again === true) {
                numWouldTakeAgain ++
            } else if (profReviews[i].take_again === false) {
                numWouldNotTakeAgain ++
            }
        }
        let stats = [sumQual, sumDiff].map(num => num / numReviews)
        stats.push(numWouldTakeAgain / (numWouldTakeAgain + numWouldNotTakeAgain));
        return stats;
    }

    clickProf(prof) {
        let path = `/profs/${prof.id}`;
        return () => this.props.history.push(path);
    }

    clickSave(event) {
        event.cancelBubble = true;
        if(event.stopPropagation) event.stopPropagation();
        if (!this.props.currentUser) {
            let path = '/signup';
            this.props.history.push(path);
        }
        this.props.createProfSave({saver_id: this.props.currentUser.id, prof_saved_id: this.props.prof.id})
    }

    clickUnsave(event) {
        event.cancelBubble = true;
        if(event.stopPropagation) event.stopPropagation();
        this.props.deleteProfSave(this.props.profSave.id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.profSave !== this.props.profSave) {
            this.setState({profSave: this.props.profSave})
        }
    }

    render() {
        const {prof, profReviews, school} = this.props;
        let numReviews = profReviews.length;
        const stats = this.getStats(profReviews, numReviews)

        return (
            <div className='prof-show' onClick={this.clickProf(prof)}>
                <div className='prof-stats'>
                    <div className='avg-quality-label'>QUALITY</div>
                    <div className='avg-quality' style={{backgroundColor: this.styleQuality(stats[0])}}>{numReviews === 0 ? "N/A" : stats[0]?.toFixed(1)}</div>
                    <div className='num-ratings'>{numReviews} ratings</div>
                </div>
                <div>
                    <div className='prof-show-name-bookmark'>
                        <div className='prof-show-name'>{prof.first_name} {prof.last_name}</div>
                        { this.state.profSave ?
                        <div className='icon-hint'>
                            <i className="fas fa-bookmark icon-with-hint prof-show-bookmark" id='saved' onClick={this.clickUnsave}></i>
                            <div className='hint'>Unsave Prof</div>
                        </div> :
                        <div className='icon-hint'>
                            <i className="far fa-bookmark icon-with-hint prof-show-bookmark" id='unsaved' onClick={this.clickSave}></i>
                            <div className='hint'>Save Prof</div>
                        </div> }
                    </div>
                    <div className='prof-show-subject'>{prof.subject}</div>
                    <div className='prof-show-school'>{school?.name}</div>
                    <div className='take-again-lvl-diff'>
                        <div className='prof-show-take-again'>{isNaN(stats[2]) ? "N/A" : `${stats[2]?.toFixed(2) * 100}%`}</div>
                        <div className='prof-show-take-again-label'>would take again</div>
                        <div>|</div>
                        <div className='prof-show-avg-diff'>{numReviews === 0 ? "N/A" : stats[1]?.toFixed(1)}</div>
                        <div className='prof-show-lvl-diff-label'>level of difficulty</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfShow