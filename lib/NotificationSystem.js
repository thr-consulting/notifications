import React, {Component} from 'react';
import ReactNotificationSystem from 'react-notification-system';
import TPropTypes from '@thx/tproptypes';
import {registerNotificationSystem} from './registerNotificationSystem';

export default class NotificationSystem extends Component {
	static propTypes = {
		children: TPropTypes.reactElements,
	};

	componentDidMount() {
		registerNotificationSystem(this._notify);
	}

	render() {
		return (
			<div style={{height: '100%'}}>
				{this.props.children}
				<ReactNotificationSystem ref={r => (this._notify = r)}/>
			</div>
		);
	}
}
