import React, { useState, useEffect } from 'react';

const Homepage = (props) => {
	return (
		<div
			style={{
				height: '100%',
			}}
		>
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
