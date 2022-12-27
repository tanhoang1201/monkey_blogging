const Loading = ({ className }) => {
	return (
		<div
			className={`border-4 border-t-transparent border-b-transparent animate-spin w-6 h-6 rounded-full inline-block ${className}`}
		></div>
	);
};

export default Loading;
