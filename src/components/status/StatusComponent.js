import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  baseText: {
    fontSize: 40,
    fontWeight: 'bold'
  },

  openedText: {
    color: 'red'
  },

  closedText: {
    color: 'green'
  }
});

export default class StatusComponent extends React.Component{
  constructor(props){
    super(props);
  };

  renderDoorWarningText = () =>{
    const { t } = this.props.screenProps;
    if(this.props.doorLocked){
      return(
        <Text style={styles.closedText}>{t('components:status:doorClosed')}</Text>
      )
    }else {
      return(
        <Text style={styles.openedText}>{t('components:status:doorOpened')}</Text>
      )
    }
  }

  render(){
    return(
      <View>
        <Text style={styles.baseText}>
          {this.renderDoorWarningText()}
        </Text>
      </View>
    );
  };
};

StatusComponent.propTypes = {
  doorLocked: PropTypes.bool.isRequired,
  onError: PropTypes.func,
  screenProps: PropTypes.object.isRequired
};