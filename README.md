# Powermate Servermate


Install dependencies
```bash
npm install
```

Start running the server
```bash
node index
```


### API usage:

change brightness (range 0-255)
```
http://0.0.0.0:8081/brightness/187
```



request if button is pressed
```
http://0.0.0.0:8081/data
```

This will return a data object containing
