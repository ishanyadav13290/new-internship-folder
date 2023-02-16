import {
  ArrowLeft,
  ArrowRight,
  People,
  Roofing,
  Security,
  Sell,
} from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PromiseCard from "./PromiseCard";

export default function OurPromise() {
  let iconStyle = {
    color: "white",
    fontSize: "2.5rem",
  };
  function scrollToPosition(position) {
    var scrollableDiv = document.querySelector(".carouselContainer");
    scrollableDiv.scrollLeft += position;
  }
  return (
    <Box position={"relative"}>
      <Box textAlign={"left"} m={"0 5%"}>
        {" "}
        <Typography variant="h4" textAlign={"left"}>
          Our Promise
        </Typography>
      </Box>
      <Box
        className="carouselContainer"
        display={"flex"}
        alignItems={"center"}
        width={["90%", "90%", "80%"]}
        height={"200px"}
        m={"auto"}
        sx={{ overflowX: ["scroll", "scroll", "initial"] }}
      >
        <PromiseCard
          logo={<Security sx={iconStyle} />}
          title={"100% Original"}
        />
        <PromiseCard
          logo={<Roofing sx={iconStyle} />}
          title={"Under one Roof"}
        />
        <PromiseCard
          logo={<Sell sx={iconStyle} />}
          title={"Reasonalble Price"}
        />
        <PromiseCard
          logo={<People sx={iconStyle} />}
          title={"Experts to Help"}
        />
      </Box>
      <Button
        sx={{
          display: ["initial", "initial", "none"],
          position: "absolute",
          top: "50%",
          left: "5%",
        }}
        onClick={() => {
          scrollToPosition(-300);
        }}
      >
        <ArrowLeft />
      </Button>
      <Button
        sx={{
          display: ["initial", "initial", "none"],
          position: "absolute",
          top: "50%",
          right: "5%",
        }}
        onClick={() => {
          scrollToPosition(300);
        }}
      >
        <ArrowRight />
      </Button>
    </Box>
  );
}
