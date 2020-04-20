import React, { useState } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const EditEarnings = (props) => {
  const [open, setOpen] = useState(false);
  const [earnings, setEarnings] = useState({date: '', epsActual: '', epsEstimate: '', hour: '', quarter: '',
    revenueActual: '', revenueEstimate: '', symbol: '', year: ''});

  const handleClickOpen = () => {
    setEarnings({date: earnings.props.date, epsActual: earnings.props.epsActual, epsEstimate: earnings.props.epsEstimate,
      hour: earnings.props.hour, quarter: earnings.props.quarter,
        revenueActual: earnings.props.revenueActual, revenueEstimate: earnings.props.revenueEstimate,
      symbol: earnings.props.symbol, year: earnings.props.year});
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setEarnings({...earnings, [event.target.name]: event.target.value});
  };

  // Update earnings and close modal form
  const handleSave = () => {
    props.updateCar(earnings, props.link);
    handleClose();
  };
  return (
    <div>
      <Button color="primary" size="small" onClick={handleClickOpen}>Edit</Button>
      <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Edit earnings</DialogTitle>
          <DialogContent>
            <TextField autoFocus fullWidth label="date" name="date"
                value={earnings.date} onChange={handleChange}/>
              <TextField fullWidth label="epsActual" name="epsActual"
                value={earnings.epsActual} onChange={handleChange}/>
              <TextField fullWidth label="hour" name="hour"
                value={earnings.hour} onChange={handleChange}/>
              <TextField fullWidth label="quarter" name="quarter"
                value={earnings.quarter} onChange={handleChange}/>
              <TextField fullWidth label="revenueActual" name="revenueActual"
                value={earnings.revenueActual} onChange={handleChange}/>
              <TextField fullWidth label="revenueEstimate" name="revenueEstimate"
                         value={earnings.revenueEstimate} onChange={handleChange}/>
              <TextField fullWidth label="symbol" name="symbol"
                         value={earnings.symbol} onChange={handleChange}/>
              <TextField fullWidth label="year" name="year"
                         value={earnings.year} onChange={handleChange}/>
          </DialogContent>
          <DialogActions>
            <Button color="secondary" onClick={handleClose}>Cancel</Button>
            <Button color="primary" onClick={handleSave}>Save</Button>
          </DialogActions>
        </Dialog>      
    </div>
  );
};

export default EditEarnings;