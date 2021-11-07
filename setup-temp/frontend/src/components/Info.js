import React, { useState, useEffect } from "react";
import { Grid, Button, Typography, IconButton } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import Paper from "@material-ui/core/Paper";

export default function Info(props) {
  window.addEventListener(
    "keyup",
    function (e) {
      if (e.keyCode == 27) history.back();
    },
    false
  );
  return (
    <Grid container spacing={10}>
      <Grid item xs={4}>
        <Typography variant="h4" component="h2">
          Mi is az a Betyárcsárda?
        </Typography>
        <Typography variant="body1" component="h4">
          <hr />
          <i>
            A csárda felbérelt költője jelenleg nincsen kiszámítható állapotban
          </i>
          <br />
          <br />
          <b>A probléma megoldásáig elégedjetek meg ezzel:</b>
          <br />
          <br />A Betyárcsárda egy közös zenehallgatásra kifejlesztett
          webapplikáció, ami jelenleg még nem végleges állapotában van.
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h4" component="h2">
          Hogyan működik?
        </Typography>
        <Typography variant="body1" component="h4">
          <hr />
          <b>
            <i>Most komolyan? Csak rájössz, nem,</i>
          </b>
        </Typography>
      </Grid>
      <Grid item xs={4}>
        <Typography variant="h4" component="h2">
          További információ...
        </Typography>
        <Typography variant="body1" component="h4">
          <hr />
          <dl>
            <dt>
              <b>Fejlesztő:</b>
            </dt>
            <dd>
              <i>Zrinszki Ármin</i>
            </dd>
            <dt>
              <b>Verzió:</b>
            </dt>
            <dd>
              <i>1.0</i>
            </dd>
            <dt>
              <b>Email:</b>
            </dt>
            <dd>
              <i>zrinszki.armin@gmail.com</i>
            </dd>
          </dl>
        </Typography>
      </Grid>
    </Grid>
  );
}
