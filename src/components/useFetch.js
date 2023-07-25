import { useState, useEffect } from 'react';

export function useFetch(url, method, body) {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		setLoading(true);
		const headers = {
			'Content-Type': 'application/json',
		};
		fetch(url, {
			headers,
			method,
		})
			.then(response => response.json())
			.then(data => setData(data))
			.catch(error => setError(error))
			.finally(() => setLoading(false));
	}, []);

	return { data, loading, error };
}
