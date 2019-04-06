const workshop = require('play-workshop')

document.head.innerHTML = `<style> body {
  box-sizing: border-box; width: 100vw; height: 100vh; margin: 0;
}</style>`

;(async () => document.body.appendChild(await workshop()))()
