import React, {Component} from 'react';
import {SERVER_URL} from '../constants.js'
import ReactTable from "react-table";
import 'react-table/react-table.css';
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditEarnings from './EditEarnings';
import {CSVLink} from 'react-csv';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import AddEarnings from "./AddEarnings";

class EarningsList extends Component {
  constructor(props) {
    super(props);
    this.state = {earnings: []};
  }

  componentDidMount() {
    this.fetchEarnings();
    console.log("eanrings " + this.state.earnings)
  }

  fetchEarnings = () => {
    // Read the token from the session storage
    // and include it to Authorization header
    // const token = sessionStorage.getItem("jwt");
    fetch(SERVER_URL + '/earnings',
        /*{
          headers: {'Authorization': token}
        }*/)
        .then((response) => response.json())
        .then((responseData) => {
          // console.log("res" + JSON.stringify(responseData))
          this.setState({
            earnings: responseData,
          });
        })
        .catch(err => console.error(err));
  }

  // Delete car
  onDelClick = (link) => {
    if (window.confirm('Are you sure to delete?')) {
      const token = sessionStorage.getItem("jwt");
      fetch(link,
          {
            method: 'DELETE',
            headers: {'Authorization': token}
          })
          .then(res => {
            toast.success("Car deleted", {
              position: toast.POSITION.BOTTOM_LEFT
            });
            this.fetchEarnings();
          })
          .catch(err => {
            toast.error("Error when deleting", {
              position: toast.POSITION.BOTTOM_LEFT
            });
            console.error(err)
          })
    }
  }

  // Add new earnings
  addEarnings(earnings) {
    const token = sessionStorage.getItem("jwt");
    fetch(SERVER_URL + 'api/cars',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          },
          body: JSON.stringify(earnings)
        })
        .then(res => this.fetchEarnings())
        .catch(err => console.error(err))
  }

  // Update car
  updateEarnings(car, link) {
    const token = sessionStorage.getItem("jwt");
    fetch(link,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token
          },
          body: JSON.stringify(car)
        })
        .then(res => {
          toast.success("Changes saved", {
            position: toast.POSITION.BOTTOM_LEFT
          });
          this.fetchEarnings();
        })
        .catch(err =>
            toast.error("Error when saving", {
              position: toast.POSITION.BOTTOM_LEFT
            })
        )
  }

  render() {
    const columns = [
      {
          Header: 'Date',
        accessor: 'date'
      },
        {

        Header: 'EpsEstimate',
        accessor: 'epsEstimate'
      }, {
        Header: 'Hour',
        accessor: 'hour',
      }, {
        Header: 'Quarter',
        accessor: 'revenueActual',
      }, {
        Header: 'RevenueEstimate',
        accessor: 'revenueEstimate',
      }, {
        Header: 'Symbol',
        accessor: 'symbol',
      },
      {
        Header: 'Year',
        accessor: 'year',
      },
      {
        sortable: false,
        filterable: false,
        width: 100,
        accessor: '_links.self.href',
        Cell: ({value, row}) => (
            <EditEarnings earnings={row} link={value} updateEarnings={this.updateEarnings} fetchCars={this.fetchEarnings}/>),
      }, {
        sortable: false,
        filterable: false,
        width: 100,
        accessor: '_links.self.href',
        Cell: ({value}) => (<Button size="small" color="secondary"
                                    onClick={() => {
                                      this.onDelClick(value)
                                    }}>Delete</Button>)
      }];

    return (
        <div className="App">
          <Grid container>
            {/*<Grid item>*/}
            {/*  <AddEarnings addEarnings={this.addEarnings} fetchCars={this.fetchEarnings()}/>*/}
            {/*</Grid>*/}
            <Grid item style={{padding: 15}}>
              <CSVLink data={this.state.earnings} separator=";">Export CSV</CSVLink>
            </Grid>
          </Grid>
          <ReactTable data={this.state.earnings} columns={columns}
                      filterable={true}/>
          <ToastContainer autoClose={1500}/>
        </div>
    );
  }
}

export default EarningsList;