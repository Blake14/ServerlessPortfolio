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
		link: '/',
	},
	{
		title: 'Resume',
		icon: <BsCloudDownload />,
		link: '/',
	},
	{
		title: 'About Me',
		icon: <AiOutlineUser />,
		link: '/',
	},
	{
		title: 'Contact',
		icon: <RiContactsLine />,
		link: '/',
	},
];
