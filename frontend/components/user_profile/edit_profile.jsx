import React from 'react';
import {Link} from 'react-router-dom';

class EditProfile extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            profile: {
                id: this.props.user.id,
                first_name: this.props.user.first_name,
                school_id: this.props.user.school_id,
                updatingProfile: true,
            }
        }

        this.editProfile = this.editProfile.bind(this)
    }

    componentDidMount() {
        this.props.requestSchools()
        this.props.clearErrors();
    }

    editProfile(e) {
        e.preventDefault();
        this.props.updateProfile(this.state.profile)
        .then(() => this.props.history.push(`/account/profile/${this.props.user.id}`));
    }

    update(field) {
        let profile = {...this.state.profile}
        return e => {
            profile[field] = e.currentTarget.value;
            this.setState({profile})
        }
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
                <form onSubmit={this.editProfile} className='edit-user-form-proper'>
                    <div className='edit-user-form-input-row'>
                        <div className='edit-user-form-label'>Name</div>
                        <input 
                            type='text'
                            value={this.state.profile.first_name}
                            onChange={this.update('first_name')}
                            className="edit-user-form-input">
                        </input>
                    </div>
                    <div className="edit-user-form-input-row edit-user-form-submit-row">
                        <input 
                            type='submit' 
                            className='edit-user-form-submit edit-user-button' 
                            value='Save Changes'>
                        </input>
                    </div>
                    <div className="edit-user-form-input-row edit-user-form-submit-row">
                        <Link 
                            className='edit-user-form-cancel link'
                            to={`/account/profile/${user.id}`}>Cancel
                        </Link>
                    </div>
                    {this.renderErrors()}
                </form>
            </div>
        )
    }
}

export default EditProfile