import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const EditUserDetails = () => {
	const ResumeAdminCenter = [
		{
			title: 'Employer',
			type: 'ENTRY',
			btnTitle: 'Change',
			action: () => {},
			order: 1,
			placeholder: 'MoneyBee Corporation',
		},
		{
			title: 'Upload New',
			type: 'IMAGE',
			btnTitle: 'Upload',
			action: () => {},
			order: 3,
			placeholder: '',
		},
		{
			title: 'Email',
			type: 'ENTRY',
			btnTitle: 'Change',
			action: () => {},
			order: 2,
			placeholder: 'jane.doe@gmail.com',
		},
	];
	return (
		<div
			style={{
				marginRight: 80,
				color: 'white',
			}}
		>
			{ResumeAdminCenter.sort((a, b) => (a.order > b.order ? 1 : -1)).map(
				(item, index) => {
					if (item.type === 'ENTRY') {
						return (
							<div
								key={index}
								style={{
									display: 'flex',
									margin: 14,
								}}
							>
								<Form.Label
									style={{ marginTop: 9, fontSize: 12, marginRight: 10 }}
								>
									<strong>{item.title}</strong>
								</Form.Label>
								<Form.Control
									type='text'
									size='sm'
									placeholder={item.placeholder}
									style={{
										width: 175,
										marginleft: 10,
									}}
								/>
								<Button
									variant='success'
									size='sm'
									style={{
										position: 'relative',
										right: -10,
									}}
								>
									{item.btnTitle}
								</Button>
							</div>
						);
					} else if (item.type === 'IMAGE') {
						return (
							<Form.Group
								key={index}
								controlId='formFileMultiple'
								className='mb-3'
								style={{ display: 'flex', width: 350, height: 40 }}
							>
								<Form.Label
									style={{
										width: 135,
										marginTop: 9,
										fontSize: 12,
										marginRight: 10,
									}}
								>
									<strong>Upload New:</strong>
								</Form.Label>
								<Form.Control
									size='sm'
									type='file'
									style={{ height: 20, marginTop: 4 }}
								/>
								<Button
									variant='success'
									size='sm'
									style={{
										position: 'relative',
										right: -10,
									}}
								>
									Upload
								</Button>
							</Form.Group>
						);
					}
				}
			)}
		</div>
	);
};

export default EditUserDetails;
