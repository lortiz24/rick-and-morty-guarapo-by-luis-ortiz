import { Box, Typography } from '@mui/material';

export const AppFooter = () => {
	return (
		<Box
			sx={{
				height: '60px',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				boxShadow: '0 -2px 8px 0 rgba(0,0,0,0.07)',
				bgcolor: '#fff',
			}}
		>
			<Typography>Eng. Luis Ortiz: Building solutions for the future</Typography>
		</Box>
	);
};
