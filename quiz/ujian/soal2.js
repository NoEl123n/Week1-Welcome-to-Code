function balikKata(kata) {
    let backwords = ``;

    for(x = kata.length-1; x > -1; x--){
        backwords += kata[x];
    }

    return backwords;
}
  
// TEST CASES
console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
console.log(balikKata('John Doe')); // eoD nhoJ
console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
console.log(balikKata('Super')); // repuS