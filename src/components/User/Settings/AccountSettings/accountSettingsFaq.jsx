import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function AccountSettingsFaq(){
    return <Box textAlign={"left"} width={["95%","95%","60%","60%"]}>
        <Typography variant="h6">FAQs</Typography>
        {/* <br /> */}
        <Box>
            <Typography variant="body1" fontWeight={600}>
            What happens when I update my email address (or mobile number)?
            </Typography>
            <Typography variant="body2">
            Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
            </Typography>
        </Box>
        <br />
        <Box>
            <Typography variant="body1" fontWeight={600}>
            What happens to my existing account when I update my email address (or mobile number)?
            </Typography>
            <Typography variant="body2">
            Updating your email address (or mobile number) doesn't invalidate your account. Your account remains fully functional. You'll have to login using your updated Email address and you'll be able to see your order history, cart items, saved information and details.
            </Typography>
        </Box>
        <br />
        <Box>
            <Typography variant="body1" fontWeight={600}>
            Does my Seller account get affected when I update my email address?
            </Typography>
            <Typography variant="body2">
            It won't get affected by any means. You'll get updates in your updated email address and you'll have to login using the same updated email address.
            </Typography>
        </Box>
    </Box>
}