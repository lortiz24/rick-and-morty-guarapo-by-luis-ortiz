import '@testing-library/jest-dom';
import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CharacterInformations } from '../../../src/components/character-detail/CharacterInformations';

describe('CharacterInformations', () => {
	it('should render the section title', () => {
		render(
			<CharacterInformations>
				<CharacterInformations.Field label='Gender' value='Male' />
			</CharacterInformations>
		);
		expect(screen.getByText('Informations')).toBeInTheDocument();
	});

	it('should render all fields with their labels and values', () => {
		render(
			<CharacterInformations>
				<CharacterInformations.Field label='Gender' value='Male' />
				<CharacterInformations.Field label='Status' value='Alive' />
				<CharacterInformations.Field label='Species' value='Human' />
			</CharacterInformations>
		);

		expect(screen.getByLabelText('Gender - Male')).toBeInTheDocument();
		expect(screen.getByLabelText('Status - Alive')).toBeInTheDocument();
		expect(screen.getByLabelText('Species - Human')).toBeInTheDocument();
	});
});
