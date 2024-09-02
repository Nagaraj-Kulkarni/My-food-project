import {
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import MenuCard from "./MenuCard";

const categories = [
  "Thali",
  "Snacks",
  "Breads",
  "Rice Items",
  "Indian Main Course",
];
const foodTypes = [
  { label: "All", value: "all" },
  { label: "vegetarian only", value: "vegetarian" },
  { label: "Non-vegetarian only", value: "non-vegetarian" },
  { label: "seasonal", value: "seasonal" },
];

const menu=[1,1,1,1,1,1]

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("");
  const handleFilter = (e) => console.log(e.target.value, e.target.name);
  return (
    <div className="px-5 lg:px-20">
      <section>
        <h3 className="text-gray-500 py-2 mt-10">Home/india/My Fast Food/3</h3>
        <div>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://c8.alamy.com/comp/2M92K5J/super-bowl-or-football-theme-food-frame-pizza-hamburgers-wings-snacks-and-sides-above-view-on-a-dark-wood-background-2M92K5J.jpg"
                alt=""
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://c8.alamy.com/comp/2M92K5J/super-bowl-or-football-theme-food-frame-pizza-hamburgers-wings-snacks-and-sides-above-view-on-a-dark-wood-background-2M92K5J.jpg"
                alt=""
              />
            </Grid>

            <Grid item xs={12} lg={6}>
              <img
                className="w-full h-[40vh] object-cover"
                src="https://c8.alamy.com/comp/2M92K5J/super-bowl-or-football-theme-food-frame-pizza-hamburgers-wings-snacks-and-sides-above-view-on-a-dark-wood-background-2M92K5J.jpg"
                alt=""
              />
            </Grid>
          </Grid>
        </div>

        <div className="pt-3 pb-5">
          <h1 className="text-4xl py-1 font-semibold">My Tasty Food</h1>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 mt-1">
              food-frame-pizza-hamburgers-wings-snacks
            </p>
            <p className="text-grey-500 flex items-center gap-3">
              <LocationOnIcon />
              <span>Bangalore, Karnataka</span>
            </p>

            <p className="text-grey-500 flex items-center gap-3">
              <CalendarTodayIcon />
              <span>Mon-Sun: 09:00 AM - 09:00 PM(Today)</span>
            </p>
          </div>
        </div>
      </section>
      <Divider />

      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Type
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {foodTypes.map((item, index) => (
                    <FormControlLabel
                      key={item.value}
                      value={item.value}
                      control={<Radio />}
                      label={item.label}
                      sx={{ color: "gray" }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>

            <Divider />
            <div>
              <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>
                Food Category
              </Typography>

              <FormControl className="py-10 space-y-5" component={"fieldset"}>
                <RadioGroup
                  onChange={handleFilter}
                  name="food_type"
                  value={foodType}
                >
                  {categories.map((item, index) => (
                    <FormControlLabel
                      key={item}
                      value={item}
                      control={<Radio />}
                      label={item}
                      sx={{ color: "gray" }}
                    />
                  ))}
                </RadioGroup>
              </FormControl>
            </div>
          </div>
        </div>
        <div className="space-y-5 lg:w-[80%] lg:pl-10">
            {menu.map((item)=><MenuCard/>)}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;