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

// STAPPENPLAN
// 1. Maak een components-map voor het component
// 2. Maak een JavaScript-bestandje met de naam van jouw component, met een hoofdletter! (`StudentReview.js`) En een CSS bestandje met dezelfde naam (`StudentReview.css`)
// 3. Importeer React
// 4. Koppel het CSS bestandje aan het JS bestand
// 5. Schrijf een functie (met hoofdletter!) die wat simpele HTML returned
// 6. Exporteer de functie (component) in zijn geheel met `export default FunctieNaam`
// 7. Importeer de functie (component) in App.js en gebruik het als custom component op de pagina (check ook even of het werkt!)
// 7. Kopieer de code uit het globale bestand naar jouw component-functie
// 8. Bekijk dan goed welke stukjes data dynamisch zijn (dus welke content verschilt er altijd? Dus nu bijvoorbeeld de naam en de review)
// 9. Geef de dynamische stukjes data door als properties vanuit App.js
// 10. Ontvang die dynamische stukjes data als properties door props.studentName en

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
              <section>
                  <h2>Our Brand</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      A accusantium ad, culpa dolor dolorem ducimus, harum hic illo iusto laudantium minus nesciunt nulla officia officiis sed,
                      tempora temporibus unde voluptates.</p>
              </section>

              <section>
              <img src={brand}/>
              </section>

              <section>
                  <img src={ourStory}/>
              </section>

              <section>
                  <h2>Our Story</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet beatae commodi culpa doloremque doloribus dolorum est eveniet excepturi,
                      exercitationem explicabo harum illo in iste nam odit perferendis quam velit voluptatibus.</p>
              </section>

        </footer>
      </div>
)}

export default App;



