import "./Home.css";

function Home() {
  return (
    <>
      <section className="home">

        <div className="Intro-text">
          <h1>Introduction</h1>
          <p>
            Welcome to MANA Restaurant, where great taste meets a warm and welcoming atmosphere. <br />
            We believe that food is not just about eating—it’s about creating memories, sharing happiness, and enjoying every bite.
          </p>
        </div>

        <div className="About-restaruant">
          <h1>About Food</h1>
          <p>
            We prepare our food using fresh ingredients and clean cooking methods. Every dish is made with care to give good taste and quality.<br />
            We focus on healthy, hygienic, and delicious food for all our customers.
          </p>
        </div>

        <div className="Awards">
          <h1>Menu</h1>

          <div className="menu-container">

            <div className="menu-item">
              <p>South Indian dishes</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMyksJqWOeE2O1AfuLFbSTpP5_eu8xwVe0KA&s" />
            </div>

            <div className="menu-item">
              <p>North Indian dishes</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvSiQLwX_r7qfez-rKqo9pASnPqm1khdsmWw&s" />
            </div>

            <div className="menu-item">
              <p>Fast food items</p>
              <img src="https://img.freepik.com/free-photo/top-view-fast-food-mix-mozzarella-sticks-club-sandwich-hamburger-mushroom-pizza-caesar-shrimp-salad-french-fries-ketchup-mayo-cheese-sauces-table_141793-3998.jpg" />
            </div>

            <div className="menu-item">
              <p>Beverages and desserts</p>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2n8ab7Rqf2yeAF2VRXKecAdUsZETRXXK9jw&s" />
            </div>

          </div>
        </div>  

        
        

      </section>
    </>
  );
}

export default Home;