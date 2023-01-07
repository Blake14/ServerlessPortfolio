import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Footer = (props) => {
	const FooterItems = [
		{
			title: 'GitHub',
			icon: <BsGithub />,
		},
		{
			title: 'Linkedin',
			icon: <BsLinkedin />,
		},
	];
	return (
		<div
			style={{
				height: 100,
				width: '100%',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					height: '100%',
					width: 200,
					display: 'flex',
					justifyContent: 'space-evenly',
					alignItems: 'center',
					cursor: 'pointer',
				}}
			>
				{FooterItems.map((item, index) => {
					return (
						<div
							key={index}
							style={{
								fontSize: 40,
								color: props.lightFontColor,
							}}
						>
							{item.icon}
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Footer;
