const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const axios = require('axios');

async function loadSpells() {
  const response = await axios.get('https://www.dnd5eapi.co/api/spells');
  const spells = response.data.results;
  spells.forEach(spell => {
    addSpell(spell.index);
  })
}

async function addSpell(index) {
  const response = await axios.get(`https://www.dnd5eapi.co/api/spells/${index}`);
  const data = response.data;
  console.log('Adding Spell', data.name)
  const spell = await prisma.spell.create({
    data: {
      name: data.name,
      desc: data.desc[0],
      higher_level: data.higher_level[0],
      range: data.range,
      material: data.material,
      ritual: data.ritual,
      components: data.components,
      duration: data.duration,
      level: data.level,
      school: data.school.name,
      concentration: data.concentration,
      casting_time: data.casting_time
    }
  });
}

loadSpells()