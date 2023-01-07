import React from 'react';
import { RiImageAddLine } from 'react-icons/ri';
import Image from 'react-bootstrap/Image';
import star from '../assets/Star.png';
import { BsInfoSquare } from 'react-icons/bs';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Project = (props) => {
	return (
		<div
			style={{
				margin: 20,
				backgroundColor: props.lightFontColor,
				height: 170,
				borderRadius: 25,
				width: '44%',
				display: 'flex',
				boxShadow: 'black 0px 1px 3px, black 0px 1px 2px',
				position: 'relative',
			}}
		>
			<div
				style={{
					padding: 30,
					width: 150,
					border: `3px dotted ${props.darkBackColor}`,
					borderRadius: 50,
					margin: 30,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					fontSize: 48,
					cursor: 'pointer',
				}}
			>
				<RiImageAddLine />
			</div>
			<div
				style={{
					margin: 20,
					fontSize: 20,
					width: '80%',
				}}
			>
				<div>
					<p>
						<strong>Project Name: </strong>
						{props.title}
					</p>
				</div>
				<div
					style={{
						display: 'flex',
						width: 100,
					}}
				>
					<h6
						style={{
							position: 'relative',
							top: 3,
							marginRight: 5,
						}}
					>
						<strong>Skills:</strong>
					</h6>
					{props.skills.map((skill, index) => {
						return (
							<div
								key={index}
								style={{
									padding: 5,
									backgroundColor: props.darkBackColor,
									fontSize: 12,
									marginLeft: 4,
									borderRadius: 10,
									color: props.lightFontColor,
									width: 'fit-content',
								}}
							>
								{skill}
							</div>
						);
					})}
				</div>
				<div
					style={{
						display: 'flex',
						marginRight: 5,
						marginTop: 10,
					}}
				>
					<h6>
						<strong>Summary:</strong>
					</h6>
					<p
						style={{
							fontSize: 12,
							position: 'relative',
							top: 2,
							left: 6,
							whiteSpace: 'pre-wrap',
							width: '60%',
						}}
					>
						{props.summary ? `${props.summary.slice(0, 200)} (...)` : 'N/A'}
					</p>
				</div>
			</div>
			<div
				style={{
					padding: 10,
					display: 'flex',
					position: 'absolute',
					bottom: -20,
					right: 3,
				}}
			>
				<OverlayTrigger
					overlay={
						<Tooltip id='tooltip-disabled'>
							<Image
								src={star}
								style={{
									height: 25,
									margin: 7,
									borderRadius: 25,
								}}
							></Image>
							<strong>Enjoyment Rating</strong> is a subjective rating, but this
							is how much I enjoyed the overall project on a scale of 1-10.{' '}
						</Tooltip>
					}
				>
					<span className='d-inline-block'>
						<BsInfoSquare />
					</span>
				</OverlayTrigger>
				<Image
					src={star}
					style={{
						height: 50,
						marginTop: 5,
						borderRadius: 25,
					}}
				></Image>
				<div
					style={{
						display: 'flex',
						marginLeft: 10,
					}}
				>
					<p
						style={{
							fontSize: 40,
							color: props.enjoymentRating >= 7 ? '#619b8a' : '#d90429',
						}}
					>
						{props.enjoymentRating}
					</p>
					<div
						style={{
							display: 'flex',
							fontSize: 20,
							marginTop: 10,
						}}
					>
						<p> /</p>
						<p>10</p>
					</div>
				</div>
			</div>
			<div
				style={{
					padding: 15,
					display: 'flex',
					position: 'absolute',
					top: 0,
					right: 3,
				}}
			>
				<p
					style={{
						color: '#1e96fc',
						textDecoration: `underline #1e96fc`,
						textDecorationThickness: 2,
						fontSize: 12,
						cursor: 'pointer',
					}}
				>
					<strong>View Details</strong>
				</p>
			</div>
		</div>
	);
};

export default Project;
