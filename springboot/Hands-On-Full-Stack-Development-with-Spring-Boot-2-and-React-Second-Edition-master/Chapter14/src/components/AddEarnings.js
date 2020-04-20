import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const AddEarnings = (props) => {
  //  String date;
  //   String epsActual;
  //   String epsEstimate;
  //   String hour;
  //   String quarter;
  //   String revenueActual;
  //   String revenueEstimate;
  //   String symbol;
  //   String year;
  const [open, setOpen] = useState(false);
  const [earning, setCar] = useState({date: '', epsActual: '', epsEstimate: '', hour: '', quarter: '',
    revenueActual: '', revenueEstimate: '', symbol: '', year: ''});

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setCar({...earning, [event.target.name]: event.target.value});
  };

  // Save earning and close modal form
  const handleSave = () => {
    props.addEarnings(earning);
    handleClose();
  };

  return (
    <div>
      <Button variant="outlined" color="primary" style={{margin: 10}} onClick={handleClickOpen}>
        New earning
      </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>New earning</DialogTitle>
          <DialogContent>
            <TextField autoFocus fullWidth label="Date" name="date"
                       value={earning.date} onChange={handleChange}/>
            <TextField fullWidth label="EpsActual" name="epsActual"
              value={earning.epsActual} onChange={handleChange}/>
            <TextField fullWidth label="epsEstimate" name="epsEstimate"
              value={earning.epsEstimate} onChange={handleChange}/>
            <TextField fullWidth label="hour" name="hour"
              value={earning.hour} onChange={handleChange}/>
            <TextField fullWidth label="Price" name="price" 
              value={earning.price} onChange={handleChange}/>
              <TextField fullWidth label="revenueActual" name="price"
                         value={earning.revenueActual} onChange={handleChange}/>
              <TextField fullWidth label="revenueEstimate" name="price"
                         value={earning.revenueEstimate} onChange={handleChange}/>
              <TextField fullWidth label="symbol" name="price"
                         value={earning.symbol} onChange={handleChange}/>
              <TextField fullWidth label="year" name="price"
                         value={earning.year} onChange={handleChange}/>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={handleClose}>Cancel</Button>
            <Button color="primary" onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>      
    </div>
  );
};

export default AddEarnings;