import { Box, Typography } from '@mui/material';
import Divider from '@mui/material/Divider';

interface Props {
	gender: string;
	status: string;
	species: string;
	origin: string;
	type: string;
	location: string;
}

export const CharacterInformations = ({
	gender,
	status,
	species,
	origin,
	type,
	location,
}: Props) => (
	<Box sx={{ p: 2 }}>
		<Typography variant='subtitle1' sx={{ fontWeight: 600, color: 'text.secondary', mb: 2 }}>
			Informations
		</Typography>
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
			<Box>
				<Typography variant='body2' sx={{ fontWeight: 600 }}>
					Gender
				</Typography>
				<Typography variant='body2'>{gender}</Typography>
			</Box>
			<Divider />
			<Box>
				<Typography variant='body2' sx={{ fontWeight: 600 }}>
					Status
				</Typography>
				<Typography variant='body2'>{status}</Typography>
			</Box>
			<Divider />
			<Box>
				<Typography variant='body2' sx={{ fontWeight: 600 }}>
					Specie
				</Typography>
				<Typography variant='body2'>{species}</Typography>
			</Box>
			<Divider />
			<Box>
				<Typography variant='body2' sx={{ fontWeight: 600 }}>
					Origin
				</Typography>
				<Typography variant='body2'>{origin}</Typography>
			</Box>
			<Divider />
			<Box>
				<Typography variant='body2' sx={{ fontWeight: 600 }}>
					Type
				</Typography>
				<Typography variant='body2'>{type || 'Unknown'}</Typography>
			</Box>
			<Divider />
			<Box>
				<Typography variant='body2' sx={{ fontWeight: 600 }}>
					Location
				</Typography>
				<Typography variant='body2'>{location}</Typography>
			</Box>
		</Box>
	</Box>
);
