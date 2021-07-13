function encrypt(textToEncrypt, key){
    let out = '';
    for(let p = 0; p < textToEncrypt.length; p++){
        let current = textToEncrypt[p];
        let currentKeyChar= key[p%key.length];

        if(current === ' '){
            out = out + ' '
        }else{
            let encryptedChar = String.fromCharCode(
                (
                    (current.charCodeAt(0) -64)+ (currentKeyChar.charCodeAt(0)-64)
                    )%26 + 64)
                 out = out + encryptedChar;
                
        }
    }
    return out
}

console.log(encrypt('Cica mica egérke', 'abc'))