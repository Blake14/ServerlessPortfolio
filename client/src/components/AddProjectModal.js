import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddProjectModal = (props) => {
	return (
		<Modal show={props.showAddProjectModal} onHide={props.CloseAddProjectModal}>
			<Modal.Header closeButton>
				<Modal.Title>Project Detail Entry</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Form
					style={{
						display: 'flex',
					}}
				>
					<div>
						<Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
							<Form.Label>Project Title:</Form.Label>
							<Form.Control
								type='text'
								placeholder='Tetris Made w/ ReactJS'
								autoFocus
							/>
						</Form.Group>
						<Form.Group
							className='mb-3'
							controlId='exampleForm.ControlTextarea1'
						>
							<Form.Label>Summary:</Form.Label>
							<Form.Control
								as='textarea'
								rows={3}
								placeholder='Tetris made with ReactJS, NodeJS, MongoDB, and ExpressJS'
							/>
						</Form.Group>
						<Form.Group
							className='mb-3'
							controlId='exampleForm.ControlTextarea1'
						>
							<div style={{ display: 'flex', margin: 14 }}>
								<Form.Label
									style={{
										position: 'relative',
										left: -15,
										top: 5,
									}}
								>
									Tags:
								</Form.Label>{' '}
								<Form.Control
									type='text'
									placeholder='ReactJS'
									style={{
										width: 175,
										marginRight: 10,
									}}
								/>
								<Button variant='outline-info' size='sm'>
									Add
								</Button>
							</div>
							<Form.Control
								as='textarea'
								rows={3}
								value={`ReactJS, JavaScript`}
								disabled
							/>
						</Form.Group>
						<Form.Group controlId='formFileMultiple' className='mb-3'>
							<Form.Label>Images:</Form.Label>
							<Form.Control type='file' multiple />
						</Form.Group>
					</div>
					<div>
						<Form.Group controlId='formFileMultiple' className='mb-3'>
							<Form.Label>Images:</Form.Label>
							<Form.Control type='file' multiple />
						</Form.Group>
					</div>
				</Form>
			</Modal.Body>
			<Modal.Footer>
				<Button
					variant='outline-secondary'
					onClick={props.CloseAddProjectModal}
				>
					Close
				</Button>
				<Button variant='outline-info' onClick={props.OpenAddProjectModal}>
					Submit Project
				</Button>
			</Modal.Footer>
		</Modal>
	);
};

export default AddProjectModal;
