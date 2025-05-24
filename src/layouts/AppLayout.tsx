import { Box, Container } from '@mui/material';
import { AppNavbar } from '../components/navbar/AppNavbar';
import { AppFooter } from '../components/footer/AppFooter';

interface Props {
	children: React.ReactNode;
}
export const AppLayout = ({ children }: Props) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				minHeight: '100vh',
				gap: '26px',
			}}
		>
			<AppNavbar />
			<Container sx={{ flex: 1 }}>{children}</Container>
			<AppFooter />
		</Box>
	);
};
