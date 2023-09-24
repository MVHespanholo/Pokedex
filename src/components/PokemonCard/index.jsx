import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function PokemonCard({ name, image, types, details }) {
  const [showDetails, setShowDetails] = useState(false);

  const typeHandler = (types) => {
    return types.map((type, index) => (
      <span key={index} className={type.type.name + '-type'}>
        {type.type.name}
      </span>
    ));
  };

  const handleCardClick = () => {
    setShowDetails(!showDetails);
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
        border: '3px solid black',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.08)',
          backgroundColor: '#68a090',
        },
      }}
      onClick={handleCardClick}
    >
      <CardMedia component="img" height="auto" image={image} alt="pokemon" />
      <CardContent>
        <Typography gutterBottom variant="h5" align="center" marginTop="2px" component="div" fontWeight="bold">
          {name}
        </Typography>
        <Typography gutterBottom variant="h7" align="center" component="div" fontWeight="bold">
          {typeHandler(types)}
        </Typography>
        {showDetails && (
          <div className="pokemon-details">
            <h2>{details.name}</h2>
            <p>Peso: {details.weight}</p>
            <p>Altura: {details.height}</p>
            <p>Habilidades: {details.abilities.map((ability) => ability.ability.name).join(', ')}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
