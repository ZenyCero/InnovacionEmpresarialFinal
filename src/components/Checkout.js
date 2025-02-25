import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import { Container, Row, Col } from "react-bootstrap";

const Checkout = () => {
  const { productId } = useParams();

  // Lista de productos
  const allProducts = [
    {
      id: 1,
      name: "Manzanas",
      description: "Manzanas frescas de la huerta",
      price: 3.99,
    },
    {
      id: 2,
      name: "Leche",
      description: "Leche fresca 1L",
      price: 1.49,
    },
    {
      id: 3,
      name: "Pan de campo",
      description: "Pan artesanal recién horneado",
      price: 2.99,
    },
    {
      id: 4,
      name: "Tomates",
      description: "Tomates frescos y jugosos",
      price: 2.49,
    },
    {
      id: 5,
      name: "Pechuga de pollo",
      description: "Pechuga de pollo fresca y sin hueso",
      price: 5.99,
    },
    {
      id: 6,
      name: "Lechuga",
      description: "Lechuga fresca y crujiente",
      price: 1.99,
    },
    {
      id: 7,
      name: "Fresas",
      description: "Fresas frescas y dulces",
      price: 4.49,
    },
    {
      id: 8,
      name: "Queso fresco",
      description: "Queso fresco de vaca",
      price: 6.99,
    },
  ];

  // Buscar el producto seleccionado por el ID
  const product = allProducts.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const [quantity, setQuantity] = useState(1); // Definir la cantidad por defecto

  const handleQuantityChange = (e) => {
    e.target.value == 0 ? setQuantity(1) : setQuantity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar lógica para procesar el pago y hacer el pedido
    console.log("Datos de compra enviados:", formData);
  };

  return (
    <Container>
      <h2>Formulario de compra</h2>
      <Row>
        <Col md={6}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Nombre completo"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              // value={formData.name} // Descomentar si usas estado para los datos
            />
            <TextField
              label="Dirección de entrega"
              variant="outlined"
              fullWidth
              margin="normal"
              name="address"
              // value={formData.address}
            />
            <TextField
              label="Número de tarjeta"
              variant="outlined"
              fullWidth
              margin="normal"
              name="cardNumber"
              // value={formData.cardNumber}
            />
            <Row>
              <Col md={6}>
                <TextField
                  label="Fecha de vencimiento"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="expirationDate"
                  // value={formData.expirationDate}
                />
              </Col>
              <Col md={6}>
                <TextField
                  label="CVV"
                  variant="outlined"
                  fullWidth
                  margin="normal"
                  name="cvv"
                  // value={formData.cvv}
                />
              </Col>
            </Row>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginTop: "20px" }}
            >
              Realizar compra
            </Button>
          </form>
        </Col>
        <Col md={6}>
          <h4>Producto seleccionado</h4>
          <p>
            <strong>Nombre:</strong> {product.name}
          </p>
          <p>
            <strong>Precio / Kg:</strong> ${product.price}
          </p>
          <div>
            <label htmlFor="quantity">Cantidad: </label>
            <input
              id="quantity"
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              style={{ marginLeft: "10px", width: "60px" }}
            />
          </div>
          <p>
            <strong>Total: </strong>${(product.price * quantity).toFixed(2)}
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
