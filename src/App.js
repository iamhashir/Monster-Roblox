import React, { Component } from "react";
import "./k.css";
import CardList from "./components/card-list/card-list.component";
import Search from "./components/search-box/SearchBox.component";
export default class app extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((res) => this.setState({ monsters: res }));
  }
  lasan=(e)=>{
        this.setState({ searchFiled: e.target.value });
  }
  render() {
    const { monsters, searchFiled } = this.state;

    const filteredMonster = monsters.filter((e) =>
      e.name.toLowerCase().includes(searchFiled.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="h1">Monsters Rolodex</h1>
        <Search
          placeholder="search bar"
          onchang={this.lasan}
        />

        <CardList className="sala" monsters={filteredMonster} />
      </div>
    );
  }
}
