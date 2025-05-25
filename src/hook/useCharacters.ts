import { useState } from 'react';
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

export function useCharacters(filters: CharacterFiltersValues, firstPage = 1) {
	const [page, setPage] = useState(firstPage);
	const [isFetchingMore, setIsFetchingMore] = useState(false);

	const { data, loading, fetchMore, refetch } = useQuery(GET_CHARACTERS, {
		variables: { page, filter: filters },
		notifyOnNetworkStatusChange: true,
	});

	const setFilters = (newFilters: CharacterFiltersValues) => {
		setPage(firstPage);
		refetch({ page: firstPage, filter: newFilters });
	};

	const loadMore = async () => {
		if (isFetchingMore || !data?.characters.info.next) return;
		setIsFetchingMore(true);
		await fetchMore({
			variables: { page: data.characters.info.next, filter: filters },
		});
		setPage(data.characters.info.next);
		setIsFetchingMore(false);
	};

	return {
		data,
		loading,
		isFetchingMore,
		loadMore,
		setFilters,
	};
}
