import { LocalStorageKeys } from "@/types/constants/system";

/**
 * Generated keys can be processed. If you want to add a new key, follow the keys received in the parameter.
 * @param {string} key - System, Auth etc.
 * @enum LocalStorageKeys
 */

const setLocalStorageItem = <T = object>(key: LocalStorageKeys, value: T) => {
	return localStorage.setItem(key, JSON.stringify(value));
};

/**
 * Used to update the values of existing keys generated
 * @enum LocalStorageKeys 
 */

const updateLocalStorageItem = (key: LocalStorageKeys, value: null | object) => {
	const oldData: string | null = localStorage.getItem(key);
	if ((oldData != null) && value !== null) {
		const newData = {
			...JSON.parse(oldData),
			...value as Record<string, unknown>
		};
		setLocalStorageItem(key, newData);
	}
};

/**
 * Retrieves the desired key already created in the localStorage.
 * @enum LocalStorageKeys
 * @returns System, Auth in values
 */

const getLocalStorageItem = (key: LocalStorageKeys) => {
	const data = localStorage.getItem(key);
	return (data) ? JSON.parse(data) : null;
};

/**
 * Specifically deletes generated key.
 * @enum LocalStorageKeys
 */

const deleteLocalStorageItem = (key: LocalStorageKeys) => {
	return localStorage.removeItem(key);
};

/**
 * Clears all localStorage data.
 * @enum LocalStorageKeys
 */

const clearFromLocalStorage = () => {
	return localStorage.clear();
};

export const LocalStorageService = {
	setLocalStorageItem,
	updateLocalStorageItem,
	getLocalStorageItem,
	deleteLocalStorageItem,
	clearFromLocalStorage
};