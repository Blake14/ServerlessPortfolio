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
import Footer from './components/Footer';

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
					backgroundColor: darkBackColor,
				}}
			>
				<div
					style={{
						position: 'sticky',
						backgroundColor: darkBackColor,
						top: 0,
						zIndex: 1,
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
				<div
					style={{
						position: 'sticky',
						bottom: 0,
						backgroundColor: darkBackColor,
					}}
				>
					<Footer />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
