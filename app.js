import { chdir, cwd } from 'node:process';
import 'dotenv/config'

//require ('dotenv').config()


console.log('skkj')

//about the global variable
/* console.log(global)
global.kasGlobal  = 'Kass is here'
console.log('kasGlobal' in global)
console.log(global.kasGlobal) */

//using setInterval
/* let count = 0
const interval = setInterval(()=>{
    console.log('hi')
    count++
    if(count===5){
        clearInterval(interval)
    }
},100) */

//using setTimeout
/* const timeOut = setTimeout(() => {
    console.log('hello')
}, 100); */

//About process object
//console.log(process)

//about the environment variables
const appEnv = process.env.APP_ENV || "development"

//display environment
console.log(`the environment is ${appEnv}`)
//changing the environment
/* 
added.env and also dotenv package
*/

//process.exit()
if(process.env.APP_ENV !== 'production'){
    console.log('We are not production');
    process.exit()
} else{
    try {
        console.log(`The right production mode in ${cwd()}`);
        chdir('D:/node/fistapp/test')
        console.log(cwd())
    } catch (error) {
        console.log(`Something went wron ${error}`);
    }
}


