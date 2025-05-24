import { Box, Container } from '@mui/material';
import { AppNavbar } from '../components/navbar/AppNavbar';

interface Props {
	children: React.ReactNode;
}
export const AppLayout = ({ children }: Props) => {
	return (
		<Box>
			<Box sx={{ mb: '26px' }}>
				<AppNavbar />
			</Box>
			<Container>{children}</Container>
		</Box>
	);
};
