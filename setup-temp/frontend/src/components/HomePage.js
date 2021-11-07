import React, { Component } from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Tooltip from "@material-ui/core/Tooltip";
import Room from "./Room";
import {
  Grid,
  Button,
  ButtonGroup,
  Typography,
  IconButton,
} from "@material-ui/core";
import InfoIcon from "@material-ui/icons/Info";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Info from "./Info";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roomCode: null,
    };
    this.clearRoomCode = this.clearRoomCode.bind(this);
  }

  async componentDidMount() {
    fetch("/api/user-in-room")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ roomCode: data.code });
      });
  }

  renderHomePage() {
    return (
      <Grid container spacing={3}>
        <Grid container spacing={3}>
          <Grid item xs={20} align="top">
            <Tooltip
              title={
                <React.Fragment>
                  <Typography
                    color="inherit"
                    variant="caption"
                    display="block"
                    gutterBottom
                  >
                    A Betyárcsárda használatához szükséged lesz egy Spotify
                    fiókra. További információért katt a gombra.
                  </Typography>
                </React.Fragment>
              }
            >
              <IconButton href="./info">
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid item xs={12} align="center">
          <Typography variant="h3" compact="h3">
            Betyár csárda
          </Typography>
        </Grid>
        <Grid item xs={12} align="center">
          <ButtonGroup disableElevation variant="contained" color="primary">
            <Button color="primary" to="/join" component={Link}>
              Térj be egy csárdába!
            </Button>
            <Button color="secondary" to="/create" component={Link}>
              Alapíts TE egy csárdát!
            </Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    );
  }

  clearRoomCode() {
    this.setState({
      roomCode: null,
    });
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return this.state.roomCode ? (
                <Redirect to={`/room/${this.state.roomCode}`} />
              ) : (
                this.renderHomePage()
              );
            }}
          />
          <Route path="/join" component={RoomJoinPage} />
          <Route path="/info" component={Info} />
          <Route path="/create" component={CreateRoomPage} />
          <Route
            path="/room/:roomCode"
            render={(props) => {
              return <Room {...props} leaveRoomCallback={this.clearRoomCode} />;
            }}
          />
        </Switch>
      </Router>
    );
  }
}
