import { useState } from "react";
import "./App.css";

function App() {
  const [state, setState] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [product1, setProduct1] = useState(39990);
  const [product2, setProduct2] = useState(34990);
  const [product3, setProduct3] = useState(33990);
  return (
    <div className="App">
      <div>
        <h3>จำนวนสินค้าในตะกร้า {totalItems}</h3>
        <h3>ราคาสินค้าในตะกร้าทั้งหมด {totalPrice}</h3>
        <img src="01.jpg" alt="case" width="15%" />
      </div>
      <div>
        <br />
        Asus TUF Gaming F17 FX707ZC-HX035W ราคา {product1} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product1);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product1);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
      <div>
        <img src="02.jpg" alt="case" width="15%" />
        <br />
        Asus ROG Strix G15 G513RC-LP179W ราคา {product2} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product2);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product2);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
      <div>
        <img src="03.jpg" alt="case" width="15%" />
        <br />
        Asus TUF Gaming F15 FX506HM-HN130W ราคา {product3} บาท
      </div>
      <button
        onClick={() => {
          setTotalItems(totalItems + 1);
          setTotalPrice(totalPrice + product3);
        }}
      >
        เพิ่มเข้าตะกร้า
      </button>
      <button
        onClick={() => {
          if (totalItems > 0) {
            setTotalItems(totalItems - 1);
            setTotalPrice(totalPrice - product3);
          }
        }}
      >
        นำออกจากตะกร้า
      </button>
    </div>
  );
}

export default App;
