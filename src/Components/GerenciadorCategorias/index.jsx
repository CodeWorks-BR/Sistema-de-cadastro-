import { useState, useEffect } from "react";

function CategoryManager() {
  const [categories, setCategories] = useState([]);
  const [newCategory, setNewCategory] = useState("");

  // Buscar categorias ao carregar a página
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const response = await fetch("http://localhost:3001/api/categories");
    const data = await response.json();
    setCategories(data);
  };

  const createCategory = async () => {
    if (!newCategory) return alert("Digite o nome da categoria!");

    const response = await fetch("http://localhost:3001/api/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newCategory }),
    });

    if (response.ok) {
      setNewCategory("");
      fetchCategories(); // Atualiza a lista automaticamente
    } else {
      alert("Erro ao criar categoria!");
    }
  };

  return (
    <div>
      <h2>Gerenciar Categorias</h2>
      <input
        type="text"
        placeholder="Nova categoria"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button onClick={createCategory}>Criar Categoria</button>

      <h3>Categorias Criadas:</h3>
      <ul>
        {categories.map((cat) => (
          <li key={cat.id}>{cat.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryManager;
