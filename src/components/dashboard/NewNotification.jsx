import io from 'socket.io-client';
import { toast } from 'react-toastify';
import varkeys from '../../constants/keys';

const NotificationToast = () => {
	const url = varkeys.APP_URL;
	const socket = io(url);
	socket.on('notifications', () => {
		// eslint-disable-next-line no-new
		new toast('New notification');
		// console.log('Notification i scomming');
	});
	socket.close();
};

export default NotificationToast;
