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
   text: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
   title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2f3a70',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4f5e8c',
    textAlign: 'center',
    marginBottom: 10,
  },
  section: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 10,
    color: '#3b64ff',
  },
  sectionText: {
    fontSize: 16,
    color: '#333',
    lineHeight: 22,
  },
  linkButton: {
    backgroundColor: '#3b64ff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    marginTop: 10,
  },
  linkText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
    name: {
    fontSize: 32,
    fontWeight: '800',
    color: '#2f3a70',
    textAlign: 'center',
  },
  tagline: {
    fontSize: 16,
    fontWeight: '400',
    color: '#4f5e8c',
    textAlign: 'center',
    marginBottom: 10,
  },
  card: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: 'rgba(255,255,255,0.85)',
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 3,
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
