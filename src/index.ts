import  app  from "./app/app";
import "./app/config/database";


function main(){
    app.listen(app.get('port'))
    console.log("Server on Port: ",app.get('port'))
}

main();