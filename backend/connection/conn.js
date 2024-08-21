const express = require("express");
const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect("Enter Your Connection String")
      .then(() => {
        console.log("Connected");
      });
  } catch (error) {
    res.status(401).json({
      message: "Not Connected",
    });
  }
};
conn();
