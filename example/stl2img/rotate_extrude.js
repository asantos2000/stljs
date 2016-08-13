stljs = require('stljs')

stljs.imageify('rotate_extrude.stl', { width: 800, height: 600, dst: 'rotate_extrude.png' }, nulli, nulliProg)

// print process.argv
// process.argv.forEach(function (val, index, array) {
// console.log(index + ': ' + val);
// });
// if ( process.argv.length!=4){
// return
// }
// console.log("Converting \""+process.argv[2]+"\" to \""+process.argv[3]+"\"")
// stlfile=process.argv[2]
// pngfile=process.argv[3]
/*
RUN node obj2png.js pathtofile.stl pathtofile.png
*/
// stljs = require('stljs')
// stljs.imageify(stlfile, { width: 800, height: 600, dst: pngfile }, nulli, nulliProg)
/*
, (err, povOutput, name) ->
# done with converting the image
, (err, povPolygon, name) ->
# called on each polygon is processed
)
*/
function nulli(err,pov,name){
console.log("done");
console.log(name);
console.log(pov);
console.log(err);
}
function nulliProg(err,poli,name){
console.log("done one poli");
}