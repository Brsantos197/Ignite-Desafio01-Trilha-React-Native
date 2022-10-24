import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    padding: 24,
    paddingTop: 0,
    alignItems: 'center'
  },
  info: {
    width: '100%',
    marginTop: 32,
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: 14,
    fontWeight: "700",
    lineHeight: 16.94
  },
  infoContent: {
    flexDirection: 'row',
  },
  counter: {
    marginLeft: 8,
    backgroundColor: '#333333',
    color: '#D9D9D9',
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  todoList: {
    width: '100%',
    marginTop: 20
  },
  listEmpty: {
    width: '100%',
    alignItems: 'center',
    borderColor: '#333333',
    borderTopWidth: 1
  },
  clipboard: {
    marginTop: 48,
    marginBottom: 16
  }
});