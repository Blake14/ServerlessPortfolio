import { ProjectTemplateData } from '../data/ProjectTemplateData';
import AddProjectModal from './AddProjectModal';
import Project from './Project';
import ProjectsFilter from './ProjectsFilter';
import React, { useState } from 'react';

const Projects = (props) => {
	const [showAddProjectModal, setShowAddProjectModal] = useState(false);
	const CloseAddProjectModal = () => setShowAddProjectModal(false);
	const OpenAddProjectModal = () => setShowAddProjectModal(true);
	let arrayLen = ProjectTemplateData.length;

	return (
		<div
			style={{
				paddingTop: 60,
				paddingBottom: 100,
			}}
		>
			<div
				style={{
					color: 'white',
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					width: '100%',
				}}
			>
				<ProjectsFilter />
			</div>
			<div
				style={{
					marginTop: 100,
					display: 'flex',
					flexWrap: 'wrap',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				{[...Array(ProjectTemplateData.length + 1)].map((x, index) => {
					if (index > arrayLen - 1) {
						return (
							<div
								onClick={OpenAddProjectModal}
								key={index}
								style={{
									margin: 20,
									height: 170,
									borderRadius: 25,
									width: '44%',
									display: 'flex',
									flexWrap: 'wrap',
									justifyContent: 'center',
									alignItems: 'center',
									color: 'white',
									fontSize: 28,
									cursor: 'pointer',
									boxShadow: 'black 0px 1px 3px, black 0px 1px 2px',
									backgroundColor: '#495057',
								}}
							>
								<p>+ Create New</p>
							</div>
						);
					} else {
						return (
							<Project
								key={index}
								index={ProjectTemplateData[index].id}
								title={ProjectTemplateData[index].title}
								id={ProjectTemplateData[index].id}
								lastUpdated={ProjectTemplateData[index].lastUpdated}
								comments={ProjectTemplateData[index].comments}
								arrayLen={arrayLen}
								darkBackColor={props.darkBackColor}
								skills={ProjectTemplateData[index].skills}
								enjoymentRating={ProjectTemplateData[index].enjoymentRating}
								summary={ProjectTemplateData[index].summary}
							/>
						);
					}
				})}
			</div>
			<AddProjectModal
				showAddProjectModal={showAddProjectModal}
				OpenAddProjectModal={OpenAddProjectModal}
				CloseAddProjectModal={CloseAddProjectModal}
			/>
		</div>
	);
};

export default Projects;
