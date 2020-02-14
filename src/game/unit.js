import Victor from "victor";
import shortid from "shortid";
import Glyph from "./glyph";
import { make } from "@psqq/tools";

export default class Unit {
    static JOR_JARRUS = shortid.generate();
    static GOBLIN_MINION = shortid.generate();
    pos = new Victor(1, 1);
    type = null;
    hp = 50;
    maxHp = 50;
    pos = new Victor(0, 0);
    glyph = null;
}
