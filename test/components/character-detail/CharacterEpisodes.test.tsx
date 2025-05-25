import '@testing-library/jest-dom';
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CharacterEpisodes } from '../../../src/components/character-detail/CharacterEpisodes';

describe('CharacterEpisodes', () => {
	const episodes = [
		{
			id: '1',
			episode: 'S01E01',
			name: 'Pilot',
			air_date: 'December 2, 2013',
		},
		{
			id: '2',
			episode: 'S01E02',
			name: 'Lawnmower Dog',
			air_date: 'December 9, 2013',
		},
	];

	it('should render the section title', () => {
		render(<CharacterEpisodes episodes={episodes} scrollHeight={352} />);
		expect(screen.getByText('Episodes')).toBeInTheDocument();
	});

	it('should render all episodes with their details', () => {
		render(<CharacterEpisodes episodes={episodes} scrollHeight={352} />);
		episodes.forEach((ep) => {
			expect(screen.getByText(ep.episode)).toBeInTheDocument();
			expect(screen.getByText(ep.name)).toBeInTheDocument();
			expect(screen.getByText(ep.air_date)).toBeInTheDocument();
		});
	});
});
