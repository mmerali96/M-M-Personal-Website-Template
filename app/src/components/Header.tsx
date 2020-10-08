import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import EmailIcon from "@material-ui/icons/Email";
import { Link as RouterLink, HashRouter as Router } from "react-router-dom";

import "./Header.css";
interface IHeaderState {}

interface IHeaderProps {
  FirstName?: string;
  LastName?: string;
  GitHub?: string;
  LinkedIn?: string;
  Email?: string;
  twitterURL?: string;
}
class Header extends React.Component<IHeaderProps, IHeaderState> {
  render() {
    const name = this.props.FirstName + " " + this.props.LastName;
    return (
      <div className="personal-site-header">
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <div className="header-button-group-left">
              <Router>
                <Button color="inherit" component={RouterLink} to="/">
                  {name}
                </Button>
                <Button color="inherit" component={RouterLink} to="/projects">
                  Projects
                </Button>
                <Button color="inherit" component={RouterLink} to="/resume">
                  Resume
                </Button>
              </Router>
            </div>
            <div className="header-button-group-right">
              {this.props.GitHub !== "" && (
                <IconButton color="inherit" href={`${this.props.GitHub}`}>
                  <GitHubIcon style={{ color: "white" }} />
                </IconButton>
              )}
              {this.props.LinkedIn !== "" && (
                <IconButton color="inherit" href={`${this.props.LinkedIn}`}>
                  <LinkedInIcon style={{ color: "white" }} />
                </IconButton>
              )}
              {this.props.twitterURL !== "" && (
                <IconButton color="inherit" href={`${this.props.twitterURL}`}>
                  <TwitterIcon style={{ color: "white" }} />
                </IconButton>
              )}
              {this.props.Email !== "" && (
                <IconButton color="inherit" href={`mailto:${this.props.Email}`}>
                  <EmailIcon style={{ color: "white" }} />
                </IconButton>
              )}
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
