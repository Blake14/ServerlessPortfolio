import React, { useState } from 'react';
import Homepage from './components/Homepage';
import Button from 'react-bootstrap/Button';
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
	const [lightFontColor, setLightFontColor] = useState('white');
	const [hoverMod, setHoverMod] = useState('');
	const [clickMod, setClickMod] = useState('Home');

	const ColorSchemes = [
		{
			bgColor: '#3a0ca3',
			txtColor: '#fee440',
		},
		{
			bgColor: '#03045e',
			txtColor: '#caf0f8',
		},
		{
			bgColor: '#264653',
			txtColor: '#ffffff',
		},
		{
			bgColor: '#3d405b',
			txtColor: '#f2cc8f',
		},
	];
	document.body.style.backgroundColor = darkBackColor;
	return (
		<BrowserRouter>
			<div>
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
							lightFontColor={lightFontColor}
							MainModules={MainModules}
							ModTemplate={ModTemplate}
							hoverMod={hoverMod}
							clickMod={clickMod}
							setClickMod={setClickMod}
							setHoverMod={setHoverMod}
						/>
					</div>
					<div
						style={{
							position: 'absolute',
							left: -200,
							top: -400,
							padding: 50,
							margin: 50,
							zIndex: 2,
							width: 500,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							position: 'relative',
						}}
					>
						{ColorSchemes.map((cs, index) => {
							if (
								cs.bgColor === darkBackColor &&
								cs.txtColor === lightFontColor
							) {
								return (
									<div
										key={index}
										style={{
											cursor: 'pointer',
											position: 'absolute',
										}}
										onClick={() => {
											setDarkBackColor(cs.bgColor);
											setLightFontColor(cs.txtColor);
										}}
									>
										<div
											style={{
												width: 80,
												height: 60,
												border: '3px solid white',
												borderRadius: 25,
												color: lightFontColor,
												backgroundColor: cs.bgColor,
												clipPath: 'polygon(100% 100%, 0 100%, 0 0)',
												position: 'absolute',
												left: index * 100 + 0,
												opacity: 0.4,
											}}
										></div>
										<div
											style={{
												width: 80,
												height: 60,
												border: '3px solid white',
												borderRadius: 25,
												color: lightFontColor,
												backgroundColor: cs.txtColor,
												clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
												position: 'absolute',
												left: index * 100 + 0,
												opacity: 0.4,
											}}
										></div>
									</div>
								);
							} else {
								return (
									<div
										key={index}
										style={{
											cursor: 'pointer',
											position: 'absolute',
										}}
										onClick={() => {
											setDarkBackColor(cs.bgColor);
											setLightFontColor(cs.txtColor);
										}}
									>
										<div
											style={{
												width: 80,
												height: 60,
												border: '3px solid white',
												borderRadius: 25,
												color: lightFontColor,
												backgroundColor: cs.bgColor,
												clipPath: 'polygon(100% 100%, 0 100%, 0 0)',
												position: 'absolute',
												left: index * 100 + 0,
											}}
										></div>
										<div
											style={{
												width: 80,
												height: 60,
												border: '3px solid white',
												borderRadius: 25,
												color: lightFontColor,
												backgroundColor: cs.txtColor,
												clipPath: 'polygon(0 0, 100% 0, 100% 100%)',
												position: 'absolute',
												left: index * 100 + 0,
											}}
										></div>
									</div>
								);
							}
						})}
					</div>
				</div>
				<Routes>
					<Route
						path='/'
						element={
							<Homepage
								darkBackColor={darkBackColor}
								lightFontColor={lightFontColor}
							/>
						}
						exact
					/>
					<Route
						path='/portfolio'
						element={
							<Projects
								darkBackColor={darkBackColor}
								lightFontColor={lightFontColor}
							/>
						}
						exact
					/>
					<Route
						path='/about'
						element={<AboutMe lightFontColor={lightFontColor} />}
						exact
					/>
					<Route
						path='/contact'
						element={<ContactMe lightFontColor={lightFontColor} />}
						exact
					/>
					<Route
						path='/resume'
						element={<ResumeCenter lightFontColor={lightFontColor} />}
						exact
					/>
				</Routes>
				<div
					style={{
						position: 'sticky',
						bottom: 0,
						backgroundColor: darkBackColor,
					}}
				>
					<Footer lightFontColor={lightFontColor} />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
