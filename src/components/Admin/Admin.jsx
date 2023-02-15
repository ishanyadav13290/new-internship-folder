import { AttachFile } from "@mui/icons-material";
import { Button, Input, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import toIndianNumberingSystem from "../Features/RupeeConversion";

export default function Admin() {
  let { isAuth, userName, userID } = useContext(AuthContext);
  let imgInput = useRef(null);
  let prodName = useRef(null);
  let prodDesc = useRef(null);
  let prodPrice = useRef(0);
  let sellerAddress = useRef(null);
  let [Img, setImg] = useState("https://i.stack.imgur.com/mwFzF.png");

  // temporarily storing seller items to show in the panel
  let [tempSellerItems, setTempSellerITems] = useState([]);

  useEffect(() => {
    (async () => {
      let temp = await axios.get(
        `https://sedate-laced-chestnut.glitch.me/users/${userID}`
      );
      // console.log(temp.data.sellerItems)
      setTempSellerITems(temp.data.sellerItems);
    })();
  }, [tempSellerItems,userID]);

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
        { name, description, address, price, Img },
      ],
    };

    await axios.patch(
      `https://sedate-laced-chestnut.glitch.me/users/${userID}`,
      obj
    );
    axios.post("https://sedate-laced-chestnut.glitch.me/allItems", {
      name,
      description,
      address,
      price,
      Img,
    });
    prodName.current.childNodes[0].value = "";
    prodDesc.current.value = "";
    sellerAddress.current.childNodes[0].value = "";
    prodPrice.current.childNodes[0].value = "";
    setImg("https://i.stack.imgur.com/mwFzF.png");
    setTempSellerITems(obj.sellerItems);
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
              <AttachFile />
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
          <Button sx={{backgroundColor:"rgb(246, 126, 34)"}} onClick={ListItem} variant={"contained"}>
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
        <Box minHeight={"200px"}>
          {tempSellerItems.map((el, i) => {
            return (
              <Box
                key={i}
                width={["100%","80%"]}
                display={["block", "flex"]}
                justifyContent={"space-between"}
                m={"1% auto "}
                padding={"10px 0"}
                sx={{
                  "&:hover": {
                    boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;"
,
                    borderRadius:"50px"
                  },
                }}
              >
                <Box
                  sx={{ objectFit: "cover" }}
                  width={"30%"}
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  m={["auto", "0 5%"]}
                >
                  <img
                    src={el.Img}
                    alt="List"
                    style={{ height: "80%", maxWidth: "100%" }}
                  />
                </Box>
                <Box m={"auto"} width={["60%","60%","80%"]} height={["100%"]}  textAlign={"left"}>
                  <Box display={"flex"}  minHeight={["auto","auto","50px"]}>
                  <Box minWidth={"100px"}><b>Name:</b></Box> 
                  <Box>{el.name}</Box>
                  </Box>
                  <Box maxHeight={"100px"} sx={{overflowY:"scroll"}} >
                  <Box display={"flex"} minHeight={["auto","auto","50px"]}>
                    <Box minWidth={"100px"}><b>Describe:</b></Box> 
                    <Box width={"100%"}>{el.description}</Box>
                  </Box>
                  </Box>
                  <Box display={"flex"} minHeight={["auto","auto","50px"]}>
                  <Box minWidth={"100px"}><b>Price:</b></Box> 
                  <Box><b><em>{toIndianNumberingSystem(el.price)}</em></b></Box>
                   </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      )}
    </Box>
  );
}
