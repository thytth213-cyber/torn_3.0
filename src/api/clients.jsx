/*
	API CLIENT (DEV NOTES)

	This file is currently empty. Consider implementing a small centralized
	API client here to keep all fetch/HTTP behavior consistent across the app.

	What to include (suggestions, comment-only list):

	- A single exported function or object that wraps `fetch` (or `axios`) and
		automatically applies the base URL from `import.meta.env.VITE_API_URL`.

	- Automatic authorization header injection (read token from storage or
		provide a setter when token is obtained). Example concept (DO NOT
		implement here if you only want comments):

			// const token = getToken();
			// headers['Authorization'] = `Bearer ${token}`;

	- Centralized error parsing so components get consistent error shapes
		(e.g. {status, message, details}).

	- Helpers for JSON and FormData requests (e.g. postJson, putFormData,
		get, del) to reduce boilerplate across components.

	- Optional: automatic refresh token handling and retry on 401.

	Why this helps:
	- Reduces duplicated code and mistakes (e.g. forgetting headers), simplifies
		testing and migration to libraries like axios, and centralizes logging.

	Security note:
	- Keep auth token handling careful: prefer httpOnly cookies for production
		if the backend supports it. If storing tokens in localStorage, ensure
		you have good XSS protections and short-lived tokens with refresh flow.

*/
