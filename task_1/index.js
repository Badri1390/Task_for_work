import {encoded, translations} from './data.js'

// console.log("Let's rock")
// console.log(encoded, translations)

function Decode (encoded,translations){
    const uniqueId = [];
    const exception = ["groupId", "service", "formatSize","ca"]
    encoded.forEach(obj => {
        for (const key in obj) {
            if (Object.hasOwn(translations, obj[key]) && !exception.includes(key) && key.includes("Id")) {
                obj[key] = translations[obj[key]];
            }else if (!Object.hasOwn(translations, obj[key]) && !exception.includes(key)){
                uniqueId.push(key)
            }
        }
    });
    return ({encoded, uniqueId});
}

console.log(Decode(encoded,translations))
