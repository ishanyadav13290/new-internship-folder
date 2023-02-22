import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import { AuthContext } from "../Context/Contexts";
import Carousel from "./Carousel/Carousel";
import OurPromise from "./OurPromises/OurPromises";
import ShopByBrands from "./ShopByBrands/ShopByBrands";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import WorkForUs from "./WorkWithUs/workWithUs";
import CustomerStories from "./Customer Stories/CustomerStories";
import WaveSection from "./WaveSection/WaveSection";
import Reasons from "./ReasonsForGofra/Reasons";

export default function HomePage() {
  let { isAuth, userName } = useContext(AuthContext);
  return (
    <Box m={"2% 0"} height={"100%"}>
      <Typography variant={"h5"} fontWeight={600}>
        {isAuth ? `Welcome ${userName}` : null}
      </Typography>

      <Carousel />

      <ShopByCategory />

      <ShopByBrands />
      <br />
      <br />
      <WorkForUs />
      <br />
      <br />
      <br />

      <OurPromise />

      <br />
      <br />
      <br />
      <br />
      <WaveSection content={<Reasons />} />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h4" textAlign={"left"} m={"0 5%"}>
        Customer Stories
      </Typography>
      <Box display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
        <CustomerStories
          items={[
            {
              name: "Malikrehan Meeranaik",
              work: "Software Engineer",
              img: "https://lumiere-a.akamaihd.net/v1/images/h_blackpanther_mobile_19754_57fe2288.jpeg?region=0,0,640,480",
              review:
                "Awesome Service. lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v",
              rating: "5 Stars",
            },
            {
              name: "Ishan Yadav",
              work: "Software Engineer",
              img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO3gKM3ALr2dg-aQfys-TH6jWJ6QFTB6cfLQ&usqp=CAU",
              review:
                "Best Quality.  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v",
              rating: "5 Stars",
            },
            {
              name: "Aayush Rathore",
              work: "Engineer",
              img: "https://seeklogo.com/images/P/pink-panther-logo-9961AB69EB-seeklogo.com.png",
              review:
                "Will Refer it to others.  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v",
              rating: "5 Stars",
            },
          ]}
        />
        <Box display={["none", "none", "block", "block"]}>
          <CustomerStories
            items={[
              {
                name: "Amit Chakraborty",
                work: "Software Engineer",
                img: "",
                review:
                  "Awesome Service. lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v",
                rating: "5 Stars",
              },
              {
                name: "Abhishek Kumar Singh",
                img: "https://qph.cf2.quoracdn.net/main-qimg-54caf0d24d3f87fb42b6532614ae7f9c-lq",
                work: "Inside Sales Executive",
                review:
                  "Best Quality.  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v",
                rating: "5 Stars",
              },
              {
                name: "Aayush Rathore",
                work: "Engineer",
                review:
                  "Will Refer it to others.  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v",
                rating: "5 Stars",
              },
            ]}
          />
        </Box>

        <Box display={["none", "none", "block", "block"]}>
          <CustomerStories
            items={[
              {
                name: "Raghbir Singh",
                work: "Software Engineer",
                img: "https://image.cnbcfm.com/api/v1/image/104819285-thor.jpg?v=1529476684&w=929&h=523&vtcrop=y",
                review:
                  "Awesome Service. lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v",
                rating: "5 Stars",
              },
              {
                name: "Ishan Yadav",
                work: "Software Engineer",
                review:
                  "Best Quality.  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v",
                rating: "5 Stars",
              },
              {
                name: "Aayush Rathore",
                work: "Engineer",
                review:
                  "Will Refer it to others.  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v  lorem loremloremloremlorem lorem lorem lorem lorem loremv v",
                rating: "5 Stars",
              },
            ]}
          />
        </Box>
      </Box>
      <br />
      <br />
    </Box>
  );
}
