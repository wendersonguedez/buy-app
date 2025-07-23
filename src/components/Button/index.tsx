import { TouchableOpacity, Text } from "react-native";

import { styles } from "@/components/Button/styles";

export function Button() {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.7}>
			<Text style={styles.title}>Adicionar</Text>
		</TouchableOpacity>
	);
}
