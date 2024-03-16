import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
const pizzaData = [
  {
    name: 'Focaccia',
    ingredients: 'Bread with italian olive oil and rosemary',
    price: 6,
    photoName: 'pizzas/focaccia.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Margherita',
    ingredients: 'Tomato and mozarella',
    price: 10,
    photoName: 'pizzas/margherita.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Spinaci',
    ingredients: 'Tomato, mozarella, spinach, and ricotta cheese',
    price: 12,
    photoName: 'pizzas/spinaci.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Funghi',
    ingredients: 'Tomato, mozarella, mushrooms, and onion',
    price: 12,
    photoName: 'pizzas/funghi.jpg',
    soldOut: false,
  },
  {
    name: 'Pizza Salamino',
    ingredients: 'Tomato, mozarella, and pepperoni',
    price: 15,
    photoName: 'pizzas/salamino.jpg',
    soldOut: true,
  },
  {
    name: 'Pizza Prosciutto',
    ingredients: 'Tomato, mozarella, ham, aragula, and burrata cheese',
    price: 18,
    photoName: 'pizzas/prosciutto.jpg',
    soldOut: false,
  },
];

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Pizza({ Pizzaobj }) {
  if (Pizzaobj.soldOut) {
    return (
      <li className='pizza sold-out'>
        <img src={Pizzaobj.photoName} alt={Pizzaobj.name} />
        <div>
          <h3>{Pizzaobj.name}</h3>
          <p>{Pizzaobj.ingredients}</p>
          <span>{Pizzaobj.price}</span>
          <span>SOLD OUT</span>
        </div>
      </li>
    );
  }
  return (
    <li className='pizza'>
      <img src={Pizzaobj.photoName} alt={Pizzaobj.name} />
      <div>
        <h3>{Pizzaobj.name}</h3>
        <p>{Pizzaobj.ingredients}</p>
        <span>{Pizzaobj.price}</span>
      </div>
    </li>
  );
}
function Header() {
  return (
    <header className='header footer  '>
      <h1>Myth Pizza and co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      {pizzaData.length ? (
        <>
          <p>
            Authhentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delcious
          </p>
          <ul className='pizzas '>
            {pizzaData.map((pizza) => (
              <Pizza Pizzaobj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>Sorry, we are still working on our</p>
      )}
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  console.log(isOpen);
  return (
    <footer className='footer'>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour} : 00 and {closeHour} :
          00
        </p>
      )}
    </footer>
  );
}
function Order({ closeHour, openHour }) {
  return (
    <div className='order'>
      <p>We are open untill {closeHour} : 00. Come visit us or order online</p>
      <button className='btn'>Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
