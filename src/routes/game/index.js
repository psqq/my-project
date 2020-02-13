import { h, Component } from 'preact';
import style from './style';
import Level from '../../components/level';
import App from '../../components/app';

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
				<div class={style["left-buttons"]}></div>
				<div class={style["right-buttons"]}></div>
				<div class={style["help-button"]}></div>
				<div class={style["top-box"]}></div>
			</div>
		);
	}
}
