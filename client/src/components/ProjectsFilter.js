import { Filter } from 'react-bootstrap-icons';
import Form from 'react-bootstrap/Form';

const ProjectsFilter = () => {
	const FilterStyles = {
		FormControl: {
			width: 200,
		},
		Title: {
			marginRight: 10,
			marginLeft: 10,
			marginTop: 7,
			fontSize: 20,
		},
		Container: {
			display: 'flex',
			margin: 20,
			justifyContent: 'space-evenly',
			alignItems: 'center',
			width: '100%',
		},
		QuickFlex: {
			display: 'flex',
			height: 45,
		},
		Ratings: {
			marginLeft: 70,
			marginTop: -20,
		},
	};
	return (
		<div style={FilterStyles.Container}>
			<div style={FilterStyles.QuickFlex}>
				<div style={FilterStyles.QuickFlex}>
					<p style={FilterStyles.Title}>Category: </p>
					<Form.Control
						type='text'
						placeholder='Web Development'
						style={FilterStyles.FormControl}
					/>
				</div>
			</div>
			<div style={FilterStyles.QuickFlex}>
				<p style={FilterStyles.Title}>Skill: </p>
				<Form.Control
					type='text'
					placeholder='JavaScript'
					style={FilterStyles.FormControl}
				/>
			</div>
			<div style={FilterStyles.QuickFlex}>
				<p style={FilterStyles.Title}>Last Updated (Central):</p>
				<div style={FilterStyles.QuickFlex}>
					<Form.Control type='date' style={FilterStyles.FormControl} />
					<p style={FilterStyles.Title}>-to-</p>
					<Form.Control type='date' style={FilterStyles.FormControl} />
				</div>
			</div>
			<div>
				<div style={FilterStyles.Ratings}>
					<p style={FilterStyles.Title}>Competency Rating:</p>
					<Form.Range />
				</div>
			</div>
			<div>
				<div style={FilterStyles.Ratings}>
					<p style={FilterStyles.Title}>Enjoyment Rating:</p>
					<Form.Range />
				</div>
			</div>
		</div>
	);
};

export default ProjectsFilter;
