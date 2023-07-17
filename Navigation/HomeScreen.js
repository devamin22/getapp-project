import { Image, Text, View, Button, ScrollView, StyleSheet } from 'react-native';

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import * as React from 'react';
//import {  } from 'react-native-web';
//import { Button } from 'react-native-web';


async function addDocument() {

    try {
        const docRef = await addDoc(collection(db, "users"), {
          first: "Ada",
          last: "Lovelace",
          born: 1815
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      
      
      const querySnapshot = await getDocs(collection(db, "GAProducts"));
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
}

export default function HomeScreen() {

    return (
        <View style={styles.container}>
            <ScrollView style={{flex: 1}}>
                {/* <Image style={styles.local_image} source={require("../5x7IMG_7062.jpg")}/>
                <Image style={styles.local_image} source={require("../5x7IMG_7062.jpg")}/>
                <Image style={styles.local_image} source={require("../5x7IMG_7062.jpg")}/>
                <Image style={styles.local_image} source={require("../5x7IMG_7062.jpg")}/>
                <Image style={styles.local_image} source={require("../5x7IMG_7062.jpg")}/> */}

            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    local_image: {
        width: 100,
        length: 10,
    }
}
)