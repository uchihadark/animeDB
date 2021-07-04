import React, { Component } from "react"
import TableContainer from "./anime-table/TableContainer"
import MenuBar from "./navbar/MenuBar"
import history from "../history"
import { Router, Route, Switch } from "react-router-dom"
import AnimeSearch from "../AnimeSearch"

export default class App extends Component {
    render(){
        return (
            <Router history = {history}>
                <MenuBar />
                <Switch>
                    <Route path = "/home" exact component = {TableContainer}/>
                    <Route path = "/" exact component = {AnimeSearch}/>
                </Switch>
            </Router>
        )
    }

}

