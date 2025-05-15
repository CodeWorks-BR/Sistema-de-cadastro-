
import { useEffect, useState } from "react";
import {
  Container,
  Title,
  ProductCard,
  ProductInfo,
  Button,
  AlertText,
} from "./style";
import api from "../../Services/Api";

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

      // Verifica se a resposta tem um array de produtos
      const data = response.data;
      if (Array.isArray(data)) {
        setProducts(data); // Caso a API retorne um array direto
      } else if (Array.isArray(data.products)) {
        setProducts(data.products); // Caso retorne um objeto com 'products'
      } else {
        console.error("Formato de resposta inesperado:", data);
        setProducts([]); // Fallback para evitar erro
      }

    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      setProducts([]);
    }
  }

  function handleEdit(id) {
    console.log("Editar produto com ID:", id);
    // Aqui você pode usar useNavigate() do React Router, se quiser redirecionar
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
      {Array.isArray(products) && products.length === 0 ? (
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
                <strong>Categoria:</strong> {product.Category?.name || "N/A"}
              </ProductInfo>
              <div>
                <Button onClick={() => handleEdit(product.id)}>Editar</Button>
                <Button
                  variant="danger"
                  onClick={() => handleDelete(product.id)}
                >
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