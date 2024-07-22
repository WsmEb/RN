import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  ActivityIndicatorBase,
  Button,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
} from "react-native";

export default function App() {
  const [isVisisble,setVisible] = useState(false);
  const [loading,setLoading] = useState(false);
  const Separator = () => <View style={styles.Separator} />;
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => console.log("Text Pressed")}>
        Everything is good now ('_')
      </Text>
      <Button
        title="Press"
        onPress={() => setVisible((visible) => !visible)}
        color={"midnightblue"}
      />
      <StatusBar style="auto" />
      <Pressable onPress={() => console.log("Image Pressed")}>
        <Image
          style={styles.image}
          source={{
            uri: "https://imgs.search.brave.com/jrrdd37BjzRD8LYO9QW-igiLAhMGm0JTKlcA5s3v5Ig/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjY4NzQ0/NDI5OTQtZDM2MGFk/ZTJmM2IwP2ZtPWpw/ZyZ3PTMwMDAmYXV0/bz1mb3JtYXQmZml0/PWNyb3AmcT02MCZp/eGxpYj1yYi00LjAu/MyZpeGlkPU0zd3hN/akEzZkRCOE1IeHpa/V0Z5WTJoOE5YeDha/R0Z5YTI1bGMzTjha/VzU4TUh4OE1IeDhm/REE9.jpeg",
          }}
        />
      </Pressable>
      <Modal visible={isVisisble}
       animationType="slide"
        presentationStyle="overFullScreen"
        transparent={true}
        statusBarTranslucent={true}
         >
        <View style={styles.containerModel}>
          <Text style={styles.textModel}> Hello from Modal </Text>
          <Separator/>
          
          <Separator/>
          <Button title="Close" color={"green"} onPress={() => setVisible((status) => !status )}  />
          <Separator/>
          <Button title="Show" color={"blue"}  onPress={() => setLoading((status) => !status )}  />
            { loading && (            <ActivityIndicator  size={"large"} color={"plum"} hidesWhenStopped={true} animating={true}/>) }
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({

  textModel : {
    fontWeight:"bold",
    fontSize:19,
    color:"white"
  },
  containerModel: {
    flex : 1,
    height: 200,
    backgroundColor: "midnightblue",
    justifyContent : "center",
    alignItems:"center"
  },
  container: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 400,
    height: 400,
    borderRadius: 10,
  },
  text: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 20,
  },
  Separator : {
    marginTop:10
  }
});
