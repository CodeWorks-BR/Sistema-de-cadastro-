import { useEffect, useState } from "react";
import {
  Container,
  Title,
  ProductCard,
  ProductInfo,
  Button,
  AlertText,
} from "./style";
import api from "../../Services/Api"; // Usa o mesmo axios com baseURL e token

export default function ProductList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    try {
      const token = localStorage.getItem("token");
      const response = await api.get("/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data);
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
    }
  }

  function handleEdit(id) {
    console.log("Editar produto com ID:", id);
    // Navegar para tela de edição, se necessário
  }

  async function handleDelete(id) {
    try {
      const token = localStorage.getItem("token");
      await api.delete(`/products/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      fetchProducts(); // Atualiza lista após exclusão
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  }

  return (
    <Container>
      <Title>Produtos Cadastrados</Title>
      {products.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        products.map((product) => {
          const isLowStock = product.quantity <= 5;
          return (
            <ProductCard key={product.id} isLowStock={isLowStock}>
              <ProductInfo>
                <strong>Produto:</strong> {product.name}
                <br />
                <strong>Estoque:</strong> {product.quantity}{" "}
                {isLowStock && <AlertText>(Estoque baixo!)</AlertText>}
                <br />
                <strong>Categoria:</strong> {product.category?.name || "N/A"}
              </ProductInfo>
              <div>
                <Button onClick={() => handleEdit(product.id)}>Editar</Button>
                <Button variant="danger" onClick={() => handleDelete(product.id)}>
                  Excluir
                </Button>
              </div>
            </ProductCard>
          );
        })
      )}
    </Container>
  );
}
