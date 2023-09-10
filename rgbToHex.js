const rgb = (r,g,b) =>{ return `${toHex(r)}${toHex(g)}${toHex(b)}`}

const toHex = (a)=> { 
    if (a <= 0) return "00";
    else if (a >= 255) return "FF";
    else return a.toString(16).padStart(2, "0").toUpperCase();
}

console.log(rgb(255,255,255))