import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import logo from '../assets/logo.png';
const Navigation = () => {
	return (
		<Navbar sticky='top'>
			<Container
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Image
					src={logo}
					style={{
						height: 150,
						margin: 30,
						float: 'left',
					}}
				></Image>
			</Container>
		</Navbar>
	);
};

export default Navigation;
