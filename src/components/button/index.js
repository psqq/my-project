import { h, Component } from 'preact';
import style from './style';

export default class Button extends Component {
	/**
	 * @param {Object} props 
	 * @param {string} props.text
	 * @param {Object} state 
	 */
    render({ text, onClick }, state) {
        return (
            <div class={style["button"]} onClick={onClick}>
                {text}
            </div>
        );
    }
}
