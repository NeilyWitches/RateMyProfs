import React from 'react';
import ProfShow from '../profs/prof_show';
import AccountLinks from './account_links';

class SavedProfs extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.requestSavedProfs(this.props.currentUser.id);
        this.props.requestProfSaves(this.props.currentUser.id)
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.requestSavedProfs(this.props.curentUser.id)
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
        const { profs, currentUser, profReviews, history, profSaves, createProfSave, deleteProfSave } = this.props;

        if (profs.length === 0) {
            return (
                <div className='page'>
                    <div className='account-header'>Hey, {currentUser.first_name}</div>
                    <AccountLinks 
                    location={this.props.match.path}
                    user={currentUser}/>
                    <img src={window.prof_save_gif} alt="ProfSaveGif" id='prof-save-gif' />
                    <div id='no-saved-profs'>You don't have any saved profs yet</div>
                </div>
            )
        } else {
            const groupedReviews = this.groupReviews(profs, profReviews)
            const groupedProfSaves = this.groupProfSaves(profs, profSaves)
            return (
                <div className='page'>
                    <div className='account-header'>Hey, {currentUser.first_name}</div>
                    <AccountLinks 
                    location={this.props.match.path}
                    user={currentUser}/>
                    <ul>
                        {
                            profs.map((prof) =>
                            <ProfShow
                            key={prof.id}
                            prof={prof}
                            profReviews={groupedReviews[prof.id]}
                            profSave={groupedProfSaves[prof.id]}
                            history={history}
                            createProfSave={this.props.createProfSave}
                            deleteProfSave={this.props.deleteProfSave}
                            currentUser={currentUser}/>)
                        }
                    </ul>
                </div>
        )
        }
    }
}

export default SavedProfs;