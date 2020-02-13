import JorJarrus from "./jor-jarrus";
import Level from "./level";


export default class Game {
    constructor() {
        this.jor = new JorJarrus();
        this.depth = 1;
        this.level = new Level();
    }
}
