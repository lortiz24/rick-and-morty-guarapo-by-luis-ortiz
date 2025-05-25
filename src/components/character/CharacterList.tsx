import { CharacterCard } from './CharacterCard';
import { Box, Button, CircularProgress } from '@mui/material';

interface CharacterListProps {
	characters: Array<{ id: string; name: string; image: string; species: string }>;
	onCardClick?: (id: string) => void;
	loading?: boolean;
	hasMore?: boolean;
	onLoadMore?: () => void;
	isLoadingMore?: boolean;
}

export const CharacterList = ({
	characters,
	onCardClick,
	loading,
	hasMore,
	onLoadMore,
	isLoadingMore,
}: CharacterListProps) => {
	if (loading) return <CircularProgress />;

	return (
		<Box>
			<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center' }}>
				{characters.map((char) => (
					<CharacterCard
						key={char.id}
						name={char.name}
						image={char.image}
						species={char.species}
						onClick={() => onCardClick?.(char.id)}
					/>
				))}
			</Box>
			{hasMore && onLoadMore && (
				<Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
					<Button variant='outlined' onClick={onLoadMore} disabled={isLoadingMore}>
						Load More
					</Button>
				</Box>
			)}
		</Box>
	);
};
