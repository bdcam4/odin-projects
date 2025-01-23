function caesarCipher(key,string){
    let encrypted_string = "";

    for (let i = 0; i<string.length; i++){
        let code = string.charCodeAt(i);
        if (code >= 65 && code <= 65 + 26 - 1) {
            code -= 65;
            code = (code + key) % 26;
            code += 65;
            encrypted_string += String.fromCharCode(code)
        } else if (code >= 97 && code <= 97 + 26 - 1){
            code -= 97;
            code = (code + key) % 26;
            code += 97;
            encrypted_string += String.fromCharCode(code)
        } else {
            encrypted_string += string.charAt(i)
        }
    };
    return encrypted_string
};

module.exports = caesarCipher
