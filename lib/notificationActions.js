import {getNotificationSystem} from './registerNotificationSystem';

/**
 * Displays a notification.
 * @memberOf module:addons/notifications
 * @tag Action
 * @param {Notification} notification - The notification object.
 */
export function addNotification(notification) {
	const nfs = getNotificationSystem();
	if (nfs) {
		nfs.addNotification({
			...notification,
			position: notification.position || 'br',
		});
	}
}

/**
 * Removes a displayed notification
 * @memberOf module:addons/notifications
 * @tag Action
 * @param {Notification} notification - The notification object.
 */
export function removeNotification(notification) {
	const nfs = getNotificationSystem();
	if (nfs) nfs.removeNotification(notification);
}

/**
 * The notification object can have even more properties. See {@link https://github.com/igorprado/react-notification-system#creating-a-notification|React Notification System}
 * for more information.
 * @memberOf module:addons/notifications
 * @typedef Notification
 * @property {string} level - The notification level, 'error', 'success', etc.
 * @property {string} title - The notifcation title.
 * @property {string} message - The notification message.
 * @property {string} position - The notifications position on screen, 'br', 'tr', 'bl', 'tl', etc.
 */
