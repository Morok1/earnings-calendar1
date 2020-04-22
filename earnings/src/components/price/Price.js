import React, {Component} from 'react';
import {SERVER_URL_PRICES} from "../constants";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";


class Price extends Component {
    constructor() {
        super();
        this.state = {
            price: null,
            companiesNames: []
        };

    }

    componentWillMount() {
        this.fetchPrice();
        this.fetchCompaniesNames()
        console.log("price " + this.state.price)
    }

    fetchCompaniesNames() {
        fetch(SERVER_URL_PRICES + '/company-names',
            /*{
              headers: {'Authorization': token}
            }*/)
            .then((response) => response.json())
            .then((responseData) => {
                console.log("res" + JSON.stringify(responseData));
                this.setState({
                    companyNames: responseData,
                });
            })
            .catch(err => console.error(err));
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
    };

    render() {
        if (this.state.price == null) {
            // render progress or message
            return <div> Loading data ... </div>
        } else {
            return (

                <div className="box-body">
                    <InputLabel id="label">ISIN Company</InputLabel>
                    <Select labelId="label" id="select" value="20">
                        {this.getMap()}
                    </Select>
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
    }

    getMap() {
        return this.state.companiesNames.map((key, value) => {
            return (<MenuItem
                label="Select a country"
                value={key}
                name={key}>{value}</MenuItem>);
        });

    }
}


export default Price;