import { h, Component } from 'preact';
import GameLevel from '../../game/level';
import { Display } from 'rot-js';
import range from 'python-range';
import Victor from 'victor';

export default class Level extends Component {

    display = new Display({
        fontSize: 18,
        forceSquareRatio: true,
    });

    componentDidMount() {
        this.base.appendChild(this.display.getContainer());
    }

	/**
	 * @param {Object} props 
	 * @param {GameLevel} props.level
	 * @param {Object} state 
	 */
    render({ level }, state) {
        let { x: ww, y: hh } = level.size;
        this.display.setOptions({
            width: ww,
            height: hh,
        });
        for (let y of range(hh)) {
            for (let x of range(ww)) {
                const space = level.getSpace(new Victor(x, y));
                const glyph = space.getGlyph();
                this.display.draw(x, y, glyph.ch, glyph.fg, glyph.bg);
            }
        }
        return (
            <div class="level">
            </div>
        );
    }
}
