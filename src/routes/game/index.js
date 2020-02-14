import { h, Component } from 'preact';
import style from './style';
import Level from '../../components/level';
import App from '../../components/app';
import Button from '../../components/button';
import Unit from '../../game/unit';
import Victor from 'victor';

export default class Game extends Component {
	/**
	 * @param {string} name 
	 */
	onMoveBtn(name) {
		const app = this.props.app;
		const jor = app.game.level.findUnits(Unit.JOR_JARRUS)[0];
		if (name.toLowerCase() == "left") {
			app.game.moveUnit(jor, new Victor(-1, 0));
			this.forceUpdate();
		}
		if (name.toLowerCase() == "right") {
			app.game.moveUnit(jor, new Victor(1, 0));
			this.forceUpdate();
		}
		if (name.toLowerCase() == "up") {
			app.game.moveUnit(jor, new Victor(0, -1));
			this.forceUpdate();
		}
		if (name.toLowerCase() == "down") {
			app.game.moveUnit(jor, new Victor(0, 1));
			this.forceUpdate();
		}
	}
	/**
	 * @param {Object} props 
	 * @param {App} props.app
	 * @param {Object} state 
	 */
	render({ app }, state) {
		return (
			<div class={style["grid-container"]}>
				<div class={style["msg-box"]}></div>
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
					<Button text="Q" onClick={e => e} />
					<Button text="W" onClick={e => e} />
					<Button text="E" onClick={e => e} />
					<Button text="R" onClick={e => console.log('R')} />
				</div>
				<div class={style["help-button"]}>
					<Button text="Help" onClick={e => e} />
				</div>
				<div class={style["top-box"]}></div>
			</div>
		);
	}
}
