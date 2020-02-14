import Victor from "victor";
import shortid from "shortid";
import Level from "./level";

export default class Space {
    static FLOOR = shortid.generate();
    static WALL = shortid.generate();
    pos = new Victor(1, 1);
    type = Space.FLOOR;
    /**
     * @param {Level} level 
     */
    constructor(level) {
        this.level = level;
    }
    isWall() {
        return this.type == Space.WALL;
    }
    getUnit() {
        return this.type == Space.WALL;
    }
}
