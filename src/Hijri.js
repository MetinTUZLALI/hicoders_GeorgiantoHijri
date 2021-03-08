/*
in this script, thanks to function which are underneath convert dates georgian to hijri or hijri to georgian.
And then we export this function to app'script.
*/

function hicri(y) {
    const x = y - 621;
    const miladi = x + Math.floor(x / 33);

    return miladi
}





module.exports = hicri

