import { Box, TextField, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import { CharacterFiltersValues } from '../../interfaces/character.interface';
import { speciesOptions, genderOptions, statusOptions } from '../../constants/filter.constants';
import { useCharacterFilters } from '../../hook/useCharacterFilters';

interface Props {
	filters: CharacterFiltersValues;
	onChange: (filters: CharacterFiltersValues) => void;
}

export const CharacterFilters = ({ filters, onChange }: Props) => {
	const { inputValue, handleChange } = useCharacterFilters(filters, onChange);

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
				value={inputValue}
				onChange={handleChange}
				sx={{ width: 240 }}
			/>
			<FormControl size='small' sx={{ minWidth: 120, width: 240 }}>
				<InputLabel>Species</InputLabel>
				<Select name='species' value={filters.species} label='Species' onChange={handleChange}>
					{speciesOptions.map((opt) => (
						<MenuItem key={opt} value={opt}>
							{opt || 'All'}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl size='small' sx={{ minWidth: 120, width: 240 }}>
				<InputLabel>Gender</InputLabel>
				<Select name='gender' value={filters.gender} label='Gender' onChange={handleChange}>
					{genderOptions.map((opt) => (
						<MenuItem key={opt} value={opt}>
							{opt || 'All'}
						</MenuItem>
					))}
				</Select>
			</FormControl>
			<FormControl size='small' sx={{ minWidth: 120, width: 240 }}>
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
