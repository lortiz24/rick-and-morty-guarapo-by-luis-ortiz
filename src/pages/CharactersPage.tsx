import { Box } from '@mui/material';
import { CharacterCard } from '../components/character/CharacterCard';

export const CharactersPage = () => {
	return (
		<Box
			sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
		>
			<Box
				component='img'
				src={'assets/images/Banner.png'}
				alt='Logo'
				sx={{ height: 200, width: 'auto' }}
			/>

			<CharacterCard
				name='Rick'
				image='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
				species='Human'
			/>
		</Box>
	);
};
