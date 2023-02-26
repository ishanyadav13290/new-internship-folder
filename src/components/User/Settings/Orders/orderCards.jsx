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
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box ml={"0px"}>
          <img height={"100px"} width={"80px"} src={img} alt={"order"} />
        </Box>
        <Box>{name}</Box>
        <Box
          bgcolor={status ? db : "red"}
          color={"white"}
          p={"5px"}
          borderRadius={"5px"}
        >
          Delivered on {date}
        </Box>
        <Box p={"10px"} fontWeight={600}>{toIndianNumberingSystem(price)}</Box>
      </Box>
      <br />
    </>
  );
}
