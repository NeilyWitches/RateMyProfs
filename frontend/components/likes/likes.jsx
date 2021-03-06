import React from 'react';

class Likes extends React.Component {
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
        if (prevProps.likes !== this.props.likes) {
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
        for (let i = 0; i < this.props.likes.length; i++) {
            if (this.props.likes[i].liker_id === this.props.currentUser.id && this.props.likes[i].like_type === true) {
                return this.props.likes[i].id
            }
        }
        return false
    }

    hasDisliked() {
        for (let i = 0; i < this.props.likes.length; i++) {
            if (this.props.likes[i].liker_id === this.props.currentUser.id && this.props.likes[i].like_type === false) {
                return this.props.likes[i].id
            }
        }
        return false
    }

    countLikes() {
        let likeCount = 0
        let dislikeCount = 0
        for (let i = 0; i < this.props.likes.length; i++) {
            if (this.props.likes[i].like_type === true) {
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
                this.props.deleteLike(this.state.liked)
            } else {
                this.props.createLike({
                    like_type: true,
                    liker_id: this.props.currentUser.id,
                    review_id: this.props.profReview.id
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
                this.props.deleteLike(this.state.disliked)
            } else {
                this.props.createLike({
                    like_type: false,
                    liker_id: this.props.currentUser.id,
                    review_id: this.props.profReview.id
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

export default Likes;