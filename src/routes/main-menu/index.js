import { h, Component } from 'preact';
import style from './style';

export default class MainMenu extends Component {
	render() {
		return (
			<div class={style["grid-container"]}>
				<div class={style["main-menu"]}>
					Main Menu
					<hr />
					<a class={style["btn"]} href="/start-new-game/">Start new game</a><br />
					<a class={style["btn"]} href="/high-scores/">High scores</a>
				</div>
			</div>
		);
	}
}
