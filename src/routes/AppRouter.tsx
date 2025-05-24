import { Routes, Route, Navigate } from 'react-router-dom';
import { CharactersPage } from '../pages/CharactersPage';
import { CharactersDetailPage } from '../pages/CharactersDetailPage';

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/characters' element={<CharactersPage />} />
			<Route path='/characters/detail' element={<CharactersDetailPage />} />
			<Route path='*' element={<Navigate to='/characters' replace />} />
		</Routes>
	);
};
