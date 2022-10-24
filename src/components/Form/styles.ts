import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    backgroundColor: '#00000000',
    marginTop: -31
  },
  input: {
    height: 54,
    width: 271,
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#262626',
    borderColor: '#0D0D0D',
    color: '#F2F2F2',
    borderWidth: 1,
  },
  inputFocus: {
    height: 54,
    width: 271,
    padding: 16,
    borderRadius: 6,
    backgroundColor: '#262626',
    borderColor: '#5E60CE',
    color: '#F2F2F2',
    borderWidth: 1,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E6F9F',
    borderRadius: 6,
    marginLeft: 4
  },
});