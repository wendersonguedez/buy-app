import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

import { styles } from "@/components/Button/styles";

type ButtonProps = TouchableOpacityProps & {
	title: string;
};

export function Button({ title = "Adicionar", ...rest }: ButtonProps) {
	return (
		<TouchableOpacity style={styles.container} activeOpacity={0.8} {...rest}>
			<Text style={styles.title}>{title}</Text>
		</TouchableOpacity>
	);
}
