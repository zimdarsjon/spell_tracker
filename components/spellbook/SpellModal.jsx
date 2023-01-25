import Modal from '@mui/material/Modal';
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const { useState } = React;

export default function SpellModal({ spell, open, closeSpell }) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '40%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    outline: '0',
    borderRadius: '10px',
    backgroundColor: '#f4f0e8',
    color: '#27221f',
  };

  const typoStyle = {
    marginTop: '10px',
    marginBottom: '10px'
  }

  return(
    <Modal
    open={open}
    onClose={closeSpell}
    >
      <Box sx={style}>
        <h1 style={typoStyle}>{spell.name}</h1>
        <Typography sx={typoStyle}>{spell.level !== 0 ? `Level ${spell.level}` : 'Cantrip'} {spell.school} {spell.ritual && '(ritual)'}</Typography>
        <Typography sx={typoStyle}><b>Range:</b> {spell.range}</Typography>
        <Typography sx={typoStyle}><b>Casting Time:</b> {spell.duration}</Typography>
        <Typography sx={typoStyle}><b>Components:</b> {spell.components}</Typography>
        <Typography sx={typoStyle}>{spell.desc}</Typography>
        {spell.higher_level && <Typography sx={typoStyle}><b>Higher Level: </b>{spell.higher_level}</Typography>}
        <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
          <div style={{width: '33%', display: 'flex', justifyContent: 'left'}}><Button>Remove from Book</Button></div>
          <div style={{width: '33%', display: 'flex', justifyContent: 'center'}}><Button>Upcast</Button></div>
          <div style={{width: '33%', display: 'flex', justifyContent: 'right'}}><Button>Cast</Button></div>
        </div>
      </Box>
    </Modal>
  )
}