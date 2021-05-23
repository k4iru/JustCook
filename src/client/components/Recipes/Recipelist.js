import React, { Component } from 'react';
import { useLocation } from "react-router-dom";

class Recipelist extends Component {
    constructor(props) {
        super(props);
        const location = useLocation();
    }

    render() {
        return(
            <div>
                <h1>test</h1>
                <h2>{location}</h2>
            </div>
        );
    }
}

export default Recipelist;