import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button, Rating } from "@mui/material"; // Importa componentes de Material-UI
import { Row, Col } from "react-bootstrap"; // Importa componentes de Material-UI

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate(); // Utiliza useNavigate()

  const allProducts = [
    {
      id: 1,
      name: "Manzanas",
      description: "Manzanas frescas de la huerta",
      price: 3.99,
      images: [
        "https://andreuprados.com/wp-content/uploads/2017/01/apple_0.jpg.webp",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Wl_H3wbtKWw8J3V5409WVr-yg-5Q24kPQw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoCe_Lq9BYiw75fsiBrMG8_s0imSyGxjQGqg&s",
      ],
      reviews: [
        { rating: 5, comment: "Muy frescas y deliciosas" },
        {
          rating: 4,
          comment: "Buen sabor, pero me gustaría que fueran más grandes",
        },
        {
          rating: 5,
          comment: "Excelente calidad, se nota que son de huerta orgánica",
        },
      ],
    },
    {
      id: 2,
      name: "Leche",
      description: "Leche fresca 1L",
      price: 1.49,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGXrly2AgRkhKXohMpjYRGG08x5GTNvD2DzQ&s",
        "https://www.infoalimentos.org.ar/images/temas_21/salud_alimentos/TEMA_Leche_interna_horiz_840x410.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpi4eFLJx1Cnw-PhvwrU2Xq02bteVqte_IXA&s",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Excelente calidad, la mejor leche que he probado",
        },
        {
          rating: 4,
          comment: "Muy buena, pero un poco cara para el tamaño",
        },
      ],
    },
    {
      id: 3,
      name: "Pan de campo",
      description: "Pan artesanal recién horneado",
      price: 2.99,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEI8LjmPbpMypLa5SIveha-EjiElKkfbvqaw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3koBVs7ubRi_tboHCag-_N136ou6QSitucA&s",
        "https://img-global.cpcdn.com/recipes/2584834_f5b29b6a30f4dcf4/1200x630cq70/photo.jpg",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Muy sabroso, recién horneado, excelente para el desayuno",
        },
        {
          rating: 4,
          comment: "Buen sabor, pero me gustaría que fuera más grande",
        },
      ],
    },
    {
      id: 4,
      name: "Tomates",
      description: "Tomates frescos y jugosos",
      price: 2.49,
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/1200px-Bright_red_tomato_and_cross_section02.jpg",
        "https://media.istockphoto.com/id/1450576005/es/foto/tomate-aislado-tomate-sobre-fondo-blanco-perfecta-vista-lateral-de-tomate-retocado-con-trazado.jpg?s=612x612&w=0&k=20&c=DZQAmlxov8KbvT4vcSAoU9L5dU6bqNTbBESzBMtuMZ4=",
        "https://lh3.googleusercontent.com/proxy/8fcuLvU-Rb6-2je8Jef9vxfzKE0XZtS7Y8UvTGA-QMacIrUgUdBOpzPy3XxuMxF0br-Ad69P_bN4BIZfxay1ZU3TSEZiwGXyyFDu8dbrxSwWqAlJZ8s",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Tomates muy frescos y sabrosos, ideales para ensaladas",
        },
        {
          rating: 4,
          comment: "Buen sabor, aunque algunos estaban un poco verdes",
        },
      ],
    },
    {
      id: 5,
      name: "Pechuga de pollo",
      description: "Pechuga de pollo fresca y sin hueso",
      price: 5.99,
      images: [
        "https://metroio.vtexassets.com/arquivos/ids/504824/FILETE-DE-PECHUGA-POLLO-REDONDOS-KG-3-241064.jpg?v=638386150340800000",
        "https://www.pechugon.com/wp-content/uploads/2023/07/pechuga-pollo-deshesado-1.jpg",
        "https://media.istockphoto.com/id/93456470/es/foto/dos-materias-primas-pechuga-de-pollo-sobre-fondo-blanco.jpg?s=612x612&w=0&k=20&c=7cJvSD15VR3UR3nJdjFIsQhLzgwmq7XpiSGNrua91Uw=",
      ],
      reviews: [
        { rating: 5, comment: "Excelente, muy jugosa y tierna" },
        {
          rating: 4,
          comment:
            "Buen producto, aunque me gustaría que viniera con más cantidad",
        },
      ],
    },
    {
      id: 6,
      name: "Lechuga",
      description: "Lechuga fresca y crujiente",
      price: 1.99,
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Romaine_lettuce.jpg/1200px-Romaine_lettuce.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT3jOEdQRxFV1Q5e8LUB-Uskx0GxdmDKXkWw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQm5qh3oOpby7o7jInsvXIffHqvHTAokpHng&s",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Fresca y crujiente, perfecta para ensaladas",
        },
        {
          rating: 4,
          comment:
            "Muy buena, pero me gustaría que viniera en una mayor cantidad",
        },
      ],
    },
    {
      id: 7,
      name: "Fresas",
      description: "Fresas frescas y dulces",
      price: 4.49,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbFtPFJGI2PzXBVed9qWDzxjf9t-VQpQ_Eyg&s",
        "https://cuidateplus.marca.com/sites/default/files/styles/ratio_43/public/cms/fresas_1.jpg.webp?itok=W8RVymfJ",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSludVYUh1U4XFzU0_PIj9u_OO4gfDG72GDVQ&s",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Deliciosas, muy dulces y frescas",
        },
        {
          rating: 4,
          comment: "Muy buenas, pero algunas estaban un poco blandas",
        },
      ],
    },
    {
      id: 8,
      name: "Queso fresco",
      description: "Queso fresco de vaca",
      price: 6.99,
      images: [
        "https://villacocina.com/wp-content/uploads/2024/08/Queso-Fresco-31-500x500.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd7U4tnyEk49JgFsSf-jtdbTDs-y3vb5h_cw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSltX3BFi7S6_BMNkJ3Rmof9Uh97dMNeA3YLA&s",
      ],
      reviews: [
        {
          rating: 5,
          comment: "Muy cremoso, excelente para acompañar ensaladas",
        },
        {
          rating: 4,
          comment:
            "Buen sabor, pero me gustaría que fuera un poco menos salado",
        },
      ],
    },
    // Otros productos...
  ];

  const handleBuyNow = () => {
    navigate(`/checkout/${product.id}`);
  };

  const product = allProducts.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  // Función para regresar a la página anterior
  const handleGoBack = () => {
    navigate(-1); // Retrocede a la página anterior
  };

  // Estado para controlar si el botón de regreso debe estar fijo
  const [isScrolled, setIsScrolled] = useState(false);

  // Hook useEffect para manejar el scroll y fijar el botón
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        // Puedes ajustar este valor
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="product-detail">
      {/* Botón de regresar, se mantiene fijo cuando se hace scroll */}
      <Button
        variant="contained"
        color="primary"
        onClick={handleGoBack}
        style={{
          position: "fixed",
          top: isScrolled ? "20px" : "10px", // Cambia la posición según el scroll
          left: "10px",
          zIndex: 1,
          transition: "top 0.3s ease", // Transición suave al hacer scroll
        }}
      >
        Regresar
      </Button>

      <Row>
        <Col md={6} xs={12}>
          <div className="image-gallery">
            {product.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                className="img-fluid mb-2" // Asegura que la imagen sea responsiva
                style={{ maxWidth: "100%", height: "auto" }} // Ajusta el tamaño de la imagen
              />
            ))}
          </div>
        </Col>
        <Col md={6} xs={12}>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
          <div>
            <h3>Valoraciones</h3>
            <Rating
              name="product-rating"
              value={
                product.reviews.reduce(
                  (acc, review) => acc + review.rating,
                  0
                ) / product.reviews.length
              }
              readOnly
            />
            <ul>
              {product.reviews.map((review, index) => (
                <li key={index}>
                  <strong>Valoración: {review.rating} estrellas</strong>
                  <p>{review.comment}</p>
                </li>
              ))}
            </ul>
          </div>
          <Button
            variant="contained"
            color="secondary"
            style={{ marginTop: "10px", marginLeft: "10px" }}
            onClick={handleBuyNow}
          >
            Comprar ahora
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetail;
