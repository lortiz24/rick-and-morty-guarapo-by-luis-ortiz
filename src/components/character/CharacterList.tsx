import { useState } from 'react';
import { useCharacters } from '../../hook/useCharacters';
import { CharacterCard } from './CharacterCard';
import { Box, Grid, Button, CircularProgress } from '@mui/material';
import { CharacterFiltersValues } from '../../interfaces/character.interface';

interface CharacterListProps {
	filters: CharacterFiltersValues;
}

export const CharacterList = ({ filters }: CharacterListProps) => {
	const [page, setPage] = useState(1);
	const { data, loading, fetchMore } = useCharacters(filters, page);

	const handleLoadMore = () => {
		if (data?.characters.info.next) {
			fetchMore({
				variables: { page: data.characters.info.next, filter: filters },
				updateQuery: (prev, { fetchMoreResult }) => {
					if (!fetchMoreResult) return prev;
					return {
						characters: {
							...fetchMoreResult.characters,
							results: [...prev.characters.results, ...fetchMoreResult.characters.results],
						},
					};
				},
			});
			setPage(data.characters.info.next);
		}
	};

	if (loading && !data) return <CircularProgress />;

	return (
		<Box>
			<Grid container spacing={2} justifyContent='center'>
				{data?.characters.results.map((char: any) => (
					<Grid item key={char.id}>
						<CharacterCard name={char.name} image={char.image} species={char.species} />
					</Grid>
				))}
			</Grid>
			{data?.characters.info.next && (
				<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
					<Button variant='outlined' onClick={handleLoadMore}>
						Load More
					</Button>
				</Box>
			)}
		</Box>
	);
};
