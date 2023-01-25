import React from 'react';
import Button from '@mui/material/Button';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import { GiTransportationRings, GiRaiseSkeleton, GiSparkles, GiBlackball, GiStoneSphere, GiDualityMask, GiBellShield, GiFire } from 'react-icons/gi';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const { useState } = React;

export default function Block({ spell, openSpell }) {

  const blockStyle = {
    width: '30%',
    border: '1px solid red',
    margin: '10px',
    padding: '5px'
  }

  return (
    <Box style={blockStyle} onClick={() => openSpell(spell)}>
      <Typography>{spell.name}{spell.ritual && <HourglassEmptyOutlinedIcon />}</Typography>
      <div style={{display: 'flex', justifyContent: 'space-between'}}>
        <Typography>{spell.level !== 0 ? `Level ${spell.level}` : 'Cantrip'}</Typography>
        <Typography>{spell.components}</Typography>
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
      <Button>Cast</Button>
    </Box>
  )
}