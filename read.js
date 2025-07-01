import fs from "fs"

export default function readFromFile(){
    fs.readFile("./file1.txt", "utf-8",(err,data) =>  {
        if(err){
            console.error("Error reading file", err);
            return;
        }
        console.log(data)
    })
}
