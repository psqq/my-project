import Level from "./level";
import Victor from "victor";
import Space from "./space";
import range from 'python-range';
import Unit from "./unit";
import { make } from "@psqq/tools";

export default class LevelMaker {
    static createExampleLevel_1() {
        const l = new Level();
        const [w, h] = [10, 3];
        l.setSize(w, h);
        for (let y of range(h)) {
            for (let x of range(w)) {
                const space = l.getSpace(new Victor(x, y));
                if (x == 0 || y == 0 || x == w - 1 || y == h - 1) {
                    space.type = Space.WALL;
                } else {
                    space.type = Space.FLOOR;
                }
            }
        }
        const jorJarrus = make(Unit, o => {
            o.pos = new Victor(1, 1);
        });
        jorJarrus.setType(Unit.JOR_JARRUS);
        l.addUnit(jorJarrus);
        return l;
    }
}
