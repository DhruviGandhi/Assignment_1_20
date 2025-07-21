import fetch from "node-fetch";
async function fetch_google() {
    const res=await fetch("https://www.google.com/");
    console.log(res);
}

fetch_google();