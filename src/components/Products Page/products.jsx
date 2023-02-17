import { Expand, ExpandMore } from "@mui/icons-material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  // ClickAwayListener,
  FormControl,
  Grow,
  InputLabel,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Select,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useContext, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../Context/Contexts";
import MediaCard from "./ProductsCards/ProductsCards";

export default function Products() {
  let { allSellerItems, setAllSellerItems } = useContext(AuthContext);
  let [isLoading, setIsLoading] = useState(false);
  let { category } = useParams();
  // reinforcedSteel
  // iBeam
  // Angles
  // diPipes
  // redOxidePrimar
  // plyboard
  // nails
  // hdpePipes
  // wires&Cables
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  let [filterCategory, setFilterCategory] = useState("all");
  let [sortPrice, setSortPrice] = useState("");

  // filter functions
  let cat=filterCategory
  const handleCategory = async (event) => {
    let val = event.target.value;
    cat=val
    setFilterCategory(val);
    // console.log(event.target.value)
    setIsLoading(true)
    let temp =
      val == "all"
        ? await axios.get(`https://sedate-laced-chestnut.glitch.me/allItems`)
        : await axios.get(
            `https://sedate-laced-chestnut.glitch.me/allItems?category=${val}`
          );
          setIsLoading(false)
    // console.log(temp.data)
    setAllSellerItems(temp.data);
  };

  let sort=""
  const handlePrice = async (event) => {
    let val = event.target.value;
    sort=val
    setSortPrice(val);
    let temp
    // ?_sort=price&_order=desc
    if(cat=="all"){
      setIsLoading(true)
      if(val == "default" && category == "newarrivals"){
        setIsLoading(true)
        temp= await axios.get(`https://sedate-laced-chestnut.glitch.me/allItems`)
        console.log("Ye")
        setIsLoading(false)
      } else if(val != "default" && category == "newarrivals"){
        setIsLoading(true)
         temp = await axios.get(
          `https://sedate-laced-chestnut.glitch.me/allItems?&_sort=price&_order=${val}`
        )
        setIsLoading(false)
        console.log("Ye")
      } else if(val!="default" && category!="newarrivals"){
        setIsLoading(true)
         temp = await axios.get(
          `https://sedate-laced-chestnut.glitch.me/${category}?&_sort=price&_order=${val}`
        )
        console.log("Ye")
        setIsLoading(false)
      } else {
        setIsLoading(true)
         temp = await axios.get(
            `https://sedate-laced-chestnut.glitch.me/${category}?&_sort=price&_order=${val}`
          )
          console.log("Ye")
          setIsLoading(false)
      }
    } 
    if(cat!=="all") {
      setIsLoading(true)
      temp = await axios.get(`https://sedate-laced-chestnut.glitch.me/allItems?category=${cat}&_sort=price&_order=${val}`)
      console.log("Ye")
      setIsLoading(false)
    }
    


    // let temp = val == "default" && category == "newarrivals" ? await axios.get(`https://sedate-laced-chestnut.glitch.me/allItems`)
        // : val != "default" && category == "newarrivals"
        // ? await axios.get(
        //     `https://sedate-laced-chestnut.glitch.me/allItems?&_sort=price&_order=${val}`
        //   )
          // :val!="default" && category!="newarrivals"?await axios.get(
          //   `https://sedate-laced-chestnut.glitch.me/${category}?&_sort=price&_order=${val}`
          // )
          // :await axios.get(
          //   `https://sedate-laced-chestnut.glitch.me/allItems?&_sort=price&_order=${val}`
          // )
    console.log(temp);
    setAllSellerItems(temp.data)
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
    (async () => {
      setIsLoading(true);
      let temp =
        category == "newarrivals"
          ? await axios.get("https://sedate-laced-chestnut.glitch.me/allItems")
          : await axios.get(
              `https://sedate-laced-chestnut.glitch.me/allItems?&category=${category}`
            );
      setAllSellerItems(temp.data);
      setIsLoading(false);
    })();
  }, [category]);
  return (
    <Box mt={["30%", "20%", "10%"]} display={["block", "block", "flex"]}>
      <Box width={["100%", "100%", "20%"]}>
        {/* <Accordion>
        <AccordionSummary
          expandIcon={<Expand />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
        <div>
          <Button
            sx={{ width: "100%" }}
            ref={anchorRef}
            id="composition-button"
            aria-controls={open ? "composition-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-haspopup="true"
            onClick={handleToggle}
          >
            Sorting & Filters
          </Button>
          <Popper
            open={open}
            anchorEl={anchorRef.current}
            role={undefined}
            placement="bottom-start"
            transition
            disablePortal
            sx={{ zIndex: "1", width: ["100%", "100%", "20%"] }}
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom-start" ? "left top" : "left bottom",
                }}
              >
                <Paper>
                  {/* <ClickAwayListener> */}
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <Typography width={"90%"} m={"auto"} textAlign={"left"}>
                      Filter By:
                    </Typography>
                    <MenuItem>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Category
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={filterCategory}
                          label="Category"
                          onChange={handleCategory}
                        >
                          <MenuItem value="all">Default</MenuItem>
                          <MenuItem value={"reinforcedSteel"}>
                            Reinforced Steel
                          </MenuItem>
                          <MenuItem value={"iBeam"}>iBeam</MenuItem>
                          <MenuItem value={"Angles"}>Angles</MenuItem>
                          <MenuItem value={"diPipes"}>diPipes</MenuItem>
                          <MenuItem value={"redOxidePrimar"}>
                            Red OXide Primar
                          </MenuItem>
                          <MenuItem value={"plyboard"}>Plyboard</MenuItem>
                          <MenuItem value={"nails"}>Nails</MenuItem>
                          <MenuItem value={"hdpePipes"}>HDPE Pipes</MenuItem>
                          <MenuItem value={"wires&Cables"}>
                            Wires & Cables
                          </MenuItem>
                        </Select>
                      </FormControl>
                    </MenuItem>
                    <Typography width={"90%"} m={"auto"} textAlign={"left"}>
                      Sort By:
                    </Typography>
                    <MenuItem>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          Price
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={sortPrice}
                          label="Price"
                          onChange={handlePrice}
                        >
                          <MenuItem value={"default"}>Default</MenuItem>
                          <MenuItem value={"desc"}>Hight to Low</MenuItem>
                          <MenuItem value={"asc"}>Low to High</MenuItem>
                        </Select>
                      </FormControl>
                    </MenuItem>
                  </MenuList>
                  {/* </ClickAwayListener> */}
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      </Box>
      <Box
        minHeight={"100vh"}
        display={["block", "block", "flex"]}
        width={["100%", "100%", "80%"]}
        ml={"auto"}
        flexWrap={"wrap"}
      >
        {allSellerItems.map((el, i) => {
          return (
            <Box
              key={i}
              sx={{
                textDecoration: "none",
                color: "black",
                display: "flex",
                margin: "1% auto",
                justifyContent: "center",
              }}
            >
              <MediaCard el={el} loading={isLoading} />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}

{
  /* <Accordion sx={{ width: "100%" }}>
  <AccordionSummary
    expandIcon={<ExpandMore />}
    aria-controls="panel1a-content"
    id="panel1a-header"
  >
    <Typography>By Category</Typography>
  </AccordionSummary>
  <AccordionDetails>
    <Box>
      <Button sx={{ display: "block" }}>reinforcedSteel</Button>
      <Button sx={{ display: "block" }}>iBeam Angles </Button>
      <Button sx={{ display: "block" }}>diPipes </Button>
      <Button sx={{ display: "block" }}>redOxidePrimar</Button>
      <Button sx={{ display: "block" }}>plyboard </Button>
      <Button sx={{ display: "block" }}>nails </Button>
      <Button sx={{ display: "block" }}>hdpePipes </Button>
      <Button sx={{ display: "block" }}>wires&Cables</Button>
    </Box>
  </AccordionDetails>
</Accordion>; */
}
