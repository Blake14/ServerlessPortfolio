import React, { useState } from 'react';
import Homepage from './components/Homepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import ModTemplate from './components/ModTemplate';
import Navigation from './components/Navigation';
import { MainModules } from './data/ModuleData';
import MenuBar from './components/MenuBar';
import AboutMe from './components/AboutMe';
import ContactMe from './components/ContactMe';
import ResumeCenter from './components/ResumeCenter';

const App = () => {
	const [darkBackColor, setDarkBackColor] = useState('#264653');
	const [hoverMod, setHoverMod] = useState('');
	const [clickMod, setClickMod] = useState('Home');

	document.body.style.backgroundColor = darkBackColor;
	return (
		<BrowserRouter>
			<div
				style={{
					position: 'sticky',
					top: 0,
					backgroundColor: darkBackColor,
				}}
			>
				<Navigation />
				<MenuBar
					darkBackColor={darkBackColor}
					MainModules={MainModules}
					ModTemplate={ModTemplate}
					hoverMod={hoverMod}
					clickMod={clickMod}
					setClickMod={setClickMod}
					setHoverMod={setHoverMod}
				/>
			</div>
			<Routes>
				<Route
					path='/'
					element={<Homepage darkBackColor={darkBackColor} />}
					exact
				/>
				<Route
					path='/portfolio'
					element={<Projects darkBackColor={darkBackColor} />}
					exact
				/>
				<Route path='/about' element={<AboutMe />} exact />
				<Route path='/contact' element={<ContactMe />} exact />
				<Route path='/resume' element={<ResumeCenter />} exact />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
