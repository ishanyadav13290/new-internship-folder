import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import axios from 'axios';
import { AuthContext } from '../Context/Contexts';
import { db, lb } from '../Static/theme';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="">
        Gofra
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const steps = ['Shipping address', 'Payment details', 'Review your order'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <AddressForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <Review />;
    default:
      throw new Error('Unknown step');
  }
}

const theme = createTheme();

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  let { userID, cart, setCart, setUserOrders } = React.useContext(AuthContext);
  let [isPaymentSucess, setIsPaymentSucess] = React.useState(false);
  let { paymentMethod, setPaymentMethod } = React.useContext(AuthContext);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };



  async function displayRazorPay() {
    const res = await handlePayment();
    if (!res) {
      alert("Error");
      return
    }
    let obj = {
      amount: 700
    }
    const options = {
      "key": "rzp_test_nSahl5FThvw7uJ", // Enter the Key ID generated from the Dashboard
      "amount": 700 * 100 + "", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      "currency": "INR",
      "name": "Ishan Yadav",
      "description": "Test Transaction",
      "image": "https://example.com/your_logo",
      "order_id": "order_IluGWxBm9U8zJ8", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      "handler": async function (response) {
        if (response.razorpay_payment_id) {
            handleNext()
            await axios.patch(`http://localhost:3001/users/${userID}`, {
              cart: [],
              orders: cart
            })
            setUserOrders(cart)
            setCart([])
            return;
        } else {
          console.log("Error");
        }
      },
      "prefill": {
        "name": "ishan Yadav",
        "email": "vdsvsv",
        "contact": "contactRef.current.value",
      },
      "notes": {
        "address": "Razorpay Corporate Office"
      },
      "theme": {
        "color": "#564fa4"
      }
    };

    let { data } = await axios.post("http://localhost:3001/create/orderId", obj)
    options.order_id = data.orderId;
    let rzp = new window.Razorpay(options);
    return rzp.open();
  }
  const handlePayment = async () => {
    return new Promise(resolve => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";

      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script);
    })
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        // elevation={-1}
        sx={{
          position: 'relative',
          zIndex: "0",
          boxShadow: "none"
          // borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h5" color="inherit" fontWeight={700} noWrap>
            Gofra
          </Typography>
        </Toolbar>
      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5, }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1, color: lb }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={async () => {
                    if (paymentMethod == "online") {
                      await displayRazorPay()
                    }
                    else {
                      handleNext()
                      await axios.patch(`http://localhost:3001/users/${userID}`, {
                        cart: [],
                        orders: cart
                      })
                      setUserOrders(cart)
                      setCart([])
                    }
                  }}
                  sx={{
                    bgcolor: lb, "&:hover": {
                      bgcolor: db
                    }, mt: 3, ml: 1, display: activeStep === steps.length - 1 ? "block" : "none",
                  }}
                >
                  Place Order
                </Button>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{
                    bgcolor: lb, "&:hover": {
                      bgcolor: db
                    }, mt: 3, ml: 1, display: activeStep === steps.length - 1 ? "none" : "block"
                  }}
                >
                  Next
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
        <Copyright />
      </Container>
    </ThemeProvider>
  );
}