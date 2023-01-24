import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const spells = await getSpells();
  res.send(spells);
}

export async function getSpells() {
  const spells = await prisma.spell.findMany({});
  return spells;
}