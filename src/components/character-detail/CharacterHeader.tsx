import { Typography } from '@mui/material';
import { Box } from '@mui/material';
const AVATAR_SIZE = 220;
export const CharacterHeader = ({ image, name }: { image: string; name: string }) => {
	return (
		<Box>
			<Box
				component='img'
				src={image}
				alt={name}
				sx={{ height: AVATAR_SIZE, width: AVATAR_SIZE, borderRadius: '50%', boxShadow: 2, mb: 2 }}
				width={AVATAR_SIZE}
				height={AVATAR_SIZE}
			/>
			<Typography variant='h4' sx={{ fontWeight: 500, mb: 3 }}>
				{name}
			</Typography>
		</Box>
	);
};
