export default function handler(req, res) {
    const post = [
    { id: 1, title: 'Primo post', content: 'Contenuto del primo post', votes: 42, author: 'Mario' },
    { id: 2, title: 'Secondo post', content: 'Contenuto del secondo post', votes: 27, author: 'Luigi' },
    { id: 3, title: 'Terzo post', content: 'Contenuto del terzo post', votes: 15, author: 'Peach' },
  ]
    res.status(200).json( post )
}