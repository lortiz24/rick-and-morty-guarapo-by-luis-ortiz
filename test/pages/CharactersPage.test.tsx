import '@testing-library/jest-dom';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CharactersPage } from '../../src/pages/CharactersPage';
import * as useCharactersModule from '../../src/hook/useCharacters';
import { MemoryRouter, useNavigate } from 'react-router-dom';

vi.mock('react-router-dom', async (importOriginal) => {
	const actual: any = await importOriginal();
	return {
		...actual,
		useNavigate: () => vi.fn(),
	};
});

const mockCharacters = [
	{ id: '1', name: 'Rick Sanchez', image: 'img1.jpg', species: 'Human' },
	{ id: '2', name: 'Morty Smith', image: 'img2.jpg', species: 'Human' },
];

vi.spyOn(useCharactersModule, 'useCharacters').mockImplementation(() => ({
	data: {
		characters: {
			results: mockCharacters,
			info: { next: null },
		},
	},
	loading: false,
	isFetchingMore: false,
	loadMore: vi.fn(),
	setFilters: vi.fn(),
}));

describe('CharactersPage (integration)', () => {
	it('should render banner, filters, and character list', () => {
		render(
			<MemoryRouter>
				<CharactersPage />
			</MemoryRouter>
		);

		expect(screen.getByAltText('Logo')).toBeInTheDocument();

		expect(screen.getByLabelText(/filter by name/i)).toBeInTheDocument();
		expect(screen.getByLabelText('Species')).toBeInTheDocument();
		expect(screen.getByLabelText('Gender')).toBeInTheDocument();
		expect(screen.getByLabelText('Status')).toBeInTheDocument();

		expect(screen.getByText(mockCharacters[0].name)).toBeInTheDocument();
		expect(screen.getByText(mockCharacters[1].name)).toBeInTheDocument();
	});

	it('should call onCardClick (navigate) when a card is clicked', () => {
		const navigate = vi.fn();
		(useNavigate as unknown as () => typeof navigate) = () => navigate;

		render(
			<MemoryRouter>
				<CharactersPage />
			</MemoryRouter>
		);

		fireEvent.click(screen.getByText(mockCharacters[0].name).parentElement!.parentElement!);
		expect(navigate).toHaveBeenCalledWith(`/characters/detail/${mockCharacters[0].id}`);
	});
});
