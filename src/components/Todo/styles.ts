import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 12,
        height: 64,
        backgroundColor: '#262626',
        borderColor: '#333333',
        borderWidth: 1,
        borderRadius: 8,
        shadowColor: '#0000000f',
        elevation: 3,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8
      },
      checkbox: {
        fontSize: 14,
        borderRadius: 999
      },
      todoText: {
        color: '#F2F2F2',
        fontSize: 14
      },
      todoTextComplete: {
        color: '#808080',
        fontSize: 14,
        textDecorationStyle: 'solid',
        textDecorationLine: 'line-through'
      }
});