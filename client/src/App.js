import React, { useState } from 'react';
import Homepage from './components/Homepage';
const App = () => {
	const [darkBackColor, setDarkBackColor] = useState('#264653');
	document.body.style.backgroundColor = darkBackColor;
	return (
		<div>
			<Homepage darkBackColor={darkBackColor} />
		</div>
	);
};

export default App;
