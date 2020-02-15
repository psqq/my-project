import { h, Component } from 'preact';
import Unit from '../../game/unit';

export default class UnitInfoBar extends Component {
	/**
	 * @param {Object} props 
	 * @param {Unit} props.unit
	 * @param {Object} state 
	 */
    render({ unit }, state) {
        return (
            <div>
              HP: {unit.hp}
            </div>
        );
    }
}
