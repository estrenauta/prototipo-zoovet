var name = prompt('cual es tu nombre y apellido?');

var firstIntial = name.slice(0,1);

var secondInitialPosition = name.indexOf(' ') +1;

var secondInitial = name.slice(secondInitialPosition, secondInitialPosition+1);

document.write( name.toUpperCase()+'Tus iniciales son '+firstIntial.toUpperCase() +secondInitial.toUpperCase());
