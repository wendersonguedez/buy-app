import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import { styles } from "./styles";
import { FilterStatus } from "@/types/FilterStatus";
import { StatusIcon } from "@/components/StatusIcon/index";

type FilterProps = TouchableOpacityProps & {
	status: FilterStatus;
	isActive: boolean;
};

export function Filter({ status, isActive, ...rest }: FilterProps) {
	const isActiveOpacity = isActive ? 1 : 0.5;

	return (
		<TouchableOpacity
			style={[styles.container, { opacity: isActiveOpacity }]}
			activeOpacity={0.8}
			{...rest}
		>
			<StatusIcon status={status} />
			<Text style={styles.title}>
				{status === FilterStatus.DONE ? "Comprados" : "Pendentes"}
			</Text>
		</TouchableOpacity>
	);
}
