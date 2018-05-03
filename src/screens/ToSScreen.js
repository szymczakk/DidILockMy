import React from 'react';
import { View, CheckBox, Text, StyleSheet, Button, ScrollView, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

import Repository from 'util/repository';
import Screens from 'screens/Screens';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },
  title:{
    fontWeight: 'bold'
  },
  acceptTosButton: {
    position: 'relative', 
    bottom: 5
  },
  tosView:{
    height: Dimensions.get('window').height * 0.5
  }
});

export default class ToSScreen extends React.Component{
  constructor(props){
    super(props);
  };

  onAcceptTos = () =>{
    Repository.setItem("TOS:ACCEPTED", true).then(() => {
      this.props.navigation.navigate(Screens.MainScreen);
    });
  };

  render(){
    const {t} = this.props.screenProps;
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>{t("screens:tos:title")}</Text>
        <ScrollView style={styles.tosView}>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies vulputate enim. Suspendisse sollicitudin enim non lobortis pellentesque. Fusce condimentum posuere nunc, quis accumsan ligula congue nec. Nulla auctor lectus a ligula rhoncus bibendum. Donec dictum imperdiet felis ac fringilla. Curabitur consequat quis mauris nec finibus. Integer nec dolor sapien. Pellentesque elementum mi felis, ut congue diam sodales quis. Nullam odio massa, sodales in ex eu, aliquet euismod ligula. Cras sed purus porttitor, fringilla lorem vel, tincidunt ligula. Vivamus nec magna eros. Phasellus volutpat erat a neque mollis, vel pretium leo rhoncus. In placerat tempus ex ullamcorper facilisis. Nam ultrices justo sed mattis dictum. Aliquam nec nibh id sem consequat cursus ut nec nulla. Maecenas iaculis id sapien ut tincidunt.</Text>
          
          <Text>Maecenas commodo ligula in bibendum molestie. Suspendisse dui elit, facilisis ac ipsum in, euismod varius mi. Donec iaculis urna et ex ornare, accumsan fermentum dui rutrum. Donec et purus elementum, feugiat eros sit amet, scelerisque risus. Fusce vel auctor odio. Donec laoreet iaculis velit, id interdum ex luctus sed. Donec blandit ex sed odio viverra, ac mattis dolor dictum.</Text>
          
          <Text>Ut lacinia aliquam porta. Vestibulum eget ornare massa. Aliquam eu quam ac massa rhoncus vehicula eget sed dui. Nunc blandit, felis quis placerat euismod, nulla nunc interdum ligula, vitae aliquet augue nibh a ligula. In gravida ullamcorper orci, eu malesuada massa convallis id. Suspendisse odio lorem, tincidunt vitae sem eget, semper pretium orci. Sed commodo aliquet ex id accumsan. Cras nec nulla faucibus, cursus mi quis, suscipit arcu. Fusce eget faucibus purus, vel egestas quam.</Text>
          
          <Text>Nulla semper quam elit, ac finibus odio porta et. Cras dignissim vel metus sed ullamcorper. Proin auctor nulla neque, sit amet mattis leo interdum vel. Donec id massa libero. Praesent et varius sem. Nulla sed ipsum mi. Mauris congue rutrum ante nec tincidunt. Phasellus non bibendum elit, eget luctus orci. Donec quis aliquet ligula, sit amet accumsan felis. Aliquam non dolor purus. Nam tincidunt in neque sit amet volutpat. Mauris semper gravida neque, a posuere tellus tincidunt non. Pellentesque ut ante a felis posuere bibendum nec a nisi.</Text>
          
          <Text>Maecenas nec felis ligula. Ut vitae justo eu lacus consequat ullamcorper. Sed lobortis, tortor sit amet facilisis pretium, purus velit pulvinar lectus, sit amet interdum purus tortor eu eros. Nulla et gravida elit. Vivamus accumsan sapien non nisl maximus pharetra. Sed blandit nibh in urna molestie, vel rhoncus odio elementum. Etiam sagittis finibus enim, sed ullamcorper orci laoreet ut. In tincidunt sed elit a semper. Aenean id metus nulla.</Text>
        </ScrollView>
        <View style={styles.acceptTosButton}>
          <Button title={t("screens:tos:yes")} onPress={this.onAcceptTos}/>
        </View>
      </View>
    );
  }
};

ToSScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
  screenProps: PropTypes.object.isRequired
}
