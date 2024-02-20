import { StyleSheet, Text, View } from "react-native"
import { Editor } from "../components/Editor";
import { colors } from "../styles/colors";

export const Entry =()=>{

    return(
        <View style={styles.container}>
          <Text style={styles.textLabel}>What happened today?</Text>
            <Editor />
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
      width:'100%',
      height:'100%',
      padding:18,
      backgroundColor: colors.mainBackground
    },
    textLabel: {
      fontSize:16,
      marginTop:20
    }
  });