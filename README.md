# Powermate Servermate

Designed for use with the [Griffin Powermate](http://store.griffintechnology.com/laptops/powermate)

Powermate Servermate is an Express server wrapper for [node-powermate](https://www.npmjs.com/package/node-powermate) by [Sandeep Mistry](https://github.com/sandeepmistry).

# Get started


1. Install [Node.js](https://nodejs.org)
2. Fork this repo & clone it to your computer
3. Run `npm install` inside the project folder
4. Make sure a Griffin Powermate is plugged into your computer
5. Run `npm start` inside the project folder to start Powermate Servermate listening to your Powermate


### API usage:

change brightness (range 0-255)  (AJAX PUT)
```
http://0.0.0.0:8081/brightness/187
```



Get the current status of the Powermate (AJAX GET)
```
http://0.0.0.0:8081/status
```

This will return a data object containing:
```javascript
{
  buttonDown: false,
  wheelDelta: 0,
  brightness: 0
}
```
