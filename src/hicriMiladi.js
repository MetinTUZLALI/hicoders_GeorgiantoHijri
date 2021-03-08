

function hicri(y) {
    const x = y - 621;
    const miladi = x + Math.floor(x / 33);

    return miladi
}

function miladi(x) {
    const gap = Math.floor(x / 33)
    const miladi = x - gap + 622

    return miladi
}



module.exports = {hicri,miladi};

