grammar Usuarios;

// Reglas principales
programa   : usuario+ ;

usuario    : USER identificador LBRACE atributo* RBRACE ;

atributo   : identificador EQ valor PUNTO_Y_COMA ;

valor      : numero
           | cadena
           | booleano ;

numero     : DIGITO+ ;

cadena     : COMILLA caracter* COMILLA ;

booleano   : VERDADERO
           | FALSO ;

identificador : LETRA (LETRA | DIGITO)* ;

caracter   : LETRA
           | DIGITO
           | PUNTO
           | COMA
           | EXCLAMATION
           | QUESTION
           | COLON
           | PUNTO_Y_COMA
           | S_QUOTE
           ;


// Lexemas
LETRA      : [a-zA-Z]; 
DIGITO     : [0-9];
VERDADERO  : 'verdadero';
FALSO      : 'falso';
USER       : 'usuario';
LBRACE     : '{';
RBRACE     : '}';
PUNTO      : '.';
PUNTO_Y_COMA : ';';
EQ         : '=';
COMA       : ',';
COMILLA    : '"';
EXCLAMATION: '!';
QUESTION   : '?';
COLON      : ':';
S_QUOTE    : '\'';
WS : [ \t\r\n]+ -> skip ;

// prog: stat+;

// stat: expr NEWLINE?              #printExpr
//     | ID EQ expr NEWLINE?        #assign
//     | NEWLINE                   #blank
//     ;

// expr: expr op=(MUL|DIV) expr    #MulDiv
//     | expr op=(ADD|SUB) expr    #AddSub
//     | INT                       #int
//     | ID                        #id
//     | LPAREN expr RPAREN        #parens
//     ;

// MUL : '*';
// DIV : '/';
// ADD : '+';
// SUB : '-';
// EQ: '=';
// ID : [a-zA-Z]+;
// INT : [0-9];
// LPAREN : '(';
// RPAREN : ')';
// NEWLINE:'\r'? '\n';
// WS: [ \t]+ -> skip;
