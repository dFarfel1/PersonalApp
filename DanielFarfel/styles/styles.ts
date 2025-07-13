import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    //justifyContent: 'center', // vertical alignment
  },
  keypad: {
    gap: 10,
    alignItems: "center",
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    gap: 10,
  },
  digitButton: {
    width: 60,
    height: 60,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  digitText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },inputDisplay: {
  flexDirection: 'row',
  justifyContent: 'center',
  gap: 10,
  marginBottom: 20,
},
inputBox: {
  width: 40,
  height: 50,
  borderWidth: 2,
  borderColor: '#ccc',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
},
inputText: {
  fontSize: 24,
  fontWeight: 'bold',
},

});
