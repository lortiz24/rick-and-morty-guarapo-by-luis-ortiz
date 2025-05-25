import { Box, Typography, Divider } from '@mui/material';
import React from 'react';
interface CharacterInformationsProps {
	children: React.ReactNode;
}
const CharacterInformations = ({ children }: CharacterInformationsProps) => {
	const childrenArray = React.Children.toArray(children);
	return (
		<Box sx={{ p: 2 }}>
			<Typography variant='subtitle1' sx={{ fontWeight: 600, color: 'text.secondary', mb: 2 }}>
				Informations
			</Typography>
			<Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
				{childrenArray.map((child, index) => (
					<React.Fragment key={index}>
						{child}
						{index < childrenArray.length - 1 && <Divider />}
					</React.Fragment>
				))}
			</Box>
		</Box>
	);
};

interface FieldProps {
	label: string;
	value: string | number | React.ReactNode;
}

const Field = ({ label, value }: FieldProps) => (
	<Box aria-label={`${label} - ${value}`}>
		<Typography variant='body2' sx={{ fontWeight: 600 }}>
			{label}
		</Typography>
		<Typography variant='body2'>{value}</Typography>
	</Box>
);

CharacterInformations.Field = Field;

export { CharacterInformations };
