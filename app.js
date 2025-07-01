import readLine from 'readline';
import readFromFile from "./read.js";
import createObject from "./create.js"


const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})



    rl.question(
    `Choose an option:
    ===========================
    a - Read a file
    b - Create an object
    c - Update an object
    d - Delete a key from object
    ===========================
    Enter your choice: `, (answer)  =>{
    console.log(answer)

    switch(answer.toLocaleLowerCase()){
        case 'a':
        readFromFile()
            break;
        case 'b':
            createObject()
            break;
        case  'c':
            break;
        case 'd':
            break;
    }
    rl.close();
})

