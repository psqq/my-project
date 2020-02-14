import Victor from "victor";
import shortid from "shortid";
import Level from "./level";

export default class Space {
    static FLOOR = shortid.generate();
    static WALL = shortid.generate();
    pos = new Victor(1, 1);
    type = Space.FLOOR;
    /** @type {Level} */
    level = null;
    isWall() {
        return this.type == Space.WALL;
    }
    isFloor() {
        return this.type == Space.FLOOR;
    }
    getUnit() {
        return null;
    }
}
