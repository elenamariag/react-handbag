import React from 'react';
import './App.css';
import bag1 from './assets/bag_1.png';
import bag2 from './assets/bag_2.png';
import bag3 from './assets/bag_3.png';
import bag4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import ourStory from './assets/our_story.png';
import Product from "./component/Product";
import Button from "./component/Button";
import Tile from "./component/Tile";

function App() {
  return (
      <div>
        <h1>Handbags & Purses</h1>

        <Button />

        <main>
            <Product
                span="Best seller"
                image={bag1}
                title="The handy-bag"
                price="€400,-" />

            <Product
                span="Best seller"
                image={bag2}
                title="The stylish bag"
                price="€250,-" />

            <Product
                span="New collection"
                image={bag3}
                title="The simple bag"
                price="€300,-" />

            <Product
                span="New collection"
                image={bag4}
                title="The trendy bag"
                price="€150,-" />

        </main>

        <footer>

            <Tile
            title="The Brand"
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A accusantium ad, culpa dolor dolorem ducimus, harum hic illo iusto laudantium minus nesciunt nulla officia officiis sed,
                tempora temporibus unde voluptates."/>

            <Tile
                image={brand} />

            <Tile
                image={ourStory} />

            <Tile
                title="Our Story"
                text="Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A accusantium ad, culpa dolor dolorem ducimus, harum hic illo iusto laudantium minus nesciunt nulla officia officiis sed,
                tempora temporibus unde voluptates."/>

        </footer>
      </div>
)}

export default App;



