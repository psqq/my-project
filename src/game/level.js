import Victor from 'victor';
import range from 'python-range';
import Space from './space';
import { make } from '@psqq/tools';

export default class Level {
    constructor() {
        this.size = new Victor(1, 1);
        this.objects = [];
        /** @type {Space[][]} */
        this.spaces = [];
    }
    setSize(w, h) {
        this.size = new Victor(w, h);
        this.spaces = new Array(h);
        for (let y of range(h)) {
            this.spaces[y] = new Array(w);
            for (let x of range(w)) {
                this.spaces[y][x] = make(Space, obj => {
                    obj.level = this;
                    obj.pos = new Victor(x, y);
                    obj.type = Space.FLOOR;
                });
            }
        }
    }
    /**
     * @param {Victor} pos 
     */
    getSpace(pos) {
        return this.spaces[pos.y][pos.x];
    }
}
