const USERS_KEY = 'users';

export const getUsersFromStorage = () => {
	try {
		return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
	} catch {
		return [];
	}
};

export const saveUsersToStorage = (users, name = USERS_KEY) => {
	localStorage.setItem(name, JSON.stringify(users));
};