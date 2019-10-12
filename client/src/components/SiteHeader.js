import React from 'react';
import { Link } from 'react-router-dom';

class SiteHeader extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onTop: true
        }
    }

    render() {
        return (
            <div id="site-header">
                <div className="item-1">
                    <Link to={"/"}>
                        Radical Insight
                    </Link>
                </div>
                <div className="item-2"></div>
                <div className="item-3" />
                <div className="item-4"></div>
                <div className="item-5">
                    <Link to={"/resources"}>
                        Resources
                    </Link>
                </div>
                <div className="item-6">Sign In</div>
                <div style={{clear: "both"}} />
            </div>
        );
    }
}

export default SiteHeader;
