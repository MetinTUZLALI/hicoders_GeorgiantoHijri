/*
in this script, we convert hijri date to georgian date.
*/


function miladi(x) {
    const gap = Math.floor(x / 33)
    const miladi = x - gap + 622

    return miladi
}


module.exports = miladi