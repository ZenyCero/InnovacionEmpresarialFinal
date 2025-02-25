// Home.js
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import ProductList from "./ProductList";
import "../css/home.css";

const Home = () => {
  // Simulando un listado de productos
  const allProducts = [
    {
      id: 1,
      name: "Manzanas",
      description: "Manzanas frescas de la huerta",
      price: 3.99,
      image:
        "https://andreuprados.com/wp-content/uploads/2017/01/apple_0.jpg.webp",
    },
    {
      id: 2,
      name: "Leche",
      description: "Leche fresca 1L",
      price: 1.49,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXrly2AgRkhKXohMpjYRGG08x5GTNvD2DzQ&s",
    },
    {
      id: 3,
      name: "Pan de campo",
      description: "Pan artesanal recién horneado",
      price: 2.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEI8LjmPbpMypLa5SIveha-EjiElKkfbvqaw&s",
    },
    {
      id: 4,
      name: "Tomates",
      description: "Tomates frescos y jugosos",
      price: 2.49,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/1200px-Bright_red_tomato_and_cross_section02.jpg",
    },
    {
      id: 5,
      name: "Pechuga de pollo",
      description: "Pechuga de pollo fresca y sin hueso",
      price: 5.99,
      image:
        "https://metroio.vtexassets.com/arquivos/ids/504824/FILETE-DE-PECHUGA-POLLO-REDONDOS-KG-3-241064.jpg?v=638386150340800000",
    },
    {
      id: 6,
      name: "Lechuga",
      description: "Lechuga fresca y crujiente",
      price: 1.99,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Romaine_lettuce.jpg/1200px-Romaine_lettuce.jpg",
    },
    {
      id: 7,
      name: "Fresas",
      description: "Fresas frescas y dulces",
      price: 4.49,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFtPFJGI2PzXBVed9qWDzxjf9t-VQpQ_Eyg&s",
    },
    {
      id: 8,
      name: "Queso fresco",
      description: "Queso fresco de vaca",
      price: 6.99,
      image:
        "https://villacocina.com/wp-content/uploads/2024/08/Queso-Fresco-31-500x500.jpg",
    },
  ];

  const [filteredProducts, setFilteredProducts] = useState(allProducts);

  const handleSearch = (query) => {
    if (!query) {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="home">
      <h1>Tienda en línea</h1>
      <SearchBar onSearch={handleSearch} />
      <ProductList products={filteredProducts} />
    </div>
  );
};

export default Home;
