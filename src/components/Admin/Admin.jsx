import { AttachFile, Delete } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { v4 as uid} from "uuid";
import Cards from "../Cart/Cards";
import { AuthContext } from "../Context/Contexts";
import toIndianNumberingSystem from "../Features/RupeeConversion";
import { lb } from "../Static Data/theme";
import AdminCards from "./AdminCards";

export default function Admin() {
  let { isAuth, userName, userID,allSellerItems, setAllSellerItems } = useContext(AuthContext);
  let imgInput = useRef(null);
  let prodName = useRef(null);
  let prodDesc = useRef(null);
  let prodPrice = useRef(0);
  let sellerAddress = useRef(null);
  let [Img, setImg] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png");
  let [isLoading, setIsLoading] = useState(false);

  // temporarily storing seller items to show in the panel
  let [tempSellerItems, setTempSellerITems] = useState([]);

  // Category funtion
  const [category, setCategory] = useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      let temp = await axios.get(
        `https://sedate-laced-chestnut.glitch.me/users/${userID}`
      );
      setTempSellerITems(temp.data.sellerItems);
      setAllSellerItems(temp.data.sellerItems)
      setIsLoading(false);
    })();
  }, []);

  function imageSelect() {
    imgInput.current.click();
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImg(reader.result);
    };
  };

  async function ListItem() {
    let name = prodName.current.childNodes[0].value;
    let description = prodDesc.current.value;
    let address = sellerAddress.current.childNodes[0].value;
    let price = Number(prodPrice.current.childNodes[0].value);

    let obj = {
      sellerItems: [
        ...tempSellerItems,
        { id:uid() ,name, description, address, price, Img, category },
      ],
    };
    setTempSellerITems(obj.sellerItems);
    setAllSellerItems(obj.sellerItems)

    prodName.current.childNodes[0].value = "";
    prodDesc.current.value = "";
    sellerAddress.current.childNodes[0].value = "";
    prodPrice.current.childNodes[0].value = "";
    setImg("https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png");
    await axios.patch(
      `https://sedate-laced-chestnut.glitch.me/users/${userID}`,
      obj
    );
    axios.post("https://sedate-laced-chestnut.glitch.me/allItems",
      obj.sellerItems[obj.sellerItems.length-1]
    );
  }
  return !isAuth ? (
    <Navigate to="/" />
  ) : (
    <Box minHeight={"100%"} mt={["30%", "20%", "10%"]}>
      <Typography variant="h6">{`Let's List up your services ${userName}`}</Typography>
      <Box display={["block", "flex"]} justifyContent={"center"}>
        <Box>
          <Box height={"200px"} width={"200px"} m={"auto"}>
            <img
              src={Img}
              alt="Product"
              style={{ height: "100%", width: "100%" }}
            />
          </Box>
          <Box
            overflow={"hidden"}
            width={"100%"}
            position={"relative"}
            height={"30px"}
          >
            <input
              onChange={handleFileChange}
              ref={imgInput}
              style={{ position: "absolute" }}
              type={"file"}
            />
            <Box
              display={"flex"}
              justifyContent={"center"}
              onClick={imageSelect}
              bgcolor={"white"}
              position={"absolute"}
              height={"100%"}
              sx={{ cursor: "pointer" }}
              fontWeight={700}
              width={"100%"}
              zIndex={1}
            >
              Attach Image
              <AttachFile sx={{ fontSize: "25px" }} />
            </Box>
          </Box>
        </Box>
        <Box m={"0 10px"} width={["95%", "60%"]}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <label>Name of the Product: </label>
            <Box width={"70%"}>
              <Input
                ref={prodName}
                type="text"
                sx={{ width: "100%" }}
                placeholder="Name your Product"
              />
            </Box>
          </Box>
          <br />
          <Box display={"flex"} justifyContent={"space-between"}>
            <label>Item Description: </label>
            <Box width={"70%"} height={"100px"}>
              <textarea
                ref={prodDesc}
                type="text"
                style={{ width: "99%", height: "90%", border: "none" }}
                placeholder="Describe your product in details"
              />
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <label>Category </label>
            <Box width={"70%"}>
              <FormControl variant="standard" fullWidth >
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
              <Select 
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={category}
                  label="Category"
                  onChange={handleChange}
                >
                  <MenuItem value={"reinforcedSteel"}>Reinforced Steel</MenuItem>
                  <MenuItem value={"iBeam"}>I Beam</MenuItem>
                  <MenuItem value={"Angles"}>Angles</MenuItem>
                  <MenuItem value={"diPipes"}>DI Pipes</MenuItem>
                  <MenuItem value={"redOxidePrimar"}>Red Oxide Primar</MenuItem>
                  <MenuItem value={"plyboard"}>Plyboard</MenuItem>
                  <MenuItem value={"nails"}>Nails</MenuItem>
                  <MenuItem value={"hdpePipes"}>HDPE Pipes</MenuItem>
                  <MenuItem value={"wires&Cables"}>Wires & Cables</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <label>Seller's Address: </label>
            <Box width={"70%"}>
              <Input
                ref={sellerAddress}
                type="text"
                sx={{ width: "100%" }}
                placeholder="Seller's Address"
              />
            </Box>
          </Box>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <label>Price (Rupees): </label>
            <Box width={"70%"}>
              <Input
                ref={prodPrice}
                type="number"
                sx={{ width: "100%" }}
                placeholder="Price (Rupees)"
              />
            </Box>
          </Box>
          <br />
          <Button
            sx={{ backgroundColor: lb }}
            onClick={ListItem}
            variant={"contained"}
          >
            Add
          </Button>
        </Box>
      </Box>
      <br />
      <br />
      <br />
      <Typography variant="h4">Your Additions</Typography>
      <br />
      {tempSellerItems.length == 0 ? (
        <Box minHeight={"200px"}>
          <Typography variant="h5">No Additions Yet</Typography>
        </Box>
      ) : (
        <Box
          minHeight={"200px"}
          maxHeight={"600px"}
          width={"90%"}
          margin={"auto"}
          sx={{ overflowX: "hidden" }}
        >
        {/* <AdminCards  /> */}
          {allSellerItems.map((el, i) => {
            return (
              <AdminCards key={i} data={el}  />
            );
          })}
        </Box>
      )}
    </Box>
  );
}