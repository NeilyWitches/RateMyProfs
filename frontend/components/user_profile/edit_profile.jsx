import React from 'react';
import {Link} from 'react-router-dom';
import AccountLinks from './account_links';

class EditProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: {
                id: this.props.user.id,
                first_name: this.props.user.first_name,
                school_id: this.props.user.school_id,
                updatingProfile: true,
                schoolName: ""
            },
        }

        this.editProfile = this.editProfile.bind(this)
        this.updateName = this.updateName.bind(this)
        this.updateSchool = this.updateSchool.bind(this)
    }

    componentDidMount() {
        this.props.requestSchools()
        this.props.clearErrors();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.schools !== this.props.schools) {
            let profile = {...this.state.profile}
            profile.schoolName = this.props.schools[this.state.profile.school_id].name
            this.setState({profile})
        }
    }

    editProfile(e) {
        e.preventDefault();
        this.props.updateProfile(this.state.profile)
        .then(() => this.props.history.push(`/account/profile/${this.props.user.id}`));
    }

    updateName(e) {
        let profile = {...this.state.profile}
        profile.first_name = e.currentTarget.value;
        this.setState({profile})
    }

    updateSchool(e) {
        let profile = {...this.state.profile}
        profile.schoolName = e.currentTarget.value;
        this.setState({profile})
    }

    renderErrors() {
        return (
            <ul>
                {this.props.profileErrors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        const { user, schools } = this.props;

        return (
            <div className='page'>
                <div className='account-header'>Hey, {user.first_name}</div>
                <AccountLinks 
                location={this.props.match.path}
                user={user}/>
                <form onSubmit={this.editProfile} className='edit-user-form-proper'>
                    <div className='edit-user-form-input-row'>
                        <div className='edit-user-form-label'>Name</div>
                        <input 
                            type='text'
                            value={this.state.profile.first_name}
                            onChange={this.updateName}
                            className="edit-user-form-input">
                        </input>
                    </div>
                    <div className='edit-user-form-input-row'>
                        <div className='edit-user-form-label'>School</div>
                        <input 
                            type='text'
                            value={this.state.profile.schoolName}
                            onChange={this.updateSchool}
                            className="edit-user-form-input">
                        </input>
                    </div>
                    <div className='edit-user-form-submit-cancel-row'>
                        <div className='edit-user-form-submit-cancel-col'>
                            <input 
                                type='submit' 
                                className='edit-user-form-submit edit-user-button' 
                                value='Save Changes'>
                            </input>
                            <Link 
                                className='edit-user-form-cancel link'
                                to={`/account/profile/${user.id}`}>Cancel
                            </Link>
                        </div>
                    </div>
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
}

export default EditProfile