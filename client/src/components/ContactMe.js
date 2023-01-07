import PFP from '../assets/PFP.JPEG';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { Button, ButtonGroup } from 'react-bootstrap';
import React, { useState } from 'react';

const ContactMe = (props) => {
	const [clickedContactBtn, setClickedContactBtn] = useState('Feedback');
	const ContactSyles = {
		Headers: {
			width: '50%',
			color: props.lightFontColor,
		},
		Container: {
			display: 'flex',
		},
		Body: {
			width: '50%',
		},
		SidePanel: {
			width: '33%',
			height: 500,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
		},
	};
	const ContactButtons = [
		{
			id: 1,
			btnTitle: 'Feedback',
		},
		{
			id: 2,
			btnTitle: 'Meet',
		},
		{
			id: 3,
			btnTitle: 'Hire',
		},
		{
			id: 4,
			btnTitle: 'Request',
		},
	];
	const ContactInfo = [
		{
			header: 'Text / Call',
			bodyTxt: '918.805.0671',
			icon: '',
		},
		{
			header: 'Email',
			bodyTxt: 'BlakeMcPherson2@gmail.com',
			icon: '',
		},
		{
			header: 'Pronouns',
			bodyTxt: 'He / Him',
			icon: '',
		},
		{
			header: 'Best Time of Contact',
			bodyTxt: 'MTWRF 08:00 - 16:00 CST (-6:00 UTC)',
			icon: '',
		},
	];
	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'space-evenly',
				alignItems: 'center',
				width: '100%',
			}}
		>
			<div style={ContactSyles.SidePanel}></div>
			<div
				style={{
					color: props.lightFontColor,
					width: '33%',
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center',
				}}
			>
				<div>
					<Image
						src={PFP}
						style={{
							borderRadius: 80,
							width: 200,
							padding: 4,
							backgroundColor: '#F5F4F2',
							border: '1px solid #c8c8c7',
							margin: 25,
						}}
					></Image>
					{ContactInfo.map((info, index) => {
						return (
							<div key={index}>
								<div style={ContactSyles.Container}>
									<p style={ContactSyles.Headers}>
										<strong>{info.header}</strong>
									</p>
									<p style={ContactSyles.Body}>&nbsp;{info.bodyTxt}</p>
								</div>
							</div>
						);
					})}
				</div>
			</div>
			<div style={ContactSyles.SidePanel}>
				<div>
					<Form.Label style={ContactSyles.Headers}>Name: </Form.Label>
					<Form.Control
						style={{ width: 400, marginLeft: 20 }}
						placeholder='Jane Doe'
					/>
					<Form.Label style={ContactSyles.Headers}>Message: </Form.Label>
					<Form.Control
						as='textarea'
						rows={4}
						style={{ width: 400, marginLeft: 20 }}
						placeholder='One thing you might consider...'
					/>
					<ButtonGroup
						style={{
							margin: 20,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						{ContactButtons.map((btn) => {
							return (
								<Button
									key={btn.id}
									variant={
										clickedContactBtn === btn.btnTitle ? 'info' : 'outline-info'
									}
									onClick={() => {
										setClickedContactBtn(btn.btnTitle);
									}}
								>
									{btn.btnTitle}
								</Button>
							);
						})}
					</ButtonGroup>
					<Button
						style={{
							margin: 20,
						}}
						variant='success'
					>
						Send Private Message
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ContactMe;
