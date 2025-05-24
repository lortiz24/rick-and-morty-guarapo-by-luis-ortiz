import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppRouter } from './routes/AppRouter';
import { AppLayout } from './layouts/AppLayout';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
	uri: 'https://rickandmortyapi.com/graphql',
	cache: new InMemoryCache({
		typePolicies: {
			Query: {
				fields: {
					characters: {
						keyArgs: ['filter'],
						merge(existing = { results: [] }, incoming) {
							return {
								...incoming,
								results: [...(existing.results || []), ...incoming.results],
							};
						},
					},
				},
			},
		},
	}),
});
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<ApolloProvider client={client}>
			<BrowserRouter>
				<AppLayout>
					<AppRouter />
				</AppLayout>
			</BrowserRouter>
		</ApolloProvider>
	</StrictMode>
);
