import { h, Component } from 'preact';
import GameLevel from '../../game/level';
import { Display } from 'rot-js';
import range from 'python-range';

export default class Level extends Component {

    display = new Display({
        width: 10,
        height: 3,
        fontSize: 16,
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
        ww += 2;
        hh += 2;
        this.display.setOptions({
            width: ww,
            height: hh,
        });
        for (let y of range(hh)) {
            for (let x of range(ww)) {
                if (y == 0 || y == hh - 1 || x == 0 || x == ww - 1) {
                    this.display.draw(x, y, '#', 'white', 'black');
                } else {
                    this.display.draw(x, y, '.', 'white', 'black');
                }
            }
        }
        return (
            <div class="level">
            </div>
        );
    }
}
