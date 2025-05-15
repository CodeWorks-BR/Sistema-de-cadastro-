import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "../../Components/button";
import { Container, Title, Form, Input, InlineGroup, Select, H4 } from "./style";
import api from "../../Services/Api";

function ProductForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    quantity: '',
    price: '',
    categoryId: '',
  });

  const [categories, setCategories] = useState([]);
  const [showCategoryManager, setShowCategoryManager] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.get("/categories", {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = res.data;
      if (Array.isArray(data)) {
        setCategories(data);
      } else {
        setError("Erro ao buscar categorias.");
        setCategories([]);
      }
    } catch (err) {
      console.error("Erro ao buscar categorias:", err);
      setCategories([]);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.categoryId) {
      setError("Selecione uma categoria.");
      return;
    }

    setLoading(true);
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("Token de autenticação ausente.");
    }

    try {
      const payload = {
        ...formData,
        quantity: Number(formData.quantity),
        price: Number(formData.price),
        categoryId: Number(formData.categoryId),
      };

      await api.post("/products", payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      alert("Peça cadastrada com sucesso!");
      setFormData({ name: "", quantity: "", price: "", categoryId: "" });
      setError("");
    } catch (err) {
      console.error("Erro ao cadastrar peça:", err);
      const message = err.response?.data?.message || "Erro ao cadastrar peça.";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateCategory = async (e) => {
    e.preventDefault();

    if (!newCategoryName.trim()) {
      setError("Preencha o nome da categoria.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      const res = await api.post(
        "/categories",
        { name: newCategoryName },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const novaCategoria = res.data;

      setCategories((prev) => [...prev, novaCategoria]);

      setFormData((prev) => ({
        ...prev,
        categoryId: String(novaCategoria.id),
      }));

      setNewCategoryName("");
      setShowCategoryManager(false);
      setError("");

      alert("Categoria criada com sucesso!");
    } catch (err) {
      console.error("Erro ao criar categoria:", err);
      const message = err.response?.data?.message || "Erro ao criar categoria.";
      setError(message);
    }
  };

  /*const handleCreateCategory = async (e) => {
  e.preventDefault();

  if (!newCategoryName.trim()) {
    setError("Preencha o nome da categoria.");
    return;
  }

  try {
    const token = localStorage.getItem("token");

    const res = await api.post(
      "/categories",
      { name: newCategoryName },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    const novaCategoria = res.data;
    console.log("Nova categoria criada:", novaCategoria); // Verifique o retorno

    setCategories((prev) => [...prev, novaCategoria]);
    console.log("Categorias após adição:", categories); // Verifique o estado

    setFormData((prev) => ({
      ...prev,
      categoryId: String(novaCategoria.id),
    }));

    setNewCategoryName("");
    setShowCategoryManager(false);
    setError("");

    alert("Categoria criada com sucesso!");
  } catch (err) {
    console.error("Erro ao criar categoria:", err);
    const message = err.response?.data?.message || "Erro ao criar categoria.";
    setError(message);
  }
};
*/

  return (
    <Container>
      <Title>Cadastro de Peça</Title>

      <MyButton
        type="button"
        onClick={() => navigate("/")} 
        label="Ver Produtos"
      />

      <Form onSubmit={handleSubmit}>
        {error && <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>}

        <Input
          type="text"
          name="name"
          placeholder="Nome da Peça"
          value={formData.name}
          onChange={handleInputChange}
          required
        />

        <Input
          type="number"
          name="quantity"
          placeholder="Quantidade"
          value={formData.quantity}
          onChange={handleInputChange}
          required
        />

        <Input
          type="number"
          name="price"
          placeholder="Preço"
          value={formData.price}
          onChange={handleInputChange}
          required
        />

        <InlineGroup>
          <Select
            name="categoryId"
            value={formData.categoryId}
            onChange={handleInputChange}
            required
          >
            <option value="">Selecione uma categoria</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </Select>

          <MyButton
            type="button"
            onClick={() => {
              setShowCategoryManager(!showCategoryManager);
              setError("");
            }}
            label="Criar"
          />
        </InlineGroup>

        {showCategoryManager && (
          <div>
            <H4>Criar nova categoria</H4>
            <div>
              <Input
                type="text"
                name="newCategory"
                placeholder="Nome da categoria"
                value={newCategoryName}
                onChange={(e) => {
                  setNewCategoryName(e.target.value);
                  setError("");
                }}
                required
              />
              <MyButton
                type="submit"
                onClick={handleCreateCategory}
                label="Salvar"
              />
            </div>
          </div>
        )}

        <MyButton
          type="submit"
          label={loading ? "Salvando..." : "Cadastrar"}
          disabled={loading}
        />
      </Form>
    </Container>
  );
}

export default ProductForm;
