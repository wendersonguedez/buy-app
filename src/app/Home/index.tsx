import { View, Image, TouchableOpacity, Text, ScrollView } from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Item } from "@/components/Item";
import { Filter } from "@/components/Filter";

import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";

const FILTER_STATUS: FilterStatus[] = [FilterStatus.DONE, FilterStatus.PENDING];

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

				<ScrollView>
					{Array.from({ length: 100 }).map((_, index) => (
						<Item
							key={index}
							data={{ description: "Café", status: FilterStatus.DONE }}
							onRemove={() => console.log("oi")}
							onStatus={() => console.log("status")}
						/>
					))}
				</ScrollView>
			</View>
		</View>
	);
}
