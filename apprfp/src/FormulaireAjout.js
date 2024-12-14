import React, { useState } from "react";

function FormulaireAjout({ ajouterProfil }) {
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nom || !age || !profession || !image) return;

    const nouveauProfil = { nom, age, profession, image };
    ajouterProfil(nouveauProfil);

    setNom("");
    setAge("");
    setProfession("");
    setImage("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-3">
        <label htmlFor="nom" className="form-label">
          Nom
        </label>
        <input
          type="text"
          className="form-control"
          id="nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Âge
        </label>
        <input
          type="number"
          className="form-control"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="profession" className="form-label">
          Profession
        </label>
        <input
          type="text"
          className="form-control"
          id="profession"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="image" className="form-label">
          URL de l'image
        </label>
        <input
          type="file"
          className="form-control"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Ajouter Profil
      </button>
    </form>
  );
}

export default FormulaireAjout;
