import { useNavigate } from 'react-router-dom';

const ModTemplate = (props) => {
	const navigate = useNavigate();
	const SideText = {
		fontSize: 48,
		position: 'relative',
		right: -30,
		top: 10,
		userSelect: 'none',
	};
	const ModStyles = {
		LightMod: {
			width: '25%',
			height: '100%',
			cursor: 'pointer',
			display: 'flex',
			backgroundColor:
				props.title === props.darkBackColor ? props.hoverMod : 'white',
			transition: 'all .5s ease',
			WebkitTransition: 'all .5s ease',
			MozTransition: 'all .5s ease',
			color: props.darkBackColor,
			borderRadius: 25,
			margin: 10,
			userSelect: 'none',
		},
		DarkMod: {
			width: '25%',
			height: '100%',
			cursor: 'pointer',
			display: 'flex',
			backgroundColor:
				props.title !== props.hoverMod ? props.darkBackColor : 'white',
			transition: 'all .5s ease',
			WebkitTransition: 'all .5s ease',
			MozTransition: 'all .5s ease',
			borderRadius: 25,
			color: 'white',
			margin: 10,
			userSelect: 'none',
		},
		LightIcon: {
			position: 'relative',
			top: 3,
			left: 60,
			fontSize: 48,
			color: props.darkBackColor,
			userSelect: 'none',
		},
		DarkIcon: {
			position: 'relative',
			top: 3,
			left: 60,
			fontSize: 48,
			color: 'white',
			userSelect: 'none',
		},
	};
	if (props.title === props.hoverMod || props.title === props.clickMod) {
		return (
			<div
				style={ModStyles.LightMod}
				key={props.index}
				onClick={() => {
					navigate(props.link);
					props.setClickMod(props.title);
				}}
				onMouseEnter={() => props.setHoverMod(props.title)}
				onMouseLeave={() => props.setHoverMod('')}
			>
				<p style={SideText}>
					<strong>{props.title.toUpperCase()}</strong>
				</p>
				<p style={ModStyles.LightIcon}>{props.icon}</p>
			</div>
		);
	} else {
		return (
			<div
				style={ModStyles.DarkMod}
				key={props.index}
				onClick={() => {
					navigate(props.link);
					props.setClickMod(props.title);
				}}
				onMouseEnter={() => props.setHoverMod(props.title)}
				onMouseLeave={() => props.setHoverMod('')}
			>
				<p style={SideText}>
					<strong>{`${props.title.toUpperCase()}`}</strong>
				</p>
				<p style={ModStyles.DarkIcon}>{props.icon}</p>
			</div>
		);
	}
};

export default ModTemplate;
