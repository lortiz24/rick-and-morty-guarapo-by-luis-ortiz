import { Container } from '@mui/material';
import { AppNavbar } from '../components/navbar/AppNavbar';

interface Props {
	children: React.ReactNode;
}
export const AppLayout = ({ children }: Props) => {
	return (
		<div>
			<AppNavbar />

			<Container>{children}</Container>
		</div>
	);
};
