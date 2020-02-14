import Unit from "./unit";
import { make } from "@psqq/tools";
import Glyph from "./glyph";

export default class UnitMaker {
    static createJorJarrus() {
        const unit = new Unit();
        unit.type = Unit.JOR_JARRUS;
        unit.glyph = make(Glyph, o => {
            o.ch = 'J';
            o.fg = 'lightblue';
        });
        return unit;
    }
    static createGoblinMinion() {
        const unit = new Unit();
        unit.type = Unit.GOBLIN_MINION;
        unit.glyph = make(Glyph, o => {
            o.ch = 'g';
            o.fg = 'green';
        });
        return unit;
    }
}