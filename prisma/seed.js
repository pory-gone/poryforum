const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  await prisma.post.deleteMany()
  await prisma.post.createMany({
    data: [
      { title: 'Primo post', content: 'Contenuto del primo post', author: 'Mario', votes: 42 },
      { title: 'Secondo post', content: 'Contenuto del secondo post', author: 'Luigi', votes: 27 },
      { title: 'Terzo post', content: 'Contenuto del terzo post', author: 'Peach', votes: 15 },
    ]
  })
  console.log('Database popolato!')
}
main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())