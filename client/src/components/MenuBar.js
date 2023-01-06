import ModTemplate from './ModTemplate';

const MenuBar = (props) => {
	return (
		<div
			style={{
				height: 100,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				marginTop: 50,
			}}
		>
			{props.MainModules.map((mod, index) => {
				if (index === props.MainModules.length) {
				} else
					return (
						<ModTemplate
							key={index}
							title={mod.title}
							icon={mod.icon}
							link={mod.link}
							index={index}
							darkBackColor={props.darkBackColor}
							MainModules={props.MainModules}
							isHovering={mod.isHovering}
							hoverMod={props.hoverMod}
							setHoverMod={props.setHoverMod}
							clickMod={props.clickMod}
							setClickMod={props.setClickMod}
						/>
					);
			})}
		</div>
	);
};

export default MenuBar;
