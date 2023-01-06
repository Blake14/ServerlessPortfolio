import MyResumePDF from '../assets/Blake_McPherson_Resume_V6.pdf';

const ResumeCenter = () => {
	return (
		<div
			style={{
				marginTop: 100,
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					margin: 20,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
				}}
			>
				<embed src={MyResumePDF} width='60%' height='900px' />
			</div>
		</div>
	);
};

export default ResumeCenter;
