grammar Usuarios;

// Reglas principales
programa   : usuario+ ;

usuario    : USER ID LBRACE atributo* RBRACE ;

atributo   : ID EQ valor SEMICOLON ;

valor      : numero
           | cadena
           | booleano ;

numero     : NUMBER ;

cadena     : STRING ;

booleano   : TRUE
           | FALSE ;

// Lexemas
TRUE       : 'verdadero';
FALSE      : 'falso';
USER       : 'usuario';
ID         : [a-zA-ZáéíóúÁÉÍÓÚñÑ_][a-zA-Z0-9áéíóúÁÉÍÓÚñÑ_]* ;
STRING     : '"' (~["\r\n])* '"' ;
NUMBER     : [0-9]+;
LBRACE     : '{';
RBRACE     : '}';
PUNTO      : '.';
SEMICOLON  : ';';
EQ         : '=';
COMA       : ',';
COMILLA    : '"';
EXCLAMATION: '!';
QUESTION   : '?';
COLON      : ':';
S_QUOTE    : '\'';
WS : [ \t\r\n]+ -> skip ;
