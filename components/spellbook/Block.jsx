import React from 'react';
import Button from '@mui/material/Button';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import { GiTransportationRings, GiRaiseSkeleton, GiSparkles, GiBlackball, GiStoneSphere, GiDualityMask, GiBellShield, GiFire } from 'react-icons/gi';
import { AiOutlineHourglass } from 'react-icons/ai';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const { useState } = React;

export default function Block({ spell, openSpell }) {

  const blockStyle = {
    width: '20%',
    maxWidth: '20%',
    minWidth: '20%',
    border: '1px solid #27221f',
    color: '#27221f',
    margin: '10px',
    padding: '5px',
    borderRadius: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#f4f0e8'
  }

  return (
    <Box style={blockStyle} onClick={() => openSpell(spell)}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography><b>{spell.name}</b>{spell.ritual && <AiOutlineHourglass />}</Typography>
        <Typography>
          {spell.school === 'Evocation' && <GiFire />}
          {spell.school === 'Abjuration' && <GiBellShield />}
          {spell.school === 'Illusion' && <GiDualityMask />}
          {spell.school === 'Conjuration' && <GiTransportationRings />}
          {spell.school === 'Necromancy' && <GiRaiseSkeleton />}
          {spell.school === 'Enchantment' && <GiSparkles />}
          {spell.school === 'Divination' && <GiBlackball />}
          {spell.school === 'Transmutation' && <GiStoneSphere />}
        </Typography>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography sx={{ display: 'flex', alignItems: 'end'}}>{spell.level !== 0 ? `Level ${spell.level}` : 'Cantrip'}</Typography>
        <Button onClick={e => {
        e.preventDefault();
        e.stopPropagation();
      }}>Cast</Button>
      </div>
    </Box>
  )
}