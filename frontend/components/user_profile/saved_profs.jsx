import React from 'react';
import { deleteProfSave } from '../../util/prof_save_api_util';
import ProfShow from '../profs/prof_show';

class SavedProfs extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        this.props.requestSavedProfs(this.props.user.id);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            this.props.requestSavedProfs(this.props.user.id)
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

    render() {
        const { profs, user, profReviews, history } = this.props;

        if (profs.length === 0) {
            return (
                <div className='page'>
                    <div className='account-header'>Hey, {user.first_name}</div>
                    <img src={window.logo} alt="Logo" className='logo' />
                    <div>You don't have any saved profs yet</div>
                </div>
            )
        } else {
            const groupedReviews = this.groupReviews(profs, profReviews)
            return (
                <div className='page'>
                    <div className='account-header'>Hey, {user.first_name}</div>
                    <ul>
                        {
                            profs.map((prof) =>
                            <ProfShow
                            key={prof.id}
                            prof={prof}
                            profReviews={groupedReviews[prof.id]}
                            history={history}
                            createProfSave={this.props.createProfSave}
                            deleteProfSave={this.props.deleteProfSave}/>)
                        }
                    </ul>
                </div>
        )
        }
    }
}

export default SavedProfs;