import { Box, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { CharacterFiltersValues } from '../../interfaces/character.interface';
import { speciesOptions, genderOptions, statusOptions } from '../../constants/filter.constants';
import { ChangeEvent } from 'react';

interface Props {
	filters: CharacterFiltersValues;
	onChange: (filters: CharacterFiltersValues) => void;
}

export const CharacterFilters = ({ filters, onChange }: Props) => {
	const handleChange = (
		e:
			| (Event & { target: { value: string; name: string } })
			| ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		onChange({ ...filters, [name!]: value });
	};

	return (
		<Box
			sx={{
				display: 'flex',
				gap: 2,
				mb: 4,
				flexWrap: 'wrap',
				justifyContent: 'center',
			}}
		>
			<TextField
				name='name'
				label='Filter by name...'
				variant='outlined'
				size='small'
				value={filters.name}
				onChange={handleChange}
			/>
			<FormControl size='small' sx={{ minWidth: 120 }}>
				<InputLabel>Species</InputLabel>
				<Select name='species' value={filters.species} label='Species' onChange={handleChange}>
					{speciesOptions.map((opt) => (
						<MenuItem key={opt} value={opt}>
							{opt || 'All'}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl size='small' sx={{ minWidth: 120 }}>
				<InputLabel>Gender</InputLabel>
				<Select name='gender' value={filters.gender} label='Gender' onChange={handleChange}>
					{genderOptions.map((opt) => (
						<MenuItem key={opt} value={opt}>
							{opt || 'All'}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl size='small' sx={{ minWidth: 120 }}>
				<InputLabel>Status</InputLabel>
				<Select name='status' value={filters.status} label='Status' onChange={handleChange}>
					{statusOptions.map((opt) => (
						<MenuItem key={opt} value={opt}>
							{opt || 'All'}
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</Box>
	);
};
