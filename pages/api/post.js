import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
export default async function handler(req, res) {
  const { id } = req.query
  if (id) {
    const post = await prisma.post.findUnique({
      where: { id: Number(id) }
    })
    if (!post) {
      return res.status(404).json({ error: 'Post non trovato' })
    }
    return res.status(200).json(post)
  }
  const posts = await prisma.post.findMany({
    orderBy: { votes: 'desc' }
  })
  res.status(200).json(posts)
}