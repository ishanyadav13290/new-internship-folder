import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lb } from "../../../Static/theme";
import SupplierCards from "./SupplierCards";

export default function Suppliers(){
    return <Box>
        <Box width={"60%"} m={"auto"}>
        <Typography color={lb} variant={"h4"} fontWeight={700}>Partner With Us</Typography>
        <br />
        <Typography variant="body1" fontSize={"20px"}>Acquire more business and increase exposure to Gofra’s customer network and receive requests for quotation within your specified locations</Typography>
        </Box>
        <br />
        <Box padding={"10px"} display={"flex"} justifyContent={"space-evenly"}>
        <SupplierCards img={"https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696229_960_720.jpg"} title={"Advance Payments"} />
        <SupplierCards img={"https://cdn.pixabay.com/photo/2016/07/12/09/31/package-1511683_960_720.jpg"} title={"High Order Volume"} />
        <SupplierCards img={"https://cdn.pixabay.com/photo/2016/12/19/10/16/hands-1917895_960_720.png"} title={"Bigger Client Base"} />
        </Box>
    </Box>
}