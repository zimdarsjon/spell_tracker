import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Divider from '@mui/material/Divider';
import axios from 'axios';

const { useEffect } = React;

export default function Sidebar({ setSpells }) {

  async function loadSpells(level) {
    const response = await axios.get('/api/spells', { params: { level } });
    setSpells(response.data);
  }

  return (
    <MenuList style={{ width: '17.5%', borderRight: '1px solid black', height: '89vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <MenuItem onClick={() => loadSpells()}>All Spells</MenuItem>
        <Divider />
        <MenuItem onClick={() => loadSpells(0)}>Cantrips</MenuItem>
        <MenuItem onClick={() => loadSpells(1)}>Level 1</MenuItem>
        <MenuItem onClick={() => loadSpells(2)}>Level 2</MenuItem>
        <MenuItem onClick={() => loadSpells(3)}>Level 3</MenuItem>
        <MenuItem onClick={() => loadSpells(4)}>Level 4</MenuItem>
        <MenuItem onClick={() => loadSpells(5)}>Level 5</MenuItem>
        <MenuItem onClick={() => loadSpells(6)}>Level 6</MenuItem>
        <MenuItem onClick={() => loadSpells(7)}>Level 7</MenuItem>
        <MenuItem onClick={() => loadSpells(8)}>Level 8</MenuItem>
        <MenuItem onClick={() => loadSpells(9)}>Level 9</MenuItem>

      </div>
      <div>
        <Divider />
        <MenuItem onClick={() => loadSpells()}>Add Spells</MenuItem>

      </div >
      </MenuList>

  )
}