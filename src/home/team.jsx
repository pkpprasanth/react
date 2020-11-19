import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import {BrowserRouter as Link} from 'react-router-dom'

export default class Team extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h2>Welcome to team {this.props.name} </h2>
            <Link to="/toto">
                <Button color="white" className="is-rounded">
                  <span>Toto</span>
                </Button>
              </Link>


            </div>
        )
    }
}
