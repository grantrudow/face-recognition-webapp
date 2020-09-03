import React from 'react';
import './FaceRecognition.css'


const FaceRecognition = ({ imageUrl, box }) => {
	return (
		<div>
			<div className="center ma">
				<div className="absolute mt2">
					<img id="inputImage" className="detect-image" alt="face" src={imageUrl} />
					<div className="bounding-box" style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}>

					</div>
				</div>
			</div>
		</div>
	);
}

export default FaceRecognition;