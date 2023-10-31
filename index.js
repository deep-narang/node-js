const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(res.json([
    {
      name : 'BOB',
      mail : 'bob@gmail.com'
      }, 
      {
        name : 'BOB1',
        mail : 'bob@gm11ail.com'
      }
  ]
    
    ))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})