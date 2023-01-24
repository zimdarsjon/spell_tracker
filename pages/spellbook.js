import React from 'react';
import axios from 'axios';
import { getSpells } from './api/spells';

const { useEffect, useState } = React;

export default function SpellBook({ spells }) {

  return (
    <>
    <h1>Spell Book</h1>
    {spells.map(spell => <h2 key={spell.id}>{spell.name}</h2>)}
    </>
  )
}

export async function getServerSideProps() {
  const response = await getSpells();
  return {
    props: {
      spells: response
    }
  }
}