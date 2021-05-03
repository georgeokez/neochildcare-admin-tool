import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

const AddDoctorModal = ({status}) => {
  const classes = useStyles();
  const [open, setOpen] = useState(status);
  const [fullWidth, setFullWidth] = useState(true);
  const [maxWidth, setMaxWidth] = useState('md');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddDoctor = (doctor) =>{

  }

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Add Doctor
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="confirmation-dialog-title"
      >
        {/* <DialogTitle id="max-width-dialog-title" style={{ fontSize:'50'}}>Add New Doctor</DialogTitle> */}
        <DialogTitle id="confirmation-dialog-title" >
          Add New Doctor
        </DialogTitle>
        <DialogContent >
          <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="email"
            label="Email Address"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="phone"
            name="phone"
            label="Phone Number"
            fullWidth
            autoComplete="Phone"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="profession"
            name="profession"
            label="Profession"
            fullWidth
            autoComplete="profession"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField id="days_available" name="days_available" label="Days Available" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="City"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
          />
        </Grid>
      </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleAddDoctor} color="primary" 
                    size="medium"
                    type="submit"
                    variant="contained">
            Add Doctor
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default AddDoctorModal;
