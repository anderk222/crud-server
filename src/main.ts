import { App } from "./app";


class Main extends App {


    constructor(){
        super();
    }

    public run(){

        this.server.listen(this.server.get('PORT'), ()=>{

            console.log(`servidor corriendo en el puerto ${this.server.get('PORT')}`)

        } )

    }


};
new Main().run();