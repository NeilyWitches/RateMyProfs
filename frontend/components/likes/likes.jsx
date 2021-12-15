import React from "react";

class Likes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            likeCount: this.countLikes(),
            dislikeCount: this.countDislikes(),
            // like: {
            //     like_type: true,
            //     liker_id: this.props.currentUser ? this.props.currentUser.id : null,
            //     review_id: this.props.profReview.id,
            //     prof_id: this.props.prof.id,
            // },
            liked: this.props.currentUser ? this.hasLiked() : false,
            disliked: this.props.currentUser ? this.hasDisliked() : false,
        }

        this.clickLike = this.clickLike.bind(this);
        this.clickDislike = this.clickDislike.bind(this);
    };

    componentDidUpdate(prevProps) {
        if (prevProps.profReview.likes !== this.props.profReview.likes) {
            this.setState({likeCount: this.countLikes()})
            this.setState({liked: this.props.currentUser ? this.hasLiked() : false})
            this.setState({dislikeCount: this.countDislikes()})
            this.setState({disliked: this.props.currentUser ? this.hasDisliked() : false})
        } 
        if (prevProps.currentUser !== this.props.currentUser) {
            this.setState({liked: this.props.currentUser ? this.hasLiked() : false})
            this.setState({disliked: this.props.currentUser ? this.hasDisliked() : false})
        }
    }

    hasLiked() {
        let likes = Object.values(this.props.profReview.likes);
        for (let i = 0; i < likes.length; i++) {
            if (likes[i].liker_id === this.props.currentUser.id && likes[i].like_type === true) {
                return true
            }
        }
        return false
    }

    hasDisliked() {
        let likes = Object.values(this.props.profReview.likes);
        for (let i = 0; i < likes.length; i++) {
            if ( likes[i].liker_id === this.props.currentUser.id && likes[i].like_type === false) {
                return true
            }
        }
        return false
    }

    clickLike() {
        if (!this.props.currentUser) {
            let path = '/signup';
            this.props.history.push(path);
        }
        if (this.state.disliked) {
            return
        } else {
            let likes = Object.values(this.props.profReview.likes);
            if (this.state.liked) {
                for (let i = 0; i < likes.length; i++) {
                    if ( likes[i].liker_id === this.props.currentUser.id) {
                        this.props.deleteLike(likes[i].id, likes[i].review_id, likes[i].prof_id)
                        return
                    }
                }
            } else {
                this.props.createLike({
                    like_type: true,
                    liker_id: this.props.currentUser.id,
                    review_id: this.props.profReview.id,
                    prof_id: this.props.prof.id,
                })
            }
        }
    }

    clickDislike() {
        if (!this.props.currentUser) {
            let path = '/signup';
            this.props.history.push(path);
        }
        if (this.state.liked) {
            return
        } else {
            let likes = Object.values(this.props.profReview.likes);
            if (this.state.disliked) {
                for (let i = 0; i < likes.length; i++) {
                    if ( likes[i].liker_id === this.props.currentUser.id) {
                        this.props.deleteLike(likes[i].id, likes[i].review_id, likes[i].prof_id)
                        return
                    }
                }
            } else {
                this.props.createLike({
                    like_type: false,
                    liker_id: this.props.currentUser.id,
                    review_id: this.props.profReview.id,
                    prof_id: this.props.prof.id,
                })
            }
        }
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

    countDislikes() {
        let likes = Object.values(this.props.profReview.likes);
        let count = 0
        for (let i = 0; i < likes.length; i++) {
            if (likes[i].like_type === false) {
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
                    <i onClick={this.clickDislike} className="far fa-thumbs-down fa-lg" style={this.state.disliked ? {color: 'rgb(255, 156, 156)'} : null}></i>
                    <div className="likes-count">{this.state.dislikeCount}</div>
                </div>
            </div>
        )
    }
}

export default Likes;