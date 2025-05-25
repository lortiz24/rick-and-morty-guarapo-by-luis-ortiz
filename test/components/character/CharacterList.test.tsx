import '@testing-library/jest-dom';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CharacterList } from '../../../src/components/character/CharacterList';

describe('CharacterList', () => {
	const characters = [
		{
			id: '1',
			name: 'Rick Sanchez',
			image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
			species: 'Human',
		},
		{
			id: '2',
			name: 'Morty Smith',
			image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
			species: 'Human',
		},
	];

	it('should render all character cards', () => {
		render(<CharacterList characters={characters} />);
		expect(screen.getByText(characters[0].name)).toBeInTheDocument();
		expect(screen.getByText(characters[1].name)).toBeInTheDocument();
	});

	it('should call onCardClick with the correct id when a card is clicked', () => {
		const onCardClick = vi.fn();
		render(<CharacterList characters={characters} onCardClick={onCardClick} />);
		fireEvent.click(screen.getByText(characters[0].name).parentElement!.parentElement!);
		expect(onCardClick).toHaveBeenCalledWith(characters[0].id);
	});

	it('should render the loading spinner when loading is true', () => {
		render(<CharacterList characters={[]} loading />);
		expect(screen.getByRole('progressbar')).toBeInTheDocument();
	});

	it('should disable the Load More button when isLoadingMore is true', () => {
		render(
			<CharacterList characters={characters} hasMore onLoadMore={() => {}} isLoadingMore={true} />
		);
		const button = screen.getByRole('button', { name: /load more/i });
		expect(button).toBeDisabled();
	});
});
