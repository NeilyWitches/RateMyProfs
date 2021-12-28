import React from 'react';

class SchoolRatingLikes extends React.Component {
    constructor(props) {
        super(props);
        
        let likesTuple = this.countLikes()

        this.state = {
            numLikes: likesTuple[0],
            numDislikes: likesTuple[1],
            liked: this.props.currentUser ? this.hasLiked() : false,
            disliked: this.props.currentUser ? this.hasDisliked() : false,
        }

        this.clickLike = this.clickLike.bind(this)
        this.clickDislike = this.clickDislike.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.schoolRatingLikes !== this.props.schoolRatingLikes) {
            let likesTuple = this.countLikes()
            this.setState({numLikes: likesTuple[0]})
            this.setState({liked: this.props.currentUser ? this.hasLiked() : false})
            this.setState({numDislikes: likesTuple[1]})
            this.setState({disliked: this.props.currentUser ? this.hasDisliked() : false})
        }
        if (prevProps.currentUser !== this.props.currentUser) {
            this.setState({liked: this.props.currentUser ? this.hasLiked() : false})
            this.setState({disliked: this.props.currentUser ? this.hasDisliked() : false})
        }
    }

    hasLiked() {
        for (let i = 0; i < this.props.schoolRatingLikes.length; i++) {
            if (this.props.schoolRatingLikes[i].liker_id === this.props.currentUser.id && this.props.schoolRatingLikes[i].like_type === true) {
                return this.props.schoolRatingLikes[i].id
            }
        }
        return false
    }

    hasDisliked() {
        for (let i = 0; i < this.props.schoolRatingLikes.length; i++) {
            if (this.props.schoolRatingLikes[i].liker_id === this.props.currentUser.id && this.props.schoolRatingLikes[i].like_type === false) {
                return this.props.schoolRatingLikes[i].id
            }
        }
        return false
    }

    countLikes() {
        let likeCount = 0
        let dislikeCount = 0
        for (let i = 0; i < this.props.schoolRatingLikes.length; i++) {
            if (this.props.schoolRatingLikes[i].like_type === true) {
                likeCount++
            } else {
                dislikeCount++
            }
        }
        return [likeCount, dislikeCount]
    }

    clickLike() {
        if (!this.props.currentUser) {
            let path = '/signup';
            this.props.history.push(path);
        } else {
            if (this.state.disliked) {
                return
            }
            if (this.state.liked) {
                this.props.deleteSchoolRatingLike(this.state.liked)
            } else {
                this.props.createSchoolRatingLike({
                    like_type: true,
                    liker_id: this.props.currentUser.id,
                    school_rating_id: this.props.schoolRating.id
                })
            }
        }
    }

    clickDislike() {
        if (!this.props.currentUser) {
            let path = '/signup';
            this.props.history.push(path);
        } else {
            if (this.state.liked) {
                return
            }
            if (this.state.disliked) {
                this.props.deleteSchoolRatingLike(this.state.disliked)
            } else {
                this.props.createSchoolRatingLike({
                    like_type: false,
                    liker_id: this.props.currentUser.id,
                    school_rating_id: this.props.schoolRating.id
                })
            }
        }
    }

    render() {
        return (
            <div id='likes'>
                <div className="thumb-count">
                    <div className='icon-hint'>
                        <i className="far fa-thumbs-up fa-lg 
                        icon-with-hint 
                        thumb" 
                        onClick={this.clickLike}
                        style={this.state.liked ? 
                        {color: '#68ffbe'} : null}></i>
                        <div className='hint'>Helpful</div>
                    </div>
                    <div className="likes-count">{this.state.numLikes}</div>
                </div>
                <div className="thumb-count">
                    <div className='icon-hint'>
                        <i className="far fa-thumbs-down 
                        fa-lg icon-with-hint
                        thumb" 
                        onClick={this.clickDislike} 
                        style={this.state.disliked ? 
                        {color: 'rgb(255, 156, 156)'} : null}></i>
                        <div className='hint'>Not helpful</div>
                    </div>
                    <div className="likes-count">{this.state.numDislikes}</div>
                </div>
            </div>
        )
    }

}

export default SchoolRatingLikes;