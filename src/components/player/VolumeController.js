import React, { useState } from "react";
import { IconButton, Grid, Slider } from "@material-ui/core/";
// import { VolumeUp } from "@material-ui/icons/"; 
import { FiVolume2 } from "react-icons/fi";

const VolumeController = ({ player, setPlayerState }) => {
  const [volume, setVolume] = useState(100);

  const volumeChange = (e, newVal) => {
    setVolume(newVal);
    player.volume = newVal / 100;
    //
  };


  return (

      <Grid container spacing={1} style={{ maxWidth: "200px" }}>
        <Grid item>
          <FiVolume2 color="primary" className="downfile" />
        </Grid>
        <Grid item xs={3}>
          <Slider value={volume} onChange={volumeChange} />
        </Grid>
      </Grid>
  );
};

export default VolumeController;
