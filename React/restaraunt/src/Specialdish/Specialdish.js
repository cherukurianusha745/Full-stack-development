import "./Specialdish.css";

function Specialdish() {
  return (
    <div className="container">
      <h1>Special Dishes</h1>

      <h2>North Indian</h2>
      <div className="menu-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7GewJ-SNNLuPeds2xfmEcxcllP7noKLoP-Q&s"
          alt="North Indian"
        />
        <ul>
          <li>Shahi Paneer – ₹180</li>
          <li>Kadai Paneer – ₹170</li>
          <li>Dal Tadka – ₹140</li>
          <li>Butter Naan – ₹40</li>
        </ul>
      </div>

      <h2>South Indian</h2>
      <div className="menu-section">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJqRHczfUAUIWSKcK1OGbzv26pBcNW0_UQaA&s"
          alt="South Indian"
        />
        <ul>
          <li>Masala Dosa – ₹100</li>
          <li>Idli Sambar – ₹60</li>
          <li>Vada – ₹50</li>
          <li>Curd Rice – ₹70</li>
        </ul>
      </div>

      <h2>Chinese</h2>
      <div className="menu-section">
        <img
          src="https://t4.ftcdn.net/jpg/03/53/68/47/360_F_353684779_sXaY7PHyX6Xb9okW7qjVfARj96YIJMZ1.jpg"/>
        <ul>
          <li>Veg Fried Rice – ₹120</li>
          <li>Veg Noodles – ₹130</li>
          <li>Gobi Manchurian – ₹110</li>
          <li>Veg Spring Roll – ₹90</li>
        </ul>
      </div>
    </div>
  );
}

export default Specialdish;
