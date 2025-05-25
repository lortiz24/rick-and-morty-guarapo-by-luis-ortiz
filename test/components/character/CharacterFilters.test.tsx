import '@testing-library/jest-dom';
import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { CharacterFilters } from '../../../src/components/character/CharacterFilters';
import userEvent from '@testing-library/user-event';

describe('CharacterFilters', () => {
	const defaultFilters = {
		name: '',
		species: '',
		gender: '',
		status: '',
	};

	it('should render all filter fields', () => {
		render(<CharacterFilters filters={defaultFilters} onChange={vi.fn()} />);
		const input = screen.getByLabelText(/filter by name/i);
		const selectSpecies = screen.getByLabelText(/species/i);
		const selectGender = screen.getByLabelText(/gender/i);
		const selectStatus = screen.getByLabelText(/status/i);

		expect(input).toBeInTheDocument();
		expect(selectSpecies).toBeInTheDocument();
		expect(selectGender).toBeInTheDocument();
		expect(selectStatus).toBeInTheDocument();
	});

	it('should call onChange when a select filter changes', async () => {
		const specie = 'Human';
		const onChange = vi.fn();
		render(<CharacterFilters filters={defaultFilters} onChange={onChange} />);

		const select = screen.getByLabelText(/species/i);

		await userEvent.click(select);

		const listbox = screen.getByRole('listbox');

		const option = within(listbox).getByText(specie);
		await userEvent.click(option);

		expect(onChange).toHaveBeenCalledWith({ ...defaultFilters, species: specie });
	});

	it('should debounce the name input before calling onChange', async () => {
		const onChange = vi.fn();
		render(<CharacterFilters filters={defaultFilters} onChange={onChange} />);
		const input = screen.getByLabelText(/filter by name/i);

		fireEvent.change(input, { target: { value: 'Rick' } });
		expect(onChange).not.toHaveBeenCalled();

		await waitFor(
			() => {
				expect(onChange).toHaveBeenCalledWith({ ...defaultFilters, name: 'Rick' });
			},
			{ timeout: 1000 }
		);
	});
});
