import { Box } from '@mui/material';
import { useState } from 'react';
import { CharacterFilters } from '../components/character/CharacterFilters';
import { CharacterList } from '../components/character/CharacterList';
import { CharacterFiltersValues } from '../interfaces/character.interface';
import { useNavigate } from 'react-router-dom';
import { useCharacters } from '../hook/useCharacters';

/*Test:

1.Estado inicial de los filtros
2. Banner renderizada

*/
export const CharactersPage = () => {
	const [filters, setFilters] = useState<CharacterFiltersValues>({
		name: '',
		species: '',
		gender: '',
		status: '',
	});
	const { data, loading, isFetchingMore, loadMore } = useCharacters(filters);
	const navigate = useNavigate();

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
			<Box
				component='img'
				src={'assets/images/Banner.png'}
				alt='Logo'
				sx={{ height: 200, width: 'auto' }}
			/>
			<CharacterFilters filters={filters} onChange={setFilters} />
			<CharacterList
				characters={data?.characters.results || []}
				loading={loading && !data}
				hasMore={!!data?.characters.info.next}
				onLoadMore={loadMore}
				isLoadingMore={isFetchingMore}
				onCardClick={(id) => navigate(`/characters/detail/${id}`)}
			/>
		</Box>
	);
};
