import React from 'react';
import axios from 'axios';
import Sidebar from '../components/spellbook/Sidebar.jsx';
import styles from '../styles/Spells.module.css';
import Block from '../components/spellbook/Block.jsx';
import Button from '@mui/material/Button';
import SpellModal from '../components/spellbook/SpellModal.jsx';
import TextField from '@mui/material/TextField';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Divider from '@mui/material/Divider';

const { useEffect, useState } = React;

export default function SpellBook() {
  const [spells, setSpells] = useState([]);
  const [spell, setSpell] = useState({});
  const [open, setOpen] = useState(false);
  const [filterSchools, setFilterSchools] = useState([]);
  const [filterName, setFilterName] = useState('');
  const [ritualFilter, setRitualFilter] = useState(false);


  const schools = ['Evocation', 'Illusion', 'Conjuration', 'Abjuration', 'Necromancy', 'Enchantment', 'Divination', 'Transmutation']

  const openSpell = (spell) => {
    setOpen(true);
    setSpell(spell);
  }

  const clearFilter = () => {
    setFilterSchools([]);
    setRitualFilter(false);
    setFilterName('');
  }

  const closeSpell = () => {
    setOpen(false);
  }

  const toggleSchoolFilter = (e) => {
    setFilterSchools(e.target.value);
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
        <div style={{display: 'flex', justifyContent: 'space-evenly', padding: '5px'}}>
          <TextField sx={{ m: 1, width: 300 }} label='search' value={filterName} variant="filled" onChange={e => setFilterName(e.target.value)} />
          <FormControl sx={{ m: 1, width: 200 }}>
            <InputLabel>School</InputLabel>
            <Select
              value={filterSchools}
              multiple
              onChange={toggleSchoolFilter}
              renderValue={(selected) => selected.join(', ')}
              input={<OutlinedInput label="School" />}
            >
              {schools.map((school) => (
                <MenuItem key={school} value={school}>
                  <Checkbox checked={filterSchools.indexOf(school) > -1} />
                  <ListItemText primary={school} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <div>
            <InputLabel>Ritual</InputLabel>
            <Checkbox checked={ritualFilter} onChange={e => setRitualFilter(!ritualFilter)} />
          </div>
          <Button onClick={clearFilter}>Clear</Button>
        </div>
        <Divider />
        <div className={styles.spellList}>
          {spells.map(spell => {
            if ((filterSchools.length == 0 || filterSchools.indexOf(spell.school) > -1) && (filterName.length === 0 || spell.name.toLowerCase().includes(filterName)) && (!ritualFilter || spell.ritual)) {
              return <Block key={spell.id} spell={spell} openSpell={openSpell} />
            }
          })}
        </div>
        <SpellModal open={open} spell={spell} closeSpell={closeSpell} />
      </div>

    </div>
  )
}