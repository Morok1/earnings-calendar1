import React, {Component} from 'react';
import {SERVER_URL_PRICES} from "../constants";

function fetchPrices(companyName) {
    fetch(SERVER_URL_PRICES + 'prices/', {
            method: 'GET'
        }
    ).then(r => r.json())
}

function display(){
    if(this.state.price){
        return this.st
    }
}

class Price extends Component {
    constructor() {
        super();
        this.state = {price: null};
    }
    componentWillMount() {
        this.fetchPrice();
        console.log("price " + this.state.price)
    }

    fetchPrice = () => {
        // Read the token from the session storage
        // and include it to Authorization header
        // const token = sessionStorage.getItem("jwt");
        fetch(SERVER_URL_PRICES + '/prices/NFLX',
            /*{
              headers: {'Authorization': token}
            }*/)
            .then((response) => response.json())
            .then((responseData) => {
                // console.log("res" + JSON.stringify(responseData))
                this.setState({
                    price: responseData,
                });
            })
            .catch(err => console.error(err));
    }
    render() {
        {
            if (this.state.price == null) {
                // render progress or message
                return <div> Loading data ... </div>
            } else {
                return (
                    <div className="box-body">
                        <div>
                            <table>
                                <tbody>
                                <tr>
                                    <td>symbol</td>
                                    <td><p>{this.state.price.symbol}</p></td>
                                </tr>
                                <tr>
                                    <td>lastUpdated</td>
                                    <td><p>{this.state.price.lastUpdated}</p></td>
                                </tr>
                                <tr>
                                    <td>targetHigh</td>
                                    <td><p>{this.state.price.targetHigh}</p></td>
                                </tr>
                                <tr>
                                    <td>targetLow</td>
                                    <td><p>{this.state.price.targetLow}</p></td>
                                </tr>
                                <tr>
                                    <td>targetMedian</td>
                                    <td><p>{this.state.price.targetMedian}</p></td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                );
            }

        // return (
        //     // <div>
        //          if(this.state.price == null) {
        //         // render progress or message
        //         return <div> Loading data ... </div>
        //     } else {
        //              return <div> Loading data ... </div>
        //          };
        //
        //
        //
        //     {/*</div>*/}
        // );
    }
}}



export default Price;