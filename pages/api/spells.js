import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const spells = await getSpells(req.query.level);
  res.send(spells);
}

export async function getSpells(level) {
  const spells = await prisma.spell.findMany({
    where: {
      level: (parseInt(level) >= 0) ? parseInt(level) : undefined
    }
  });
  return spells;
}