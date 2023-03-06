import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { AuthContext } from '../Context/Contexts';
import { FormControl, FormLabel, Radio, RadioGroup } from '@mui/material';

export default function PaymentForm() {
  let {setPaymentMethod} = React.useContext(AuthContext)

  function handlePaymentMethod(e){
    setPaymentMethod(e.target.value)
  }
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={12}>
        <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Payment Method</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="CoD" onChange={handlePaymentMethod} control={<Radio />} label="Cash On Delivery" />
        <FormControlLabel value="online" onChange={handlePaymentMethod} control={<Radio />} label="Pay Online" />
      </RadioGroup>
    </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}