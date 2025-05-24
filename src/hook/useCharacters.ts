import { useQuery, gql } from '@apollo/client';
import { CharacterFiltersValues } from '../interfaces/character.interface';

const GET_CHARACTERS = gql`
	query GetCharacters($page: Int, $filter: FilterCharacter) {
		characters(page: $page, filter: $filter) {
			info {
				count
				pages
				next
			}
			results {
				id
				name
				image
				species
			}
		}
	}
`;

export const useCharacters = (filters: CharacterFiltersValues, page: number) => {
	return useQuery(GET_CHARACTERS, {
		variables: { page, filter: filters },
		notifyOnNetworkStatusChange: true,
	});
};
