import { Box } from "@mui/system";
import toIndianNumberingSystem from "../Features/RupeeConversion";

export default function NewArrivalCard({ el }) {
  console.log(el)
  return (
    <Box
    position={'reltive'}
      mb={["30px", "10px"]}
      display={["block", "flex"]}
      justifyContent={"space-around"}
    >
      <Box
        maxHeight={"150px"}
        maxWidth={"150px"}
        m={["0 auto 5% auto", "auto"]}
        sx={{ objectFit: "cover" }}
      >
        <img
          src={el.Img}
          alt="blank"
          style={{ height: "100%", width: "100%" }}
        />
      </Box>
      <Box
        bgcolor={"rgb(203, 255, 80)"}
        borderRadius={"5px"}
        p={"5px"}
        position={"absolute"}
        sx={{ top: 15, right: 15 }}
        variant={"span"}
      >
        <b>Category:</b> {el.category}
      </Box>
      <Box width={["100%", "70%"]} textAlign={"left"}>
        <Box display={"flex"} justifyContent={"flex-start"}>
          <Box
            width={["125px", "150px"]}
            fontWeight={900}
            fontSize={["15px", "20px"]}
          >
            Name:
          </Box>
          <Box m={["0", "0 0 0 5%"]} fontSize={["13px", "15px"]}>
            {el.name}
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"flex-start"}>
          <Box
            width={["125px", "150px"]}
            fontWeight={900}
            fontSize={["15px", "20px"]}
          >
            Description:
          </Box>
          <Box m={["0", "0 0 0 5%"]} fontSize={["13px", "15px"]}>
            {el.description.slice(0, 100)}...
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"flex-start"}>
          <Box
            width={["125px", "150px"]}
            fontWeight={900}
            fontSize={["15px", "20px"]}
          >
            Address:
          </Box>
          <Box m={["0", "0 0 0 5%"]} fontSize={["13px", "15px"]}>
            {el.address}
          </Box>
        </Box>
        <Box display={"flex"} justifyContent={"flex-start"}>
          <Box
            width={["125px", "150px"]}
            fontWeight={900}
            fontSize={["15px", "20px"]}
          >
            Price:
          </Box>
          <Box m={["0", "0 0 0 5%"]} fontSize={["13px", "15px"]}>
            <b>Rs {toIndianNumberingSystem(el.price)}</b>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
