import fs  from "fs";
import readLine from 'readline';

export default function createObject(){
    fs.readFile("./file1.txt", "utf-8",(err,data) =>  {
        if(err){
            console.error("Error reading file", err);
            return;
            }
        let dataFormatJson  = JSON.parse(data);
        let maxID;
        console.log("typeof dataFormatJson: ",typeof dataFormatJson)
        if (dataFormatJson.length === 0)  maxID = 0;
        else{
              maxID = Math.max(...dataFormatJson.map(num => num.ID))
        }

        const rl =  readLine.createInterface({
        input: process.stdin,
        output: process.stdout
        })


        rl.question(
            `Enter a key:`,(key) =>{
                rl.question("enter a value: ",(value)=>{
                dataFormatJson.push({['ID']:maxID+1,[key]:value});
                console.log("dataFormatJson", dataFormatJson);

                fs.writeFile("./file1.txt", JSON.stringify(dataFormatJson),  err => {
                    if(err){
                        console.error("error:", err)
                        return;
                    }
                    console.log("Successfully inserted the data into the file")
                })
                rl.close()
                })
                
            })
    })
}

createObject()