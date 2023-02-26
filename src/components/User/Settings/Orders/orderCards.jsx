import { Box } from "@mui/system";
import toIndianNumberingSystem from "../../../Features/RupeeConversion";
import { db } from "../../../Static/theme";

export default function OrderCards({ name, img, price, date }) {
  let status = true;
  return (
    <>
      <Box
        sx={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          p: "10px 20px",
          borderRadius: "20px",
        }}
        display={["block","block","flex","flex"]}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box display={["block","block","flex","flex"]}>
        <Box p={"0 20px 0 0"}>
          <img height={"100px"} width={"80px"} src={img} alt={"order"} />
        </Box>
        <Box  display={"flex"} justifyContent={"center"} alignItems={"center"}>{name.slice(0,20)}...</Box>
        </Box>
        {/* <br /> */}
        <Box display={["block","block","flex","flex"]} alignItems={"center"} minWidth={["auto","auto","300px","300px"]}>
        <Box
          bgcolor={status ? db : "red"}
          color={"white"}
          width={"auto"}
          p={"5px"}
          borderRadius={"5px"}
        >
          Delivered on {date}
        </Box>
        <Box m={"0 0 0 auto"} p={"10px"} fontWeight={600}>{toIndianNumberingSystem(price)}</Box>
      
        </Box>
        </Box>
      <br />
    </>
  );
}
