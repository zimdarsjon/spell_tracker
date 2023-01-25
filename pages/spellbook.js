import React from 'react';
import axios from 'axios';
import Sidebar from '../components/spellbook/Sidebar.jsx';
import styles from '../styles/Spells.module.css';
import Block from '../components/spellbook/Block.jsx';
import SpellModal from '../components/spellbook/SpellModal.jsx';

const { useEffect, useState } = React;

export default function SpellBook() {
  const [spells, setSpells] = useState([]);
  const [spell, setSpell] = useState({});
  const [open, setOpen] = useState(false);

  const openSpell = (spell) => {
   setOpen(true);
   setSpell(spell);
  }

  const closeSpell = () => {
    setOpen(false);
  }

  useEffect(() => {
    async function loadSpells() {
      const response = await axios.get('/api/spells');
      const data = response.data;
      setSpells(data);
    }
    loadSpells();
  }, [])

  return (
    <div className='sidebar-page'>
      <Sidebar setSpells={setSpells} />
      <div className={styles.spellListWrapper}>
        <div className={styles.spellList}>
        {spells.map(spell => <Block key={spell.id} spell={spell} openSpell={openSpell}/>)}
      </div>
      <SpellModal open={open} spell={spell} closeSpell={closeSpell}/>
      </div>

    </div>
  )
}