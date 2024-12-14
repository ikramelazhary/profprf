import React, { useState } from 'react';
import CarteProfil from './CarteProfil';
import FormulaireAjout from './FormulaireAjout';

function ListeProfils({ profils, ajouterProfil }) {
  return (
    <div>
      <FormulaireAjout ajouterProfil={ajouterProfil} />
      <div className="d-flex flex-wrap justify-content-center">
        {profils.map((profil, index) => (
          <CarteProfil
            key={index}
            nom={profil.nom}
            age={profil.age}
            profession={profil.profession}
            image={profil.image}
          />
        ))}
      </div>
    </div>
  );
}

export default ListeProfils;
