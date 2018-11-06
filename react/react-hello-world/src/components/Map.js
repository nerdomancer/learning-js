import React, { Component } from 'react';
import "./Map.css";

class Map extends Component {
    render() {
        let imagePath = "images/none.png";

        if (this.props.imageName) {
            imagePath = "images/" + this.props.imageName;
        }

        return (
            <div className="MapBox">
                <img src={imagePath} alt={this.props.location} />
            </div>
        );
    }
}

export default Map;