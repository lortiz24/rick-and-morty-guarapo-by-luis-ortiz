import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Box, Button, CircularProgress } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CharacterInformations } from '../components/character-detail/CharacterInformations';
import { CharacterEpisodes } from '../components/character-detail/CharacterEpisodes.tsx';
import { CharacterHeader } from '../components/character-detail/CharacterHeader.tsx';

const GET_CHARACTER = gql`
	query GetCharacter($id: ID!) {
		character(id: $id) {
			id
			name
			image
			gender
			status
			species
			type
			origin {
				name
				id
			}
			location {
				name
				id
			}
			episode {
				id
				name
				episode
				air_date
			}
		}
	}
`;

export const CharactersDetailPage = () => {
	const { characterId } = useParams<{ characterId: string }>();
	const navigate = useNavigate();
	const isValidId = characterId && !isNaN(Number(characterId));

	if (!isValidId) {
		return <div style={{ color: 'red', fontWeight: 'bold' }}>ID de personaje no válido</div>;
	}

	const { data, loading, error } = useQuery(GET_CHARACTER, {
		variables: { id: characterId },
		skip: !characterId,
	});

	if (loading)
		return (
			<Box
				sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					minHeight: '60vh',
					width: '100%',
				}}
			>
				<CircularProgress />
			</Box>
		);
	if (error) return <div>Error al cargar el personaje</div>;

	const character = data?.character;
	if (!character) return <div>No se encontró el personaje</div>;

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				gap: 2,
				mt: 2,
			}}
		>
			<Box sx={{ alignSelf: 'flex-start', mb: 2 }}>
				<Button
					startIcon={<ArrowBackIcon />}
					variant='text'
					sx={{ textTransform: 'none', fontWeight: 500, color: 'black' }}
					onClick={() => navigate('/characters')}
				>
					Go Back
				</Button>
			</Box>
			<CharacterHeader image={character.image} name={character.name} />

			<Box
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', md: 'row' },
					width: '100%',
					maxWidth: 900,
					gap: '20px',
				}}
			>
				<Box
					sx={{
						flex: 1,
						minWidth: 0,
						background: '#fff',
						borderRadius: 2,
						boxShadow: 1,
					}}
				>
					<CharacterInformations>
						<CharacterInformations.Field label='Gender' value={character.gender} />
						<CharacterInformations.Field label='Status' value={character.status} />
						<CharacterInformations.Field label='Specie' value={character.species} />
						<CharacterInformations.Field label='Origin' value={character.origin?.name} />
						<CharacterInformations.Field label='Type' value={character.type || 'Unknown'} />
						<CharacterInformations.Field label='Location' value={character.location?.name} />
					</CharacterInformations>
				</Box>
				<Box
					sx={{
						flex: 1,
						minWidth: 0,
						background: '#fff',
						borderRadius: 2,
						boxShadow: 1,
						height: { xs: 'auto', md: 352 },
						overflowY: 'auto',
					}}
				>
					<CharacterEpisodes episodes={character.episode} scrollHeight={352} />
				</Box>
			</Box>
		</Box>
	);
};
