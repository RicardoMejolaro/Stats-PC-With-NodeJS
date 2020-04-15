//importando sistema operacional
const os = require('os')

setInterval(() => {

  //adquirindo os dados de memória do sistema operacional
const { freemem, totalmem } = os

//Convertendo o total de mémória em MB inteiro
const total = parseInt(totalmem() / 1024 / 1024)
//Convertendo a mémória em uso em MB inteiro
const mem = parseInt(freemem() / 1024 / 1024)
//Convertendo a memória em uso em percentual
const percentual = parseInt((mem / total) * 100)

//formatando os dados para apresentação
const stats = {
  TotalDeMemoria: `${total} MB`,
  MemoriaLivre: `${mem} MB`,
  Percentual: `${percentual}%`
}

console.clear()
console.log("================= PC STATS ====================")
console.table(stats)


}, 1000)