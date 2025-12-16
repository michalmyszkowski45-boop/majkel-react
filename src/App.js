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
      setFormData({
        imie: "",
        nazwisko: "",
        ulica: "",
        miasto: "",
      });
    } else {
      alert("Proszę wypełnić wszystkie pola!");
    }
  };

  return (
    <div className="app-container">

      {/* HEADER */}
      <header className="app-header-custom">
        <h1>Formularz adresowy</h1>
      </header>

      {/* FORM */}
      <main className="app-main">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="imie"
            placeholder="Imię"
            value={formData.imie}
            onChange={handleChange}
          />
          <input
            type="text"
            name="nazwisko"
            placeholder="Nazwisko"
            value={formData.nazwisko}
            onChange={handleChange}
          />
          <input
            type="text"
            name="ulica"
            placeholder="Ulica"
            value={formData.ulica}
            onChange={handleChange}
          />
          <input
            type="text"
            name="miasto"
            placeholder="Miasto"
            value={formData.miasto}
            onChange={handleChange}
          />
          <button type="submit">Dodaj</button>
        </form>

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
      </main>

      {/* FOOTER */}
      <footer className="app-footer">
        Stronę wykonał Michał
      </footer>

    </div>
  );
}

export default App;
