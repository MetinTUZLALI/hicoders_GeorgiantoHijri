const {hicri,miladi} = require(`./src/hicriMiladi`) //we import those functions from the hicrimiladi sheet.


const year = new Date().getFullYear();  // we get current year as variable.

const hicridate = hicri(year);    //we appointed variable to transforms between georgian to hicri.

console.log(`miladi ${year} = ${hicri(year)} hicri yılına`)  // that shows Hijri year

console.log(`hicri ${hicri(year)} = ${miladi(hicridate)} miladi yılına`) // that shows Georgian year