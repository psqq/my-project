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
        unit.pos.add(dPos);
    }
}
