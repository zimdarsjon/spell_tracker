import React from 'react';
import axios from 'axios';

const { useEffect, useState } = React;

export default function SpellBook() {
  const [spells, setSpells] = useState([]);

  useEffect(() => {
    axios.get('/api/spells')
      .then(response => setSpells(response.data))
  }, [])

  return (
    <>
    <h1>Spell Book</h1>
    {spells.map(spell => <h2 key={spell.id}>{spell.name}</h2>)}
    </>
  )
}