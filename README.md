# Stljs

A fast library to read and write STL files from [Cubehero](https://cubehero.com).
It also allows you to export to PNG using POV-RAY.

Note: Currently, the readFile works for both binary and ascii files, but writing
STL files is only in ASCII

This currently only works on node.js, but will expand to browser stl parsing soon

## How to install

````
npm install stljs
````

If you'd like to also be able to render STL files, you'll need to install a program
called [pov-ray](http://povray.org). 

If you're on a mac, you can install it using homebrew.

````
brew install povray
````

```
sudo port install povray
```

If you're using ubuntu, you can install it using aptitude

````
aptitude install povray
````

## Getting started

## Converting STL to PNG

Sometimes, you want to convert an STL file into a PNG file. To do that, we can 

````
stljs = require('stljs')

stljs.imageify('rotate_extrude.stl', { width: 800, height: 600, dst: 'rotate_extrude.png' }, nulli, nulliProg)

function nulli(err,pov,name){
console.log("done");
console.log(name);
console.log(pov);
console.log(err);
}
function nulliProg(err,poli,name){
console.log("done one poli");
}
````

The readFile takes two functions, a callback when the parsing is done, and an 
optional progress callback, which gets called as each polygon is parsed.

NOTE: In order to use this feature, you need to have pov-ray installed on your system
already. This can be installed separately through 'aptitude' on linux and 'brew'
on macs

## Contributing

Post an issue under 'issues' above, to see if what you want to do isn't already 
being in the works. Then submit a pull request.

## License

MIT license
