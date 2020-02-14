import LevelMaker from "./level-maker";
import Unit from "./unit";
import Victor from "victor";

export default class Game {
    constructor() {
        this.level = LevelMaker.createExampleLevel_1();
    }
    /**
     * @param {Unit} unit 
     * @param {Victor} dPos 
     */
    moveUnit(unit, dPos) {
        const newPos = unit.pos.clone().add(dPos);
        if (this.level.getSpace(newPos).isMovable()) {
            unit.pos.add(dPos);
        }
    }
}
