import Victor from "victor";
import shortid from "shortid";
import Level from "./level";
import { make } from "@psqq/tools";
import Glyph from "./glyph";

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
    getGlyph() {
        if (this.isFloor()) {
            return make(Glyph, o => {
                o.ch = '.';
            });
        }
        if (this.isWall()) {
            return make(Glyph, o => {
                o.ch = '#';
            });
        }
        return make(Glyph, o => {
            o.ch = '?';
            o.fg = 'red';
        });
    }
}
