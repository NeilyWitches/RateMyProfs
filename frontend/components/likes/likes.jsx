import React from "react";

class Likes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likeCount: this.countLikes(),
            dislikeCount: 0,
            like: {
                like_type: true,
                liker_id: this.props.currentUser ? this.props.currentUser.id : null,
                review_id: this.props.profReview.id,
                prof_id: this.props.prof.id,
            },
            liked: this.props.currentUser ? this.hasLiked() : false,
        }

        this.clickLike = this.clickLike.bind(this);
    };

    componentDidUpdate(prevProps) {
        if (prevProps.profReview.likes !== this.props.profReview.likes) {
            this.setState({likeCount: this.countLikes()})
        } 
        if (prevProps.currentUser !== this.props.currentUser) {
            this.setState({liked: this.props.currentUser ? this.hasLiked() : false})
        }
    }

    hasLiked() {
        let likes = Object.values(this.props.profReview.likes);
        for (let i = 0; i < likes.length; i++) {
            if ( likes[i].liker_id === this.props.currentUser.id && likes[i].like_type === true) {
                return true
            }
        }
        return false
    }

    clickLike() {
        this.props.createLike(this.state.like)
    }

    countLikes() {
        let likes = Object.values(this.props.profReview.likes);
        let count = 0
        for (let i = 0; i < likes.length; i++) {
            if (likes[i].like_type === true) {
                count++
            }
        }
        return count
    }

    render() {
        return (
            <div id='likes'>
                <div className="thumb-count">
                    <i onClick={this.clickLike} className="far fa-thumbs-up fa-lg" style={this.state.liked ? {color: '#68ffbe'} : null}></i>
                    <div className="likes-count">{this.state.likeCount}</div>
                </div>
                <div className="thumb-count">
                    <i className="far fa-thumbs-down fa-lg"></i>
                    <div className="likes-count">{this.state.dislikeCount}</div>
                </div>
            </div>
        )
    }
}

export default Likes;