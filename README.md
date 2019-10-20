# @hyperswarm/tunnel

Tunneling service for Hyperswarm

```
npm install @hyperswarm/tunnel
```

## Usage

``` js
const { Remote, Local } = require('@hyperswarm/tunnel')
```

On a remote server run the tunneler

``` js
const r = new Remote()

r.listen(10000) // listen on port 10000
````

Then on a client you can start a server that's being announced

``` js
const l = new Local(10000, 'remote-server.com')

const s = l.createServer(function (socket) {
  // a remote socket ...
})

s.listen(hash(Buffer.from('a topic to announce on')))
```

Or a client connection

``` js
const s = l.connect(hash(Buffer.from('a topic to connect on')))
```

## CLI

If you just want to spin up a tunneling server you can run the following cli

``` sh
npm install -g @hyperswarm/tunnel
hyperswarm-tunnel-server --port 10000
```

## License

MIT
