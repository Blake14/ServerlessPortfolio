import Navigation from './Navigation';
import ModTemplate from './ModTemplate';
import React, { useState } from 'react';
import { MainModules } from '../data/ModuleData';

const Homepage = (props) => {
	const [hoverMod, setHoverMod] = useState('');
	const [clickMod, setClickMod] = useState('');
	return (
		<div
			style={{
				height: '100%',
			}}
		>
			<Navigation />
			<div
				style={{
					height: 100,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: 50,
				}}
			>
				{MainModules.map((mod, index) => {
					if (index === MainModules.length) {
					} else
						return (
							<ModTemplate
								key={index}
								title={mod.title}
								icon={mod.icon}
								index={index}
								darkBackColor={props.darkBackColor}
								MainModules={MainModules}
								isHovering={mod.isHovering}
								hoverMod={hoverMod}
								setHoverMod={setHoverMod}
								clickMod={clickMod}
								setClickMod={setClickMod}
							/>
						);
				})}
			</div>
			<div
				style={{
					display: 'flex',
				}}
			>
				<div
					style={{
						float: 'bottom',
						color: 'white',
						fontSize: 22,
						margin: 150,
					}}
				>
					<p
						style={{
							width: 600,
							margin: 40,
						}}
					>
						Hello! My name is Blake. I am a self-motivated developer familiar
						with wide range of programming utilities and languages.
						Knowledgeable of back-end and front-end development requirements.{' '}
						<strong>Well-organized</strong>,<strong> customer-focused</strong>,
						and <strong>collaborative</strong> team player with excellent
						technical abilties offering 4+ years of experience.
					</p>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
