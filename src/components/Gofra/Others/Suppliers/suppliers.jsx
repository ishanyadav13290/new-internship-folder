import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { lb } from "../../../Static/theme";
import FAQAccordion from "../FAQsAccordion/FAQAccordion";
import SupplierCards from "./SupplierCards";

export default function Suppliers(){
    let faqs=[
        {
            title:"Queries Regarding Partnering With Us",
            description:<Box>
                <Typography color={lb} variant="h6">How can I sell my products/material through Gofra?</Typography>
                <Typography variant="body2">You'll have to register as a seller with required form submission to start partnering with us.</Typography>
            </Box>
        },
        {
            title:"Finance Related Queries",
            description:<Box>
                <Typography color={lb} variant="h6">Do you provide financial support to Suppliers?</Typography>
                <Typography variant="body2">Yes, we provide help to suppliers.</Typography>
            </Box>
        },
        {
            title:"Payments Related Queries",
            description:<Box>
                <Box>
                <Typography color={lb} variant="h6">How can I update my bank account details?</Typography>
                <Typography variant="body2">While registering for your supplier account you are required to add your bank account details along with a Cancelled Cheque for verification. Once the primary account is verified you can add more bank accounts through the supplier portal.</Typography>
                </Box>
                <br />
                <Box>
                <Typography color={lb} variant="h6">How can I download the GST invoice bill?</Typography>
                <Typography variant="body2">You can download the GST invoice bill under the Orders/Invoice section in the Supplier portal.</Typography>
                </Box>
            </Box>
        }
    ]
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
        <br />
        <Box width={"90%"} m={"auto"}>
        <Typography variant="h6" fontWeight={700} color={lb} fontSize={"40px"}>FAQ's</Typography>
        <br />
            <FAQAccordion content={faqs} />
        </Box>
        <br />
    </Box>
}