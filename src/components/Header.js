import React from 'react';
import { StyleSheet, View, Image} from "react-native";

const Header = () =>{
    return (
        <View style = {styles.title}>
            <View style = {styles.icon}>
            <Image 
                style = {styles.search}
                source = {require("../icon/icon.png")}
            />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        width: "100%",
        height: 56,
        paddingRight: 8,
        paddingBottom: 8,
        paddingTop: 8,
    },
    icon:{
        width: 40,
        height: 40,
        display: 'flex',
        alignItems: "center",
        marginLeft: 312,
        padding: "auto",
    },
    search:{
        display:'flex',
        alignSelf: "center",
        marginTop: 11,
    }
});

export default Header;
