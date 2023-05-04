'use strict';

let a = parseInt(prompt('Enter a number from 0 to 7 to see the level of permissions'));

switch (a) {
    case 0:
        console.log(`Your level of rights ${a}; Bin:000(No rights)`);
        break;
    case 1:
        console.log(`Your level of rights ${a}; Bin:001 (Execute only)`);
        break;
    case 2:
        console.log(`Your level of rights ${a}; Bin:010 (Write only)`);
        break;
    case 3:
        console.log(`Your level of rights ${a}; Bin:011 (Write and execute)`);
        break;
    case 4:
        console.log(`Your level of rights ${a}; Bin:100 (Read only)`);
        break;
    case 5:
        console.log(`Your level of rights ${a}; Bin:101 (Read and execute)`);
        break;
    case 6:
        console.log(`Your level of rights ${a}; Bin:110 (Read and write)`);
        break;
    case 7:
        console.log(`Your level of rights ${a}; Bin:111 (Read, write and execute)`);
        break;
    default:
        console.log('You entered the wrong number. Enter a number between 0 and 7 and try again')

}