import React from 'react';

const Title = ({ titleName, themeColor }) => {
	return (
		<div className='title-container'>
			<div className={`line line-${themeColor}`}>
				<div className={`diamond diamond-${themeColor} left`}></div>
			</div>
			<span className={`title-text text-${themeColor}`}>{titleName}</span>
			<div className={`line line-${themeColor}`}>
				<div className={`diamond diamond-${themeColor} right`}></div>
			</div>
		</div>
	);
};

export default Title;
