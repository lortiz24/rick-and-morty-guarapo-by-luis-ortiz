import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Box, Button, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CharacterInformations } from '../components/character-detail/CharacterInformations.tsx';
import { CharacterEpisodes } from '../components/character-detail/CharacterEpisodes.tsx';

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

const AVATAR_SIZE = 220;

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

	if (loading) return <div>Cargando...</div>;
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
					<CharacterInformations
						gender={character.gender}
						status={character.status}
						species={character.species}
						origin={character.origin?.name}
						type={character.type}
						location={character.location?.name}
					/>
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

const CharacterHeader = ({ image, name }: { image: string; name: string }) => {
	return (
		<Box>
			<Box
				component='img'
				src={image}
				alt={name}
				sx={{ height: AVATAR_SIZE, width: AVATAR_SIZE, borderRadius: '50%', boxShadow: 2, mb: 2 }}
			/>
			<Typography variant='h4' sx={{ fontWeight: 500, mb: 3 }}>
				{name}
			</Typography>
		</Box>
	);
};
