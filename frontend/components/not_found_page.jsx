import React from "react";

class NotFoundPage extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="page-not-found-header">Page Not Found</div>
                <div className="page-not-found-subtext">The professor or school you were looking for could not be found. You can try searching instead.</div>
            </div>
        )
    };
};

export default NotFoundPage;