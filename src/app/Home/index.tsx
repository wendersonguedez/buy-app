import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Item } from "@/components/Item";
import { Filter } from "@/components/Filter";

import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];
const ITEMS = Array.from({ length: 100 }).map((_, index) => String(index));

export function Home() {
	return (
		<View style={styles.container}>
			<Image source={require("@/assets/logo.png")} style={styles.logo} />

			<View style={styles.form}>
				<Input placeholder="O que você precisa comprar?" />
				<Button title="Entrar" />
			</View>

			<View style={styles.content}>
				<View style={styles.header}>
					{FILTER_STATUS.map((status) => (
						<Filter status={status} isActive key={status} />
					))}
					<TouchableOpacity style={styles.clearButton}>
						<Text style={styles.clearText}>Limpar</Text>
					</TouchableOpacity>
				</View>

				{/* 
					data => o item que será renderizado.
					keyExtractor => funciona como o 'key', sendo usado para trackear o elemento no momento da renderização.
					renderItem => componente que será renderizado para cada listagem.
				*/}
				<FlatList
					data={ITEMS}
					keyExtractor={(item) => item}
					renderItem={({ item }) => (
						<Item
							data={{
								description: item,
								status: FilterStatus.DONE,
							}}
							onRemove={() => console.log("oi")}
							onStatus={() => console.log("status")}
						/>
					)}
				></FlatList>
			</View>
		</View>
	);
}
