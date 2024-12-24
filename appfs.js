import fsPromises from 'fs/promises'
import fs from 'node:fs'

// reading from file promise approach
async function readFile(path) {
    try {
        const data = await fsPromises.readFile(path, 'utf-8')
        console.log(data)
    } catch (err) {
        console.error('Something went wrong', err)   
    }
}

//write to a file promise approach
async function writeToFile(path, content) {
    try {
        await fsPromises.writeFile(path,content)
        console.log('done successfully')
    } catch (err) {
        console.error('something went wrong:', err)
        return
    }
}

//writeToFile('./new.txt', 'This is some new content')

//appending to file
function addContent(path, content) {
    fsPromises.appendFile(path, `\n${content}`, (error)=>{
        if(error){
            console.error('not successfull', error)
        } else {
            console.log('all went well')
        }
    })
}

//addContent('./neow.txt', 'The new content was added')


//checking if file exist
function checkExistence(path) {
    fs.access(path, fs.constants.F_OK, (err) => {
        console.log(`${path} ${err ? 'does not exist' : 'exists'}`)
    })
}

//delete a file
function deleteFile(path){
    fs.unlink(path, (err) => {
        if (err) throw err;
        console.log(`${path} was deleted`);
    })
}

//deleteFile('./html.pdf')
//checkExistence('./neow.txt')

