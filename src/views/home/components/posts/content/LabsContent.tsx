import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../../../../styles/Color";
import FontSize from "../../../../../styles/FontSize";

const LabsContent = (item:any) =>{
    return(
        <View style={styles.labelList}>
          {item.props.labs.map((emit: any) => {
            return (
              <TouchableOpacity activeOpacity={0.6} style={styles.labelStyle} key={emit.lableId}>
                <View></View>
                <View style={[styles.labelIcon,Colors.b7c]}>
                  <Text allowFontScaling={false} style={[styles.labelIconText,FontSize.f16]}>#</Text>
                </View>
                <Text allowFontScaling={false} style={styles.labelText}>{emit.lableText}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
    )
}

const styles = StyleSheet.create({
  labelList:{
    flexWrap:'wrap',
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  labelStyle:{
    width:'auto',
    height:24,
    paddingHorizontal:10,
    marginBottom:5,
    borderRadius:12,
    marginRight:3,
    flexDirection:'row',
    justifyContent:'flex-start'
  },
  labelIcon:{
    width:18,
    height:17,
    borderRadius:9,
    marginTop:3.5,
    marginRight:5
  },
  labelIconText:{
    width:18,
    height:17,
    color:'#FFF',
    textAlign:'center',
    lineHeight:18,
  },
  labelText:{
    lineHeight:24
  }
})


export default LabsContent;