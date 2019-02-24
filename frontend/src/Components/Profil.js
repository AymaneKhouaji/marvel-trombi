import React, { Component } from "react";
import InfiniteScroll from 'react-infinite-scroller';
 
const DEFAULT_LIMIT = 20;

class Profil extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
      hasMoreItems: true
    };
  }

  loadHeroes() {
    let offset = this.state.heroes.length

    fetch(`http://localhost:3001/api/marvel/heroes?offset=${offset}&limit=${DEFAULT_LIMIT}`)
    .then(response => response.json())
    .then(data => {
      let heroes = this.state.heroes;

      data.data.results.forEach(hero => {
        heroes.push(hero)
      });

      this.setState({ heroes: heroes })
    });
  }

  render() {
    const loader = <div key='loader' className="loader">Loading ...</div>;
    const items = [];

    this.state.heroes.map((hero, i) => {
        return items.push(
          <div className="profil" key={hero.id}>
            <img src={hero.thumbnail.path +'.'+ hero.thumbnail.extension} className="thumbnail" alt="thumbnail" ></img>          
            <h1 key={hero.id}> {hero.name} </h1>
          </div>
        );
    });

    return (
      <InfiniteScroll
          pageStart={0}
          loadMore={this.loadHeroes.bind(this)}
          hasMore={this.state.hasMoreItems}
          loader={loader}>

          <div className="Profils grid-container">
              {items}
          </div>
      </InfiniteScroll>
    );
  }
}

export default Profil;
