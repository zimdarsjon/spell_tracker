import prisma from '../../lib/prisma';

export default async function handler(req, res) {
  const spells = await prisma.spell.findMany({});
  res.send(spells);
}