import { h, Component } from 'preact';
import style from './style';
import Level from '../../components/level';
import App from '../../components/app';
import Button from '../../components/button';

export default class Game extends Component {
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
					<Button text="Left" onClick={e => e} />
					<Button text="Right" onClick={e => e} />
					<Button text="Up" onClick={e => e} />
					<Button text="Down" onClick={e => e} />
				</div>
				<div class={style["right-buttons"]}>
					<Button text="Q" onClick={e => e} />
					<Button text="W" onClick={e => e} />
					<Button text="E" onClick={e => e} />
					<Button text="R" onClick={e => console.log('R')} />
				</div>
				<div class={style["help-button"]}></div>
				<div class={style["top-box"]}></div>
			</div>
		);
	}
}
