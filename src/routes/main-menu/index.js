import { h, Component } from 'preact';
import style from './style';
import App from '../../components/app';

export default class MainMenu extends Component {
	/**
	 * @param {Object} props 
	 * @param {App} props.app
	 * @param {Object} state 
	 */
	render({ app }, state) {
		let g = app.game;
		return (
			<div class={style["grid-container"]}>
				<div class={style["main-menu"]}>
					Main Menu
					<hr />
					<a class={style["btn"]} href="/game/">Start new game</a><br />
					<a class={style["btn"]} href="/high-scores/">High scores</a>
				</div>
			</div>
		);
	}
}
