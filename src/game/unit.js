import Victor from "victor";
import shortid from "shortid";
import Glyph from "./glyph";
import { make } from "@psqq/tools";

export default class Unit {
    static JOR_JARRUS = shortid.generate();
    static GOBLIN_MINION = shortid.generate();
    pos = new Victor(1, 1);
    type = Unit.GOBLIN_MINION;
    hp = 50;
    maxHp = 50;
    pos = new Victor(0, 0);
    glyph = make(Glyph, o => {
        o.ch = 'u';
    });
    setType(type) {
        this.type = type;
        if (type == Unit.JOR_JARRUS) {
            this.glyph = make(Glyph, o => {
                o.ch = 'J';
                o.fg = 'lightblue';
            });
        }
        if (type == Unit.GOBLIN_MINION) {
            this.glyph = make(Glyph, o => {
                o.ch = 'g';
                o.fg = 'green';
            });
        }
    }
}
