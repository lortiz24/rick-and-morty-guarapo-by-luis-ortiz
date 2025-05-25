import { Box, Typography, Divider } from '@mui/material';

interface CharacterInformationsProps {
	children: React.ReactNode;
}

const CharacterInformations = ({ children }: CharacterInformationsProps) => (
	<Box sx={{ p: 2 }}>
		<Typography variant='subtitle1' sx={{ fontWeight: 600, color: 'text.secondary', mb: 2 }}>
			Informations
		</Typography>
		<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
			{children}
		</Box>
	</Box>
);

interface FieldProps {
	label: string;
	value: string | number | React.ReactNode;
}

const Field = ({ label, value }: FieldProps) => (
	<>
		<Box>
			<Typography variant='body2' sx={{ fontWeight: 600 }}>
				{label}
			</Typography>
			<Typography variant='body2'>{value}</Typography>
		</Box>
		<Divider />
	</>
);

// Asignar el subcomponente como propiedad del principal
CharacterInformations.Field = Field;

export { CharacterInformations };
