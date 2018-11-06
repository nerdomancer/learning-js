import React, { Component } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Map from "../components/Map";
import mapChooser from "../mapChooser";
import axios from "axios";

class StoreLocator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMap : "none.png",
            shops : []
        };

        this.chooseMap = this.chooseMap.bind(this);
    }

    async componentDidMount() {
        let response = await axios.get("http://localhost:3000/data/stores.json");
        this.setState({ shops : response.data.shops });
    }

    chooseMap(e) {
        this.setState({ currentMap : mapChooser(e.target.value) });
    }

    render() {
        let shopButtons = this.state.shops.map((shop, id) => {
            return <Button key={id} handleClick={this.chooseMap} location={shop.location} />;
        });
        return (
            <div>
                <Header />
                <div>
                    {shopButtons}
                </div>
                <Map imageName={this.state.currentMap} location={this.props.location} />
            </div>
        );
    }
}

export default StoreLocator;