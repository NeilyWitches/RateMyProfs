import React from 'react';
import { Link } from 'react-router-dom';
import ProfShow from './prof_show';

class ProfIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedSubject: 'Select...'
        }
    };

    getSubjects(profs) {
        let subjects = ['Select...'];

        for (let i = 0; i < profs.length; i++) {
            if (!subjects.includes(profs[i].subject)) {
                subjects.push(profs[i].subject)
            }
        }

        return subjects;
    }

    filterProfs(profs) {
        let filteredProfs = [];
        if (this.state.selectedSubject === "Select...") {
            return profs
        }
        for (let i = 0; i < profs.length; i++) {
            if (profs[i].subject === this.state.selectedSubject) {
                filteredProfs.push(profs[i])
            }
        }
        return filteredProfs
    }

    update(field) {
        if (field === 'selectedSubject') {
            return e => {
                return this.setState({
                    [field]: e.currentTarget.value,
                })
            }
        }
    }

    componentDidMount() {
        this.props.requestProfs(this.props.match.params.schoolName, this.props.match.params.query);
        this.props.requestProfSaves(this.props.currentUser?.id)
    };

    componentDidUpdate(prevProps) {
        console.log(prevProps)
        if (prevProps.currentUser !== this.props.currentUser) {
            this.props.requestProfSaves(this.props.currentUser?.id)
        }

        if (prevProps.match.params.query != this.props.match.params.query) {
            this.props.requestProfs(this.props.match.params.schoolName, this.props.match.params.query);
            this.props.requestProfSaves(this.props.currentUser?.id)            
            this.forceUpdate();
        }

    }

    groupReviews(profs, profReviews) {
        let groupedReviews = {}
        for (let i = 0; i < profs.length; i++) {
            if (!groupedReviews[profs[i].id]) {
                groupedReviews[profs[i].id] = []
            }
        }
        for (let i = 0; i < profReviews.length; i++) {
            groupedReviews[profReviews[i].prof_id]?.push(profReviews[i])
        }
        return groupedReviews
    }

    groupProfSaves(profs, profSaves) {
        let groupedSaves = {}
        for (let i = 0; i < profs.length; i++) {
            for (let j = 0; j < profSaves.length; j++) {
                    if (profSaves[j]?.prof_saved_id === profs[i]?.id) {
                        groupedSaves[profs[i]?.id] = profSaves[j]
                    }
            }
        }
        return groupedSaves
    }

    render() {
        const { profs, profReviews, history, profSaves, createProfSave, deleteProfSave, currentUser, schools } = this.props;

        let numProfs = profs.length;

        if (numProfs === 0 || schools.length === 0) {
            return (
               <div className='page'>
                    <div className='no-search-results'>No profs with <strong>"{this.props.match.params.query}"</strong> in their name at <strong>{this.props.match.params.schoolName}</strong>.</div>
                    <div className='no-search-results-subtext'>Use the search bar above and check the spelling or try an alternate spelling.</div>
                    <div id='add-prof'>
                        <div>Don't see the prof you're looking for?</div>
                        <Link to='/profs/new' id='add-prof-link'>Add a prof</Link>
                    </div>
                </div> 
            )
        }

        const groupedReviews = this.groupReviews(profs, profReviews)
        const groupedProfSaves = this.groupProfSaves(profs, profSaves)
        const subjects = this.getSubjects(profs);
        const filteredProfs = this.filterProfs(profs)

        return (
            <div id='prof-index'>
                <div className='search-header'>{numProfs} profs with <strong>"{this.props.match.params.query}"</strong> in their name at <strong>{this.props.match.params.schoolName}</strong>.</div>
                <div id='dept-dropdown-container'>
                    <div id='dept-dropdown-label'>Department</div>
                    <select id='dept-dropdown' name='subjects' onChange={this.update('selectedSubject')} defaultValue={'Select...'}>
                            {
                                subjects.map((subject, index) =>
                                    <option
                                        key={index}
                                        value={subject}>
                                        {subject}
                                    </option>)
                            }
                    </select>
                </div>
                <ul>
                    {
                        filteredProfs.map((prof) => 
                            <ProfShow
                            key={prof.id} 
                            prof={prof} 
                            profReviews={groupedReviews[prof.id]}
                            profSave={groupedProfSaves[prof.id]}
                            history={history}
                            createProfSave={createProfSave}
                            deleteProfSave={deleteProfSave}
                            currentUser={currentUser}
                            school={schools[prof.school_id]}
                            />
                        )
                    }
                </ul>
                <div id='add-prof'>
                    <div>Don't see the prof you're looking for?</div>
                    <Link to='/profs/new' id='add-prof-link'>Add a prof</Link>
                </div>
            </div>
        );
    };
}

export default ProfIndex;