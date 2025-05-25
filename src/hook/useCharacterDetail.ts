import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

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
      origin { name id }
      location { name id }
      episode { id name episode air_date }
    }
  }
`;

export function useCharacterDetail() {
  const { characterId } = useParams<{ characterId: string }>();
  const navigate = useNavigate();
  const isValidId = characterId && !isNaN(Number(characterId));

  const { data, loading, error } = useQuery(GET_CHARACTER, {
    variables: { id: characterId },
    skip: !characterId || !isValidId,
  });

  const character = data?.character;

  return {
    characterId,
    isValidId,
    character,
    loading,
    error,
    navigate,
  };
}
