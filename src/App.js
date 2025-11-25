import './App.css';
import React, { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    imie: "",
    nazwisko: "",
    ulica: "",
    miasto: "",
  });

  const [entries, setEntries] = useState([]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.imie &&
      formData.nazwisko &&
      formData.ulica &&
      formData.miasto
    ) {
      setEntries([...entries, formData]);
      setFormData({ imie: "", nazwisko: "", ulica: "", miasto: "" });
    } else {
      alert("Proszę wypełnić wszystkie pola!");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      
      {/* Zamiast tekstu wstawiono obraz */}
      <img 
        src="data:image/jpeg;base64,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" 
        alt="Formularz" 
        style={{ marginBottom: "20px" }}
      />

      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          name="imie"
          placeholder="Imię"
          value={formData.imie}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="nazwisko"
          placeholder="Nazwisko"
          value={formData.nazwisko}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="ulica"
          placeholder="Ulica"
          value={formData.ulica}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <input
          type="text"
          name="miasto"
          placeholder="Miasto"
          value={formData.miasto}
          onChange={handleChange}
          style={{ marginRight: "10px" }}
        />
        <button type="submit">Dodaj</button>
      </form>

      {entries.length > 0 && (
        <table border="1" cellPadding="10" style={{ borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th>Imię</th>
              <th>Nazwisko</th>
              <th>Ulica</th>
              <th>Miasto</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((entry, index) => (
              <tr key={index}>
                <td>{entry.imie}</td>
                <td>{entry.nazwisko}</td>
                <td>{entry.ulica}</td>
                <td>{entry.miasto}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default App;
