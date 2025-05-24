import { useState, useEffect, ChangeEvent } from 'react';
import { CharacterFiltersValues } from '../interfaces/character.interface';
import { useDebounce } from './useDebounce';

export function useCharacterFilters(
	initialFilters: CharacterFiltersValues,
	onChange: (filters: CharacterFiltersValues) => void,
	debounceMs = 500
) {
	const [inputValue, setInputValue] = useState(initialFilters.name);
	const debouncedValue = useDebounce(inputValue, debounceMs);

	useEffect(() => {
		if (debouncedValue !== initialFilters.name) {
			onChange({ ...initialFilters, name: debouncedValue });
		}
	}, [debouncedValue]);

	const handleChange = (
		e:
			| (Event & { target: { value: string; name: string } })
			| ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		if (name === 'name') {
			setInputValue(value as string);
		} else {
			onChange({ ...initialFilters, [name!]: value });
		}
	};

	return {
		inputValue,
		setInputValue,
		handleChange,
	};
}
