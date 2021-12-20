import React from 'react';
import { Link } from 'react-router-dom';
import ProfShow from './prof_show';

class ProfIndex extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.requestProfs();
        this.props.requestProfSaves(this.props.currentUser.id)
    };

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
        const { profs, profReviews, history, profSaves, createProfSave, deleteProfSave, currentUser } = this.props;

        if (profs.length === 0) return null

        const groupedReviews = this.groupReviews(profs, profReviews)
        const groupedProfSaves = this.groupProfSaves(profs, profSaves)

        return (
            <div id='prof-index'>
                <h1 id='prof-index-header'>All profs</h1>
                <ul>
                    {
                        profs.map((prof) => 
                            <ProfShow
                            key={prof.id} 
                            prof={prof} 
                            profReviews={groupedReviews[prof.id]}
                            profSave={groupedProfSaves[prof.id]}
                            history={history}
                            createProfSave={createProfSave}
                            deleteProfSave={deleteProfSave}
                            currentUser={currentUser}
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