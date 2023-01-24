// require("dotenv").config();

// require("dotenv").config({ path: ".env" });

// import dotenv from 'dotenv'
// dotenv.config()

// process.env.PINATA_API_KEY  for dotenv in react

export const PINATA_API_KEY = import.meta.env.VITE_PINATA_API_KEY;
export const PINATA_API_SECRET_KEY = import.meta.env.VITE_PINATA_API_SECRET_KEY;
export const PINATA_API_JWT = import.meta.env.VITE_PINATA_API_JWT;

