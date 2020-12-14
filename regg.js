 //anchors
 //^$
//multiline mode enabled  m
//b is a test
//sets []
//ranges [a-z]
// \w multiline-languege [a-zA-Z0-9]
//excluding ranges [^]
//Escaping in [..]
//ranges and flag "u"
//ESCAING SPECIAL CHARACTERS  [ \ ^ $ . | ? * + ( )
//GRIDY AND LAZY QUANTIFIERS
//lazy mode => repeat minimum number of times , ? after the quantify etc *?, +?, ??
//lookahead and lookbehind (lookaround), the syntax is X(?=Y)
//negative lookahead x(?!x)
//lookbeahind 
//positive lookbehind  (?<=Y)X
//negative lookbehind (?<!Y)X
//i keep on telling myself







let str = "1 turkey costs 30€";

console.log( str.match(/\d+(?=€)/) );