import AsyncStorage from "@react-native-async-storage/async-storage";
import { FilterStatus } from "@/types/FilterStatus";

const ITEMS_STORAGE_KEY = "@buy:items";

export type ItemStorage = {
	id: string;
	status: FilterStatus;
	description: string;
};

async function get(): Promise<ItemStorage[]> {
	try {
		const storage = await AsyncStorage.getItem(ITEMS_STORAGE_KEY);

		return storage ? JSON.parse(storage) : [];
	} catch (error) {
		/**
		 * Tratando o erro mais pra frente, onde essa função será chamada.
		 */
		throw new Error("ITEMS_GET: " + error);
	}
}

async function getByStatus(status: FilterStatus): Promise<ItemStorage[]> {
	const items = await get();
	return items.filter((item) => item.status === status);
}

/**
 * Função auxiliar do método add(), onde ela fica responsável por salvar o item no aparelho
 * do usuário.
 */
async function save(items: ItemStorage[]): Promise<void> {
	try {
		await AsyncStorage.setItem(ITEMS_STORAGE_KEY, JSON.stringify(items));
	} catch (error) {
		throw new Error("ITEMS_SAVE: " + error);
	}
}

/**
 * Função principal em relação ao método save(), onde recebe o item com as
 * informações digitadas pelo usuário e envia para que possam ser salvas
 * no aparelho.
 */
async function add(newItem: ItemStorage): Promise<ItemStorage[]> {
	const items = await get();
	const updatedItems = [...items, newItem];

	await save(updatedItems);

	return updatedItems;
}

async function remove(id: string): Promise<void> {
	const items = await get();
	const updatedItems = items.filter((item) => item.id !== id);

	await save(updatedItems);
}

export const itemsStorage = {
	get,
	getByStatus,
	add,
	remove,
};
