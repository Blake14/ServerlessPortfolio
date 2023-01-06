import { BsCodeSlash, BsCloudDownload } from 'react-icons/bs';
import { AiOutlineUser, AiOutlineHome } from 'react-icons/ai';
import { RiContactsLine } from 'react-icons/ri';

export const MainModules = [
	{
		title: 'Home',
		icon: <AiOutlineHome />,
		link: '/',
	},
	{
		title: 'Projects',
		icon: <BsCodeSlash />,
		link: '/portfolio',
	},
	{
		title: 'Resume',
		icon: <BsCloudDownload />,
		link: '/resume',
	},
	{
		title: 'About Me',
		icon: <AiOutlineUser />,
		link: '/about',
	},
	{
		title: 'Contact',
		icon: <RiContactsLine />,
		link: '/contact',
	},
];
