import { h, Component } from 'preact';
import style from './style';

export default class MsgBox extends Component {
	/**
	 * @param {Object} props 
	 * @param {string[]} props.messages
	 * @param {Object} state 
	 */
  render({ messages }, state) {
    console.log(messages);
    return (
      <div class={style["msgbox"]}>
        {messages[messages.length - 1]}
      </div>
    );
  }
}
