import React from 'react';

function CarteProfil({ nom, age, profession, image }) {
  const afficherNom = () => {
    alert(`Vous avez sélectionné : ${nom}`);
  };

  return (
    <div className="card" style={{ width: '18rem', margin: '1rem' }}>
      <img src={image} className="card-img-top" alt={nom} />
      <div className="card-body">
        <h5 className="card-title text-center">{nom}</h5>
        <p className="card-text">Âge : {age}</p>
        <p className="card-text">Profession : {profession}</p>
        <button onClick={afficherNom} className="btn btn-primary">
          Voir Plus
        </button>
      </div>
    </div>
  );
}

export default CarteProfil;
