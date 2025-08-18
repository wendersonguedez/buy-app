import { View, Image, TouchableOpacity, Text, FlatList } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Item } from "@/components/Item";
import { Filter } from "@/components/Filter";

import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";
import { useState } from "react";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
const ITEMS = [
	{ id: "1", status: FilterStatus.DONE, description: "1 pacote de café" },
	{ id: "2", status: FilterStatus.PENDING, description: "1 pacote de leite" },
	{ id: "3", status: FilterStatus.PENDING, description: "1 pacote de bolacha" },
	{ id: "4", status: FilterStatus.DONE, description: "1 pacote de arroz" },
];

export function Home() {
	const [activeFilter, setActiveFilter] = useState(FilterStatus.PENDING);

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
						<Filter
							key={status}
							status={status}
							isActive={status === activeFilter}
							onPress={() => setActiveFilter(status)}
						/>
					))}

					<TouchableOpacity style={styles.clearButton}>
						<Text style={styles.clearText}>Limpar</Text>
					</TouchableOpacity>
				</View>

				{/* 
					data => o item que será renderizado.
					keyExtractor => funciona como o 'key', sendo usado para trackear o elemento no momento da renderização.
					renderItem => componente que será renderizado para cada listagem.

					contentContainerStyle => estilização que será aplicada dentro da lista.
					ItemSeparatorComponent => renderização aplicada para cada item da lista.
					ListEmptyComponent => renderização quando a lista está vazia.
				*/}
				<FlatList
					data={ITEMS}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<Item
							data={item}
							onRemove={() => console.log("oi")}
							onStatus={() => console.log("status")}
						/>
					)}
					showsVerticalScrollIndicator={false}
					ItemSeparatorComponent={() => <View style={styles.separator} />}
					contentContainerStyle={styles.listContent}
					ListEmptyComponent={() => (
						<Text style={styles.emptyList}>Nenhum item adicionado.</Text>
					)}
				></FlatList>
			</View>
		</View>
	);
}
