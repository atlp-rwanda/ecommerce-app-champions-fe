const TimeCount = (time) => {
	const minutes = Math.floor(time / 60);
	const seconds = time % 60;
	return `${minutes} m ${seconds < 10 ? '0' : ''}${seconds} sec`;
};

export default TimeCount;
