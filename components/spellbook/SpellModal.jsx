import Modal from '@mui/material/Modal';
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const { useState } = React;

export default function SpellModal({ spell, open, closeSpell }) {

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    outline: '0'
  };

  return(
    <Modal
    open={open}
    onClose={closeSpell}
    >
      <Box sx={style}>
        <Typography>{spell.name}</Typography>
        <Typography>{spell.desc}</Typography>
        {spell.higher_level && <Typography>{spell.higher_level}</Typography>}
      </Box>
    </Modal>
  )
}