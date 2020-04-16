const http = require('http')
const fs = require('fs')
const path = require('path')

http.createServer((req, res) => {

  const file = req.url === '/' ? 'index.html' : req.url
  const filePath = path.join(__dirname, file)
  const extName = path.extname(filePath)

  //Array de tipos que são aceitos neste servidor
  const allowedFileTypes = ['.html', '.css', '.js', '.jpg', '.png']
  const allowed = allowedFileTypes.find((item) => { return item == extName})

  //Se não encontrar um extensão rodar mesmo assim tipo o favicon
  if(!allowed) return

  fs.readFile(
    filePath, 
    (err, content) => {
      if(err) throw err

      res.end(content)

  })
 
}).listen(5000, () => console.log('Servidor rodando...'))