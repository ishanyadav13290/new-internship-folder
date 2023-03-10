import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { NavLink } from "react-router-dom";
import { lb } from "../../../Static/theme";
import FAQAccordion from "../FAQsAccordion/FAQAccordion";
import SupplierCards from "../Suppliers/SupplierCards";

export default function Buyers(){
    let faqs=[
        {
            title:"Queries Regarding Buying Raw Goods",
            description:<Box>
                <Typography color={lb} variant="h6">What all brands do you supply?</Typography>
                <Typography variant="body2">We have associated with all the major brands in each raw material category. For more details check out our product catalog</Typography>
            </Box>
        },
        {
            title:"Delivery Related Queries",
            description:<Box>
                <Typography color={lb} variant="h6">How can I track my Order Status ?</Typography>
                <Typography variant="body2">You can track order status by logging in to your account on the Buyer Portal via Web or our Mobile App</Typography>
            </Box>
        },
        {
            title:"Payments Related Queries",
            description:<Box>
                <Box>
                <Typography color={lb} variant="h6">How to Apply for Credit?</Typography>
                <Typography variant="body2">You can apply for credit by filling the application form here: <NavLink to="supplyChain" >Credit</NavLink></Typography>
                </Box>
                <br />
                <Box>
                <Typography color={lb} variant="h6">How much Credit can I get ?</Typography>
                <Typography variant="body2">You can get Collateral Free Credit of up to 50 Lakhs.</Typography>
                </Box>
            </Box>
        }
    ]
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
        <br />
        <Box width={"90%"} m={"auto"}>
        <Typography variant="h6" fontWeight={700} color={lb} fontSize={"40px"}>FAQ's</Typography>
        <br />
            <FAQAccordion content={faqs} />
        </Box>
    </Box>
}