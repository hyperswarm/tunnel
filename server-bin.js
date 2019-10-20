#!/usr/bin/env node

const { Remote } = require('./')

const r = new Remote()

r.listen(port())

r.on('forward-listening', function (port, topic) {
  console.log('Announcing ' + topic.toString('hex') + ' ' + port)
})

r.on('forward-close', function (port, topic) {
  console.log('Unannouncing ' + topic.toString('hex') + ' ' + port)
})

r.on('forward-connect', function (socket, topic) {
  console.log('Doing a lookup for ' + topic.toString('hex'))
})

r.on('listening', function () {
  console.log('Listening on port ' + r.address().port)
})

r.on('network-close', () => process.exit())

process.once('SIGINT', function () {
  r.destroy()
})

process.once('SIGTERM', function () {
  r.destroy()
})

function port () {
  let i = process.argv.indexOf('-p')
  if (i === -1) i = process.argv.indexOf('--port')
  if (i === -1) return 0
  return Number(process.argv[i + 1]) || 0
}
