
import {
  Button,
  // ClickAwayListener,
  FormControl,
  Grow,
  InputLabel,
  MenuItem,
  MenuList,
  Pagination,
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
import SkeletonCard from "./ProductsCards/Skeleton";

let LoadingArray= new Array(16).fill("a")

export default function Products() {
  let { allSellerItems, setAllSellerItems, isInputSearch} =
    useContext(AuthContext);
  let [isLoading, setIsLoading] = useState(false);
  let { category, query } = useParams();
  let [filterCategory, setFilterCategory] = useState("all");
  let [sortPrice, setSortPrice] = useState("");

  //Pagination
  let [page, setPage] = useState(1);
  let [totalPage, setTotalPage] = useState(1);

  //material UI
  const anchorRef = useRef(null);
  // for filter feature
  const [open, setOpen] = useState(false);
  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);

  // **************** inbuilt from Material UI for Filter UI
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

  // *********************************************************

  // filter functions
  let cat = filterCategory;
  const handleCategory = async (event) => {
    let val = event.target.value;
    cat = val;
    setFilterCategory(val);
    let temp;
    // console.log(event.target.value)
    if (query !== undefined && val != "all") {
      setIsLoading(true);
      temp = await axios.get(
        `https://sedate-laced-chestnut.glitch.me/allItems?q=${query}&category=${val}&_page=1&_limit=16`
      );
      setAllSellerItems(temp.data);
      console.log("1");
      setIsLoading(false);
    } else {
      console.log("ye");
      temp =
        val == "all"
          ? await axios.get(`https://sedate-laced-chestnut.glitch.me/allItems`)
          : await axios.get(
              `https://sedate-laced-chestnut.glitch.me/allItems?category=${val}`
            );
      setIsLoading(false);
    }
    // console.log(temp.data)
    setAllSellerItems(temp.data);
  };

  // sorting function
  let sort = "";
  const handlePrice = async (event) => {
    let val = event.target.value;
    sort = val;
    setSortPrice(val);
    let temp;
    // ?_sort=price&_order=desc
    if (cat == "all") {
      setIsLoading(true);
      if (val == "default" && category == "newarrivals") {
        setIsLoading(true);
        temp = await axios.get(
          `https://sedate-laced-chestnut.glitch.me/allItems?_page=${page}&_limit=16`
        );
        console.log("Ye");
        setIsLoading(false);
      } else if (val != "default" && category == "newarrivals") {
        setIsLoading(true);
        temp = await axios.get(
          `https://sedate-laced-chestnut.glitch.me/allItems?&_sort=price&_order=${val}&_page=${page}&_limit=16`
        );
        setIsLoading(false);
        console.log("Ye");
      } else if (val != "default" && category != "newarrivals") {
        setIsLoading(true);
        temp = await axios.get(
          `https://sedate-laced-chestnut.glitch.me/${category}?&_sort=price&_order=${val}&_page=${page}&_limit=16`
        );
        console.log("Ye");
        setIsLoading(false);
      } else {
        setIsLoading(true);
        temp = await axios.get(
          `https://sedate-laced-chestnut.glitch.me/${category}?&_sort=price&_order=${val}&_page=${page}&_limit=16`
        );
        console.log("Ye");
        setIsLoading(false);
      }
    }
    if (cat !== "all") {
      setIsLoading(true);
      temp = await axios.get(
        `https://sedate-laced-chestnut.glitch.me/allItems?category=${cat}&_sort=price&_order=${val}$_page=${page}&_limit=16`
      );
      console.log(cat,val);
      setIsLoading(false);
    }
    console.log(temp);
    setAllSellerItems(temp.data);
  };

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    if (isInputSearch) {
      (async () => {
        setIsLoading(true);
        let temp = await axios.get(
          `https://sedate-laced-chestnut.glitch.me/allItems?q=${query}&_page=${page}&_limit=16`
        );
        setTotalPage(temp.headers["x-total-count"]);
        setAllSellerItems(temp.data);
      })();
    }

    prevOpen.current = open;
    (async () => {
      setIsLoading(true);
      let temp =
        category == "newarrivals"
          ? await axios.get(
              `https://sedate-laced-chestnut.glitch.me/allItems?_page=${page}&_limit=16`
            )
          : await axios.get(
              `https://sedate-laced-chestnut.glitch.me/allItems?&category=${category}&_page=${page}&_limit=16`
            );
      // console.log(temp.headers["x-total-count"])
      setTotalPage(temp.headers["x-total-count"]);
      setAllSellerItems(temp.data);
      setIsLoading(false);
    })();
  }, [category, page, query]);
  return (
    <Box mt={["30%", "20%", "10%"]} display={["block", "block", "block"]}>
      <Box width={["100%", "100%", "20%"]}>
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
        // className={s.productsGrid}
        minHeight={"100vh"}
        width={["90%"]}
        display={["grid", "grid", "grid"]}
        gridTemplateColumns={[
          "repeat(1,1fr)",
          "repeat(2,1fr)",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}
        m={"auto"}
        gap={"20px"}
        // mr={"1%"}
        // flexWrap={"wrap"}
      >
        { isLoading ? (
          LoadingArray.map((el, i) => {
            return <SkeletonCard key={i} />;
          })
        ): (
          allSellerItems.map((el, i) => {
            return <MediaCard key={i} el={el} />;
          })
        )}
      </Box>
      <Box display={"flex"} justifyContent={"center"} m={"1% 0"}>
        <Pagination
          sx={{ color: "black" }}
          count={Math.ceil(totalPage / 16)}
          showFirstButton
          showLastButton
          variant="contained"
          page={page}
          onChange={(event, value) => {
            setPage(value);
          }}
        />
      </Box>
    </Box>
  );
}
