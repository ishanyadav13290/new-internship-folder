import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lb } from "../../../Static/theme";
import SupplierCards from "../Suppliers/SupplierCards";

export default function Buyers(){
    return <Box>
        <Box width={"60%"} m={"auto"}>
        <Typography color={lb} variant={"h4"} fontWeight={700}>Buy From Us</Typography>
        <br />
        <Typography variant="body1" fontSize={"20px"}>Choose from a wide range of Raw Material Categories and Get the right material in the size, finish, and quantity you need - when you need it.</Typography>
        </Box>
        <br />
        <Box padding={"10px"} display={"flex"} justifyContent={"space-evenly"}>
        <SupplierCards img={"https://cdn.pixabay.com/photo/2017/07/04/10/57/kermit-2470675_960_720.jpg"} title={"Lowest Rates"} />
        <SupplierCards img={"https://cdn.pixabay.com/photo/2014/10/24/09/04/quality-500958_960_720.jpg"} title={"Assured Quality"} />
        <SupplierCards img={"https://d5nfy7n2jvqm2.cloudfront.net/new-buyer-imgs/buyer-3.svg"} title={"On Time Delivery"} />
        <SupplierCards img={"https://cdn.pixabay.com/photo/2017/03/13/17/26/ecommerce-2140603_960_720.jpg"} title={"Buy On Credit"} />
        </Box>
    </Box>
}