import React, { Component } from "react"
import Table from "./Table.js"
import CD from "../../res/gifs/chika_dance.gif"
import Header from "../Header.js"

export default class TableContainer extends Component {
    state = {
        data: []
    }

    componentDidMount(){
        fetch('http://localhost:4000/getAllAnime')
            .then(res => res.json())
            .then(json => {
                this.setState({ data : json})
            })
    }

    render(){
        console.log(this.state)

        return(
            <div>
            <Header />
                <div className="centered-row">
                    <img src = {CD} alt = "welcome"/>
                </div>
                <Table data = {this.state.data} />
            </div>
        )
    }

}

