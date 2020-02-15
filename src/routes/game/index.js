import { h, Component } from 'preact';
import style from './style';
import Level from '../../components/level';
import App from '../../components/app';
import Button from '../../components/button';
import UnitInfoBar from '../../components/unit-info-bar';
import Unit from '../../game/unit';
import Victor from 'victor';
import MsgBox from '../../components/msgbox';

export default class Game extends Component {
	/**
	 * @param {string} name 
	 */
	onMoveBtn(name) {
		/** @type {App} */
		const app = this.props.app;
		const jor = app.game.level.findUnits(Unit.JOR_JARRUS)[0];
		const dirByName = {
			left: new Victor(-1, 0),
			right: new Victor(1, 0),
			up: new Victor(0, -1),
			down: new Victor(0, 1),
		};
		const dir = dirByName[name.toLowerCase()];
		if (dir) {
			app.game.moveUnit(jor, dir);
			this.forceUpdate();
			app.game.addMessage('You are moved.');
		}
	}
	/**
	 * @param {Object} props 
	 * @param {App} props.app
	 * @param {Object} state 
	 */
	render({ app }, state) {
		const jorJarrus = app.game.level.findUnits(Unit.JOR_JARRUS)[0];
		return (
			<div class={style["grid-container"]}>
				<div class={style["msg-box"]}>
					<MsgBox messages={app.game.getMessages()} />
				</div>
				<div class={style["level"]}>
					<Level level={app.game.level} />
				</div>
				<div class={style["left-buttons"]}>
					<Button text="Left" onClick={e => this.onMoveBtn("Left")} />
					<Button text="Right" onClick={e => this.onMoveBtn("Right")} />
					<Button text="Up" onClick={e => this.onMoveBtn("Up")} />
					<Button text="Down" onClick={e => this.onMoveBtn("Down")} />
				</div>
				<div class={style["right-buttons"]}>
					<Button text="<" onClick={e => e} />
					<Button text=">" onClick={e => e} />
				</div>
				<div class={style["help-button"]}>
					<Button text="Help" onClick={e => e} />
				</div>
				<div class={style["top-box"]}>
					<UnitInfoBar unit={jorJarrus}/>
				</div>
			</div>
		);
	}
}
