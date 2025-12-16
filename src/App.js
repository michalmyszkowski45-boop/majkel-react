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
    <div className="app-container">

      {/* HEADER */}
      <header className="app-header-custom">
        <img
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
          alt="Formularz"
          className="header-image"
        />
      </header>

      {/* FORMULARZ */}
      <form onSubmit={handleSubmit}>
        <input type="text" name="imie" placeholder="Imię" value={formData.imie} onChange={handleChange} />
        <input type="text" name="nazwisko" placeholder="Nazwisko" value={formData.nazwisko} onChange={handleChange} />
        <input type="text" name="ulica" placeholder="Ulica" value={formData.ulica} onChange={handleChange} />
        <input type="text" name="miasto" placeholder="Miasto" value={formData.miasto} onChange={handleChange} />
        <button type="submit">Dodaj</button>
      </form>

      {/* TABELA */}
      {entries.length > 0 && (
        <table>
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

      {/* FOOTER */}
      <footer className="app-footer">
        <p>Stronę wykonał Michał</p>
      </footer>

    </div>
  );
}

export default App;
