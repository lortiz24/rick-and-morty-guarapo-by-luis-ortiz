import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { Container } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export const AppNavbar = () => {
	return (
		<AppBar
			position='static'
			elevation={2}
			sx={{
				backgroundColor: '#fff',
				boxShadow: '0 2px 8px 0 rgba(0,0,0,0.07)',
				border: 'none',
				height: 60,
				justifyContent: 'center',
			}}
		>
			<Container>
				<Toolbar disableGutters>
					<Box
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							width: '100%',
						}}
					>
						<Box
							component='img'
							src={'assets/images/logo-black.svg'}
							alt='Logo'
							sx={{ height: 49, width: 46 }}
							width={46}
							height={49}
						/>
						<Box sx={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
							<Link
								component={RouterLink}
								to="/characters"
								underline="none"
								sx={{
									fontFamily: 'Karla, sans-serif',
									fontWeight: 'bold',
									fontSize: 18,
									color: '#111',
								}}
							>
								Characters
							</Link>
							<Link
								href='#'
								underline='none'
								sx={{
									fontFamily: 'Karla, sans-serif',
									fontWeight: 'bold',
									fontSize: 18,
									color: 'grey.600',
									cursor: 'default',
									pointerEvents: 'none'
								}}
							>
								Locations
							</Link>
							<Link
								href='#'
								underline='none'
								sx={{
									fontFamily: 'Karla, sans-serif',
									fontWeight: 'bold',
									fontSize: 18,
									color: 'grey.600',
									cursor: 'default',
									pointerEvents: 'none'
								}}
							>
								Episodes
							</Link>
						</Box>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
