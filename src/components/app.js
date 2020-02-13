import { h, Component } from 'preact';
import { Router } from 'preact-router';

import MainMenu from '../routes/main-menu';
import GameComp from '../routes/game';
import HighScores from '../routes/high-scores';
import Game from '../game/game';

export default class App extends Component {

	game = new Game();
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">
				<Router onChange={this.handleRoute}>
					<MainMenu path="/" app={this}/>
					<GameComp path="/game/" app={this}/>
					<HighScores path="/high-scores/" app={this}/>
				</Router>
			</div>
		);
	}
}
