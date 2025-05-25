import { CharacterCard } from './CharacterCard';
import { Box, Grid, Button, CircularProgress } from '@mui/material';
import { CharacterFiltersValues } from '../../interfaces/character.interface';
import { useCharacters } from '../../hook/useCharacters';

interface CharacterListProps {
	filters: CharacterFiltersValues;
}

export const CharacterList = ({ filters }: CharacterListProps) => {
	const { data, loading, isFetchingMore, loadMore } = useCharacters(filters);

	if (loading && !data) return <CircularProgress />;

	return (
		<Box>
			<Grid container spacing={2} justifyContent='center'>
				{data?.characters.results.map((char: any) => (
					<Grid key={char.id}>
						<CharacterCard
							id={char.id}
							name={char.name}
							image={char.image}
							species={char.species}
						/>
					</Grid>
				))}
			</Grid>
			{data?.characters.info.next && (
				<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
					<Button variant='outlined' onClick={loadMore} disabled={isFetchingMore}>
						Load More
					</Button>
				</Box>
			)}
		</Box>
	);
};
