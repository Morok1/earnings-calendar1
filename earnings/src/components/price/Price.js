import React from 'react';
import {SERVER_URL_PRICES} from "../constants";

function fetchPrices(companyName) {
    fetch(SERVER_URL_PRICES + 'prices/', {
            method: 'GET'
        }
    ).then(r => r.json())
}


const Price = () => {

    return (
        <div>
            Price
        </div>
    );
};

export default Price;