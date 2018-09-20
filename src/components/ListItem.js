import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { CardSection } from './common';
import * as actions from '../actions';
import { connect } from 'react-redux';

class ListItem extends Component{
  
  renderDescription(){
    console.log(this.props);
    const { library, selectedLibraryId } = this.props;

    if (library.item.id === selectedLibraryId){
      return (
        <Text>{library.item.description}</Text>
      );
    }
  }


  render(){
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  };
};

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15

  }
});

const mapStateToProps = state => {
  return { selectedLibraryId: state.selectedLibraryId};
}

export default connect(mapStateToProps, actions)(ListItem);
