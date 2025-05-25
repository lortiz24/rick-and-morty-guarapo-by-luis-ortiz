import '@testing-library/jest-dom';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { CharacterCard } from '../../../src/components/character/CharacterCard';

describe('CharacterCard', () => {
	const props = {
		name: 'Rick Sanchez',
		image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
		species: 'Human',
		onClick: vi.fn(),
	};

	it('should render name, species and image with correct attributes', () => {
		render(<CharacterCard {...props} />);
		expect(screen.getByText(props.name)).toBeInTheDocument();
		expect(screen.getByText(props.species)).toBeInTheDocument();
		const img = screen.getByRole('img');
		expect(img).toHaveAttribute('src', props.image);
		expect(img).toHaveAttribute('alt', props.name);
	});

	it('should call onClick when the card is clicked', () => {
		render(<CharacterCard {...props} />);
		fireEvent.click(screen.getByRole('img').parentElement!);
		expect(props.onClick).toHaveBeenCalled();
	});
});
