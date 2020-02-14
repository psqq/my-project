import Victor from "victor";
import shortid from "shortid";
import Level from "./level";
import { make } from "@psqq/tools";
import Glyph from "./glyph";

export default class Space {
    static FLOOR = shortid.generate();
    static WALL = shortid.generate();
    static STAIR_UP = shortid.generate();
    static STAIR_DOWN = shortid.generate();
    pos = new Victor(1, 1);
    type = Space.FLOOR;
    /** @type {Level} */
    level = null;
    isMovable() {
        if ([Space.WALL].includes(this.type)) {
            return false;
        }
        if (this.getUnit()) {
            return false;
        }
        return true;
    }
    isWall() {
        return this.type == Space.WALL;
    }
    isFloor() {
        return this.type == Space.FLOOR;
    }
    isStairUp() {
        return this.type == Space.STAIR_UP;
    }
    isStairDown() {
        return this.type == Space.STAIR_DOWN;
    }
    getUnit() {
        for(let unit of this.level.units) {
            if (unit.pos.isEqualTo(this.pos)) {
                return unit;
            }
        }
    }
    getGlyph() {
        const unit = this.getUnit();
        if (unit) {
            return unit.glyph;
        }
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
        if (this.isStairDown()) {
            return make(Glyph, o => {
                o.ch = '>';
            });
        }
        if (this.isStairUp()) {
            return make(Glyph, o => {
                o.ch = '<';
            });
        }
        return make(Glyph, o => {
            o.ch = '?';
            o.fg = 'red';
        });
    }
}
