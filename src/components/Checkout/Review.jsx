import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { AuthContext } from '../Context/Contexts';
import toIndianNumberingSystem from '../Features/RupeeConversion';
import { Divider } from '@mui/material';



export default function Review() {
  let {cart,total, userAddress, userName, shippingAddress, cardDetails} = React.useContext(AuthContext)
  console.log(cart)
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: userName },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Order summary
      </Typography>
      <List disablePadding>
      <ListItem sx={{ py: 1, px: 0 }}>
            <ListItemText primary={"Name"} sx={{maxWidth:"60%"}} />
            <Typography minWidth={"20%"} fontWeight={700} textAlign={"center"} variant='body2'>*Quantity</Typography>
            <Typography variant="body2">Quantity * Price</Typography>
          </ListItem>
          <Divider />
        {cart.map((product) => (
          <ListItem key={product.name} sx={{ py: 1, px: 0 }}>
            <ListItemText primary={(product.name.slice(0,30)+"...")} sx={{maxWidth:"60%"}} secondary={product.desc} />
            <Typography minWidth={"20%"} fontWeight={700} textAlign={"center"} variant='body2'>*{product.qty}</Typography>
            <Typography variant="body2">{toIndianNumberingSystem((product.price)*(product.qty))}</Typography>
          </ListItem>
        ))}

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            {toIndianNumberingSystem(total)}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2} textAlign={"left"}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Shipping
          </Typography>
          <Typography gutterBottom>{`${shippingAddress.firstName} ${shippingAddress.secondName}`|| userName}</Typography>
          <Typography gutterBottom>{shippingAddress.address || userAddress}</Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Payment details
          </Typography>
          <Grid container textAlign={"left"}>
            {/* {payments.map((payment) => (
              <React.Fragment key={cardDetails.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{payment.detail}</Typography>
                </Grid>
              </React.Fragment>
            ))} */}
            <React.Fragment key={cardDetails.name}>
                <Grid item xs={6}>
                  <Typography gutterBottom>Card Holder</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{cardDetails.name}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Card Number</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{cardDetails.cardNumber}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>Expiry</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{cardDetails.expiry}</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>CVV</Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography gutterBottom>{cardDetails.cvv}</Typography>
                </Grid>
              </React.Fragment>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}