import Victor from "victor";
import shortid from "shortid";

export default class Unit {
    static JOR_JARRUS = shortid.generate();
    static GOBLIN_MINION = shortid.generate();
    pos = new Victor(1, 1);
    type = Unit.GOBLIN_MINION;
    hp = 50;
    maxHp = 50;
    pos = new Victor(0, 0);
}
