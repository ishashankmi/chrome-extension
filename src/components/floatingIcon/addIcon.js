import * as React from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import LinkContext from "../../context/addLink";
import { useContext, useEffect, useState } from "react";
import { genUid } from "../../utils/getUid";
import { toUpperCase } from "../../utils/toUpperCase";

export default function FloatingActionButtonSize() {
  const { userLinks, setUserLinks } = useContext(LinkContext);

  function addLink(title) {

    title = toUpperCase(title);
  
    const id = genUid();

    if(1){

      const getLocalLinks = localStorage.getItem('links');
      const newAr = [];

      if (getLocalLinks) {
        // Parse the string data into a JSON object and push to newAr
        newAr.push(...JSON.parse(getLocalLinks));
      }

      // Add the new object to the newAr array
      newAr.push({ title, id: id, img: '', url: new Date() });

      // Store the updated array in localStorage
      localStorage.setItem('links', JSON.stringify(newAr));


      //setUserLinks(newAr)
      console.log(JSON.parse(localStorage.getItem('links')));
    }else{

    //--------------------------------------------------


      window.chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {    
        const getLocalLinks = localStorage.getItem('links');
        const newAr = [];
        if (getLocalLinks) {
          // Parse the string data into a JSON object and push to newAr
          newAr.unshift(...JSON.parse(getLocalLinks));
        }
        // Add the new object to the newAr array
        newAr.unshift({ title, id: id, img: tabs[0].favIconUrl, url: tabs[0].url });
        // Store the updated array in localStorage
        localStorage.setItem('links', JSON.stringify(newAr));
        setUserLinks(JSON.parse(localStorage.getItem('links')))
      });
    }


  }
 
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      {/* <Fab size="small" color="secondary" aria-label="add">
        <AddIcon />
      </Fab> */}
      <Fab
        onClick={() => {
          const prom = prompt('Enter Title');

          if(prom){
            addLink(prom);
          }
          
        }}
        size="medium"
        color="secondary"
        aria-label="add"
      >
        <AddIcon />
      </Fab>
      {/* <Fab color="secondary" aria-label="add">
        <AddIcon />
      </Fab> */}
    </Box>
  );
}
