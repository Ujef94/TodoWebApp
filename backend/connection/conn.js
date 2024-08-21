const express = require("express");
const mongoose = require("mongoose");

const conn = async (req, res) => {
  try {
    await mongoose
      .connect("mongodb+srv://ujef:ujefff22@cluster0.mqh2btg.mongodb.net/")
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
