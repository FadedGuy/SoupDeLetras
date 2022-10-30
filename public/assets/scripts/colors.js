function calculateLuminance(hex){
    let r = (hex >> 16) & 0xff;
    let g = (hex >>  8) & 0xff;
    let b = (hex >>  0) & 0xff;

    let luma = 0.229 * r + 0.587 * g + 0.114 * b;

    if (luma < 30) {
        return true;
    }       
    return false;
}

function hashCode(str){
    let hash = 0;
    for(let i = 0; i < str.length; i++){
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return 2*hash;
}

function intToRGB(num){
    let c = (num & 0x00FFFFFF).toString(16).toUpperCase();
    return "00000".substring(0, 6 - c.length) + c;
}