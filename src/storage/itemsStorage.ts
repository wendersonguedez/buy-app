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
		throw new Error("GET_ITEMS: " + error);
	}
}

export const ItemStorage = {
	get,
};
