
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useContext, useState } from 'react';
import { AuthContext } from '../Context/Contexts';

export default function AddressForm() {
  let {shippingAddress, setShippingAddress} = useContext(AuthContext)

  // let [tempAddress, setTempAddress] = useState({
  //   firstName:"",
  //   secondName:"",
  //   address:"",
  //   state:"",
  //   zip:"",
  //   city:"",
  // })
  function handleFirstName(e){
    let val= e.target.value
    setShippingAddress({...shippingAddress,firstName:val})
  }
  function handleSecondName(e){
    let val= e.target.value
    setShippingAddress({...shippingAddress,secondName:val})
  }
  function handleAddress(e){
    let val= e.target.value
    setShippingAddress({...shippingAddress,address:val})
  }
  function handleCity(e){
    let val= e.target.value
    setShippingAddress({...shippingAddress,city:val})
  }
  function handleState(e){
    let val= e.target.value
    setShippingAddress({...shippingAddress,state:val})
  }
  function handleZIP(e){
    let val= e.target.value
    setShippingAddress({...shippingAddress,zip:val})
  }
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            onChange={handleFirstName}
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
            variant="standard"
            onChange={handleSecondName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address"
            name="address"
            label="Address line"
            fullWidth
            onChange={handleAddress}
            autoComplete="address"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            onChange={handleCity}
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            onChange={handleState}
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            onChange={handleZIP}
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
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
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </>
  );
}