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
      <h1>Formularz danych</h1>
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
