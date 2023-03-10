import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContext } from "../Context/Contexts";
import axios from "axios";
import { v4 as uid } from "uuid";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { AttachFile, Sell } from "@mui/icons-material";
import { db, lb } from "../Static/theme";
import SellerCards from "./SellerCards";
import { Navigate } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        Gofra
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SellerPanel() {
  let { isAuth,trigger, userName, userID, allSellerItems, setAllSellerItems, pendingItems, setPendingItems } =
    React.useContext(AuthContext);
  let imgInput = React.useRef(null);
  let [isLoading, setIsLoading] = React.useState(false);
  let [Img, setImg] = React.useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
  );
  // temporarily storing seller items to show in the panel
  let [tempSellerItems, setTempSellerITems] = React.useState([]);
  let [tempPendingItems, setTempPendingItems] = React.useState([])

  React.useEffect(() => {
    (async () => {
      setIsLoading(true);
      let temp = await axios.get(
        `http://localhost:3001/users/${userID}`
        // `https://sedate-laced-chestnut.glitch.me/users/${userID}`
      );
      setTempSellerITems(temp.data.sellerItems);
      setTempPendingItems(temp.data.pendingItems)
      setAllSellerItems(temp.data.sellerItems);
      setIsLoading(false);
    })();
  }, []);

  // Category funtion
  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
    setCategory(event.target.value);
  };
  let [brand, setBrand] = React.useState([]);
  const handleBrandChange = (event) => {
    setBrand(event.target.value);
  };

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    trigger("lightgreen", "Product Sent For Approval")
    const data = new FormData(event.currentTarget);
    let name = data.get("prodName");
    let description = data.get("prodDescription");
    let address = data.get("sellerAddress");
    let price = Number(data.get("price"));

    // let obj = {
    //   sellerItems: [
    //     ...tempSellerItems,
    //     { name, description, address, price, Img, category, brand,sellerID:userID },
    //   ],
    // };
    let obj = {
      pendingItems:[
        ...tempPendingItems,
        {name,
          description,
          address,
          price,
          Img,
          category,
          brand,
          sellerID: userID,
          status: "pending",}
      ]
    };
    event.currentTarget.reset();
    setCategory("default");

    // setTempSellerITems(obj.sellerItems);
    // setAllSellerItems(obj.sellerItems);
    setTempPendingItems(obj.pendingItems)
    setPendingItems(obj.pendingItems)

    setImg(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png"
    );

    // await axios.post(
    //   "http://localhost:3001/allItems",
    //   obj.sellerItems[obj.sellerItems.length - 1]
    // );

    // let temp = await axios.get(`http://localhost:3001/allItems`);

    // let tempData = temp.data.data;
    // tempData = tempData[tempData.length - 1];
    // obj.sellerItems[obj.sellerItems.length - 1]["_id"] = tempData["_id"];
    // await axios.patch(`http://localhost:3001/users/${userID}`, obj);

    await axios.post("http://localhost:3001/verifyItems", obj.pendingItems[obj.pendingItems.length-1]);
    let temp = await axios.get(`http://localhost:3001/verifyItems`);

    let tempData = temp.data.data;
    tempData = tempData[tempData.length - 1];
    obj.pendingItems[obj.pendingItems.length - 1]["_id"] = tempData["_id"];

    axios.patch(`http://localhost:3001/users/${userID}`,obj)
    
  };
  return !isAuth ? (
    <Navigate to="/login" />
  ) : (
    <>
      <Box
        display={["block", "block", "flex", "flex"]}
        mt={["15%", "15%"]}
        justifyContent={"center"}
        m={"auto"}
      >
        <Box height={"fit-content"}>
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
        <Box m={["auto", "auto", "0 10px", "0 10px"]} width={["95%", "60%"]}>
          <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: lb }}>
                  <Sell />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Let's list up your services {userName}
                </Typography>
                <Box
                  component="form"
                  noValidate
                  onSubmit={handleSubmit}
                  sx={{ mt: 3 }}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        name="prodName"
                        required
                        fullWidth
                        id="prodName"
                        label="Product Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="prodDescription"
                        label="Product Description"
                        name="prodDescription"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="sellerAddress"
                        label="Seller's Address"
                        name="sellerAddress"
                        autoComplete="address"
                      />
                    </Grid>
                    <Grid item xs={12} width={"100%"}>
                      <Box>
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Category
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue="default"
                            placeholder="Select Category"
                            value={category}
                            label="Category"
                            onChange={handleChange}
                          >
                            <MenuItem value={"default"}>
                              Select Category
                            </MenuItem>
                            <MenuItem value={"reinforcedSteel"}>
                              Reinforced Steel
                            </MenuItem>
                            <MenuItem value={"iBeam"}>I Beam</MenuItem>
                            <MenuItem value={"Angles"}>Angles</MenuItem>
                            <MenuItem value={"diPipes"}>DI Pipes</MenuItem>
                            <MenuItem value={"redOxidePrimar"}>
                              Red Oxide Primar
                            </MenuItem>
                            <MenuItem value={"plyboard"}>Plyboard</MenuItem>
                            <MenuItem value={"nails"}>Nails</MenuItem>
                            <MenuItem value={"hdpePipes"}>HDPE Pipes</MenuItem>
                            <MenuItem value={"wires&Cables"}>
                              Wires & Cables
                            </MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12} width={"100%"}>
                      <Box>
                        <FormControl variant="outlined" fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Brand
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            defaultValue="default"
                            placeholder="Select Brand"
                            value={brand}
                            label="Category"
                            onChange={handleBrandChange}
                          >
                            <MenuItem value={"default"}>Select Brand</MenuItem>
                            <MenuItem value={"kohler"}>Kohler</MenuItem>
                            <MenuItem value={"kajaria"}>Kajaria</MenuItem>
                            <MenuItem value={"hettich"}>Hettich</MenuItem>
                            <MenuItem value={"centuryply"}>
                              Century Ply
                            </MenuItem>
                            <MenuItem value={"philips"}>Philips</MenuItem>
                            <MenuItem value={"ipsa"}>IPSA</MenuItem>
                            <MenuItem value={"somany"}>Somany</MenuItem>
                            <MenuItem value={"havells"}>Havells</MenuItem>
                            <MenuItem value={"bhutan"}>Bhutan</MenuItem>
                            <MenuItem value={"other"}>Others...</MenuItem>
                          </Select>
                        </FormControl>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        type={"number"}
                        required
                        fullWidth
                        id="price"
                        label="Price"
                        name="price"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    // onClick={}
                    variant="contained"
                    sx={{
                      mt: 3,
                      mb: 2,
                      bgcolor: lb,
                      "&:hover": {
                        bgcolor: db,
                      },
                    }}
                  >
                    List It
                  </Button>
                </Box>
              </Box>
            </Container>
          </ThemeProvider>
        </Box>
      </Box>
      {tempSellerItems.length == 0 ? (
        <Box minHeight={"200px"}>
          <Typography variant="h5">No Additions Yet</Typography>
        </Box>
      ) : (
        <>
          <br />
          <Typography variant="h5" fontWeight={700}>
            Your Listed Products
          </Typography>
          <Box
            minHeight={"200px"}
            maxHeight={"600px"}
            width={"90%"}
            margin={"auto"}
            sx={{ overflowX: "hidden" }}
          >
            {/* <AdminCards  /> */}
            {allSellerItems.map((el, i) => {
              return <SellerCards key={i} data={el} />;
            })}
          </Box>
        </>
      )}
      <Copyright sx={{ mt: 5 }} />
    </>
  );
}
