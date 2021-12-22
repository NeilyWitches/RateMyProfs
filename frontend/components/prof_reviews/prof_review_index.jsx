import React from 'react';
import ProfReviewShow from './prof_review_show';

class ProfReviewIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedKlass: 'All courses',
            profSave: this.props.profSave
        }

        this.tags = [
            'GIVES GOOD FEEDBACK', 'RESPECTED', 'LOTS OF HOMEWORK',
            'ACCESSIBLE OUTSIDE OF CLASS', 'GET READY TO READ',
            'PARTICIPATION MATTERS', "SKIP CLASS? YOU WON'T PASS.",
            "INSPIRATIONAL", "GRADED BY FEW THINGS", "TEST HEAVY",
            "GROUP PROJECTS", "CLEAR GRADING CRITERIA", "HILARIOUS",
            "BEWARE OF POP QUIZZES", "AMAZING LECTURES", "LECTURE HEAVY",
            "CARING", "EXTRA CREDIT", "SO MANY PAPERS", "TOUGH GRADER", 'TESTS ARE TOUGH'
        ]

        this.clickRateProf = this.clickRateProf.bind(this);
        this.clickSave = this.clickSave.bind(this);
        this.clickUnsave = this.clickUnsave.bind(this);
    };

    componentDidMount() {
        this.props.requestProf(this.props.match.params.profId)
        this.props.requestProfReviews(this.props.match.params.profId, this.props.currentUser?.id)
    };

    componentDidUpdate(prevProps) {
        if (prevProps.profSave !== this.props.profSave) {
            this.setState({profSave: this.props.profSave})
        }
        if (prevProps.currentUser !== this.props.currentUser) {
            this.props.requestProfReviews(this.props.match.params.profId, this.props.currentUser?.id)
        }
    }

    clickSave() {
        if (!this.props.currentUser) {
            let path = '/signup';
            this.props.history.push(path);
        }
        this.props.createProfSave({saver_id: this.props.currentUser.id, prof_saved_id: this.props.prof.id})
    }

    clickUnsave() {
        this.props.deleteProfSave(this.props.profSave.id)
    }

    groupLikes(profReviews, likes) {
        let groupedLikes = {}
        for (let i = 0; i < profReviews.length; i++) {
            if (!groupedLikes[profReviews[i].id]) {
                groupedLikes[profReviews[i].id] = []
            }
        }
        for (let i = 0; i < likes.length; i++) {
            groupedLikes[likes[i].review_id]?.push(likes[i])
        }

        return groupedLikes
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

    clickRateProf() {
        let path = `/profReviews/new/${this.props.prof.id}`
        this.props.history.push(path);
    }

    getTopTags(profReviews) {
        let tags_count = {};
        for (let i = 0; i < this.tags.length; i++) {
            tags_count[this.tags[i]] = 0
        };
        for (let i = 0; i < profReviews.length; i++) {
            if (this.tags.includes(profReviews[i].tag1)) {
                tags_count[profReviews[i].tag1] += 1
            }
            if (this.tags.includes(profReviews[i].tag2)) {
                tags_count[profReviews[i].tag2] += 1
            }
            if (this.tags.includes(profReviews[i].tag3)) {
                tags_count[profReviews[i].tag3] += 1
            }
        }
        let tagsCountArray = [];
        tagsCountArray.push(Object.keys(tags_count), Object.values(tags_count))
        let tagsCountTranspose = [];
        for (let i = 0; i < tagsCountArray[0].length; i++) {
            tagsCountTranspose.push([tagsCountArray[0][i], tagsCountArray[1][i]])
        }
        let topTags = [];
        let sortedCounts = Object.values(tags_count).sort().reverse();
        for (let i = 0; i < sortedCounts.length; i++) {
            for (let j = 0; j < tagsCountTranspose.length; j++) {
                if (tagsCountTranspose[j][1] === sortedCounts[i] && topTags.length < 5 && sortedCounts[i] && !topTags.includes(tagsCountTranspose[j][0])) {
                    topTags.push(tagsCountTranspose[j][0])
                } 
            }
        }
        return topTags;
    }

    update(field) {
        if (field === 'selectedKlass') {
            return e => {
                return this.setState({
                    [field]: e.currentTarget.value,
                })
            }
        }
    }

    getKlasses(profReviews) {
        let klasses = ['All courses'];

        for (let i = 0; i < profReviews.length; i++) {
            if (!klasses.includes(profReviews[i].klass)) {
                klasses.push(profReviews[i].klass)
            }
        }

        return klasses;
    }

    filterProfReviews(profReviews) {
        let filteredProfReviews = [];
        if (this.state.selectedKlass === "All courses") {
            return profReviews
        }
        for (let i = 0; i < profReviews.length; i++) {
            if (profReviews[i].klass === this.state.selectedKlass) {
                filteredProfReviews.push(profReviews[i])
            }
        }
        return filteredProfReviews
    }

    render() {
        const { prof, profReviews, likes, currentUser, createLike, deleteLike, history } = this.props;
        if (!prof) return null
        const numReviews = profReviews.length;
        let groupedLikes = this.groupLikes(profReviews, likes)
        const stats = this.getStats(profReviews, numReviews);
        const topTags = this.getTopTags(profReviews);
        const klasses = this.getKlasses(profReviews);
        const filteredProfReviews = this.filterProfReviews(profReviews)

        return (
            <div id='prof-review-index'>
                <div id='prof-review-index-prof-show'>
                    <div id='prof-show-quality-name'>
                        <div id='prof-show-avg-qual'>
                            <div id='prof-show-avg-qual-nums'>
                                <div id='prof-show-avg-qual-proper'>{ numReviews === 0 ? "N/A" : stats[0]?.toFixed(1) }</div>
                                <div id='out-of-5'> / 5.0</div>
                            </div>
                            <div id='qual-based-on'>Overall Quality Based on {numReviews} Ratings</div>
                        </div>
                        <div id='prof-review-index-prof-show-name'>
                            <div id='prof-review-index-prof-name'>
                                {prof.first_name} {prof.last_name} &nbsp;
                                { this.state.profSave ?
                                <div className='icon-hint'>
                                    <i className="fas fa-bookmark icon-with-hint" id='saved' onClick={this.clickUnsave}></i>
                                    <div className='hint'>Unsave Prof</div>
                                </div> :
                                <div className='icon-hint'>
                                    <i className="far fa-bookmark icon-with-hint" id='unsaved' onClick={this.clickSave}></i>
                                    <div className='hint'>Save Prof</div>
                                </div> }
                            </div>
                            <div id='prof-in-dept'>Prof in the <strong>{prof.subject}</strong> Department</div>
                        </div>
                    </div>
                    <div id='prof-show-other-stats'>
                        <div className='prof-show-other-stats' id='prof-review-index-prof-show-take-again'>
                            <div className='prof-review-index-prof-show-take-again-ratio'>{isNaN(stats[2]) ? "N/A" : `${stats[2]?.toFixed(2) * 100}%`}</div>
                            <div>Would take again</div>
                        </div>
                        <div className='prof-show-other-stats' id='prof-review-index-prof-show-difficulty'>
                            <div className='prof-review-index-prof-show-take-again-ratio'>{numReviews === 0 ? "N/A" : stats[1]?.toFixed(1)}</div>
                            <div>Level of Difficulty</div>
                        </div>
                    </div>
                    <button id='review-prof-button' onClick={this.clickRateProf}>Rate Prof {prof.first_name}</button>
                    <div id='top-tags-label'>Prof {prof.first_name}'s Top Tags</div>
                    <div id='top-tags'>
                        {
                            topTags.map((tag, index) => <div key={index} className='tag'>{tag}</div>)
                        }
                    </div>
                </div>
                <div id='prof-review-index-ratings-dropdown'>
                    <div id='prof-review-index-label'>{numReviews} Student Ratings</div>
                    <select id='courses-dropdown' name='klasses' onChange={this.update('selectedKlass')} defaultValue={'All courses'}>
                        {
                            klasses.map((klass, index) =>
                                <option
                                    key={index}
                                    value={klass}>
                                    {klass}
                                </option>)
                        }
                    </select>
                </div>
                <ul>
                    {
                        filteredProfReviews.map((profReview, index) => 
                        <ProfReviewShow 
                        key={index} 
                        profReview={profReview} 
                        createLike={createLike}
                        deleteLike={deleteLike}
                        currentUser={currentUser}
                        prof={prof}
                        showLikes={true}
                        history={history}
                        likes={groupedLikes[profReview.id]}/>)
                    }
                </ul>
            </div>
        );
    };
};

export default ProfReviewIndex;