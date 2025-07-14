import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
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
  },
  inputDisplay: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },
  inputBox: {
    width: 40,
    height: 50,
    borderWidth: 2,
    borderColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  inputText: {
    fontSize: 24,
    fontWeight: "bold",
  },

  sequenceText: {
    fontSize: 96,
    fontWeight: "900",
    color: "#f0f0f0",
    textAlign: "center",
    marginVertical: 60,

    // 3D text-shadow effect
    textShadowColor: "#000000",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 4,

    // Extra shadows to deepen the 3D illusion
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.6,
        shadowRadius: 6,
      },
      android: {
        elevation: 12,
      },
      web: {
        textShadowColor: "#000",
        textShadowOffset: { width: 2, height: 6 },
        textShadowRadius: 8,
      },
    }),
  },
});
