import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Grid,
} from "@mui/material";

function From() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    number: "",
    gender: "",
    country: "",
    subscribe: false,
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInput((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <Box
      sx={{ width: "100%", background: "#475756", color: "#fff", padding: 2 }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Details Submission
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="text"
              placeholder="Enter your name"
              value={input.name}
              onChange={handleChange}
              name="name"
              label="Name"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="email"
              placeholder="Enter your email"
              value={input.email}
              onChange={handleChange}
              name="email"
              label="Email"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="password"
              placeholder="Enter your password"
              value={input.password}
              onChange={handleChange}
              name="password"
              label="Password"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              type="number"
              placeholder="Enter your number"
              value={input.number}
              onChange={handleChange}
              name="number"
              label="Number"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset" fullWidth margin="normal">
              <FormLabel component="legend" sx={{ color: "#fff" }}>
                Gender
              </FormLabel>
              <RadioGroup
                name="gender"
                value={input.gender}
                onChange={handleChange}
                row
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControl fullWidth margin="normal" variant="outlined">
              <InputLabel>Country</InputLabel>
              <Select
                name="country"
                value={input.country}
                onChange={handleChange}
                label="Country"
                required
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="United States">United States</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="United Kingdom">United Kingdom</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="China">China</MenuItem>
                {/* Add more countries as needed */}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={input.subscribe}
                  onChange={handleChange}
                  name="subscribe"
                />
              }
              label="Subscribe to newsletter"
              sx={{ color: "#fff" }}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={input.acceptTerms}
                  onChange={handleChange}
                  name="acceptTerms"
                  required
                />
              }
              label="I accept the terms and conditions"
              sx={{ color: "#fff" }}
            />
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              type="submit"
              color="success"
              variant="contained"
              sx={{ background: "red", margin: "20px" }}
            >
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default From;
