import React from 'react'
import { View,Text, StyleSheet } from 'react-native'

const Layout = ({ Children }) => {
  
    return <View style={styles.container}>{Children}</View>
};

const styles = StyleSheet.create({

        container:{
            backgroundColor:"#222f3e",
        }
});

export default Layout
