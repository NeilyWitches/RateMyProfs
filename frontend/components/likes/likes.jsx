// import React from "react";

// class Likes extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             likeCount: this.countLikes(),
//             dislikeCount: this.countDislikes(),
//             liked: this.props.currentUser ? this.hasLiked() : false,
//             disliked: this.props.currentUser ? this.hasDisliked() : false,
//         }

//         this.clickLike = this.clickLike.bind(this);
//         this.clickDislike = this.clickDislike.bind(this);
//     };

//     componentDidUpdate(prevProps) {
//         if (prevProps.profReview.likes !== this.props.profReview.likes) {
//             this.setState({likeCount: this.countLikes()})
//             this.setState({liked: this.props.currentUser ? this.hasLiked() : false})
//             this.setState({dislikeCount: this.countDislikes()})
//             this.setState({disliked: this.props.currentUser ? this.hasDisliked() : false})
//         } 
//         if (prevProps.currentUser !== this.props.currentUser) {
//             this.setState({liked: this.props.currentUser ? this.hasLiked() : false})
//             this.setState({disliked: this.props.currentUser ? this.hasDisliked() : false})
//         }
//     }

//     hasLiked() {
//         for (let i = 0; i < this.props.likes.length; i++) {
//             if (this.props.likes[i].liker_id === this.props.currentUser.id && this.props.likes[i].like_type === true) {
//                 return true
//             }
//         }
//         return false
//     }

//     hasDisliked() {
//         for (let i = 0; i < this.props.likes.length; i++) {
//             if ( this.props.likes[i].liker_id === this.props.currentUser.id && this.props.likes[i].like_type === false) {
//                 return true
//             }
//         }
//         return false
//     }

//     clickLike() {
//         if (!this.props.currentUser) {
//             let path = '/signup';
//             this.props.history.push(path);
//         }
//         if (this.state.disliked) {
//             return
//         } else {
//             if (this.state.liked) {
//                 for (let i = 0; i < this.props.likes.length; i++) {
//                     if ( this.props.likes[i].liker_id === this.props.currentUser.id) {
//                         this.props.deleteLike(this.props.likes[i].id)
//                         return
//                     }
//                 }
//             } else {
//                 this.props.createLike({
//                     like_type: true,
//                     liker_id: this.props.currentUser.id,
//                     review_id: this.props.profReview.id,
//                 })
//             }
//         }
//     }

//     clickDislike() {
//         if (!this.props.currentUser) {
//             let path = '/signup';
//             this.props.history.push(path);
//         }
//         if (this.state.liked) {
//             return
//         } else {
//             if (this.state.disliked) {
//                 for (let i = 0; i < this.props.likes.length; i++) {
//                     if ( this.props.likes[i].liker_id === this.props.currentUser.id) {
//                         this.props.deleteLike(this.props.likes[i].id)
//                         return
//                     }
//                 }
//             } else {
//                 this.props.createLike({
//                     like_type: false,
//                     liker_id: this.props.currentUser.id,
//                     review_id: this.props.profReview.id,
//                 })
//             }
//         }
//     }

//     countLikes() {
//         let count = 0
//         for (let i = 0; i < this.props.likes.length; i++) {
//             if (this.props.likes[i].like_type === true) {
//                 count++
//             }
//         }
//         return count
//     }

//     countDislikes() {
//         let count = 0
//         for (let i = 0; i < this.props.likes.length; i++) {
//             if (this.props.likes[i].like_type === false) {
//                 count++
//             }
//         }
//         return count
//     }

//     render() {
//         return (
//             <div id='likes'>
//                 <div className="thumb-count">
//                     <i onClick={this.clickLike} className="far fa-thumbs-up fa-lg" style={this.state.liked ? {color: '#68ffbe'} : null}></i>
//                     <div className="likes-count">{this.state.likeCount}</div>
//                 </div>
//                 <div className="thumb-count">
//                     <i onClick={this.clickDislike} className="far fa-thumbs-down fa-lg" style={this.state.disliked ? {color: 'rgb(255, 156, 156)'} : null}></i>
//                     <div className="likes-count">{this.state.dislikeCount}</div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default Likes;

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
                    <i className="far fa-thumbs-up fa-lg" onClick={this.clickLike} style={this.state.liked ? {color: '#68ffbe'} : null}></i>
                    <div className="likes-count">{this.state.numLikes}</div>
                </div>
                <div className="thumb-count">
                    <i className="far fa-thumbs-down fa-lg" onClick={this.clickDislike} style={this.state.disliked ? {color: 'rgb(255, 156, 156)'} : null}></i>
                    <div className="likes-count">{this.state.numDislikes}</div>
                </div>
            </div>
        )
    }

}

export default Likes;