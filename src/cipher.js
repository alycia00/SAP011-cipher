export default{
  encode:
    function (shift, text) {
      if(typeof shift !== 'number' || typeof text !== "string"){
        throw new TypeError("Key precisa ser um número");
      }
      let result = "";
      if (shift < 0 ) {
        shift = shift + 26
      }
      for (let i = 0; i < text.length; i++) {
        let char = text[i];
  
        if (char.match(/[a-z]/i)) {
          const code = text.charCodeAt(i);
                
          if (code >= 65 && code <= 90) { 
            char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
          } else if (code >= 97 && code <= 122) {
            char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
          }
        }
        result += char;
      }
      return result;
    },
  decode: function(shift, text) {
    return this.encode(26 - shift, text)
  }
};
    
