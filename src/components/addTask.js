import React, { Component } from "react";
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import commonStyles from "../../commonStyles";

// Serve para reiniciamos o estado
const initialState = { 
    desc: ''
}

export default class AddTask extends Component {

    // Já passa o estado vazio
    state = {
        ...initialState
    }

  render() {
    return (
      <Modal
        transparent={true}
        visible={this.props.isVisible}
        onRequestClose={this.props.onCancel}
        animationType="slide"
      >
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background}></View>
        </TouchableWithoutFeedback>
        <View style={styles.container}>
            <Text style={styles.header}>Nova tarefa</Text>
            <TextInput style={styles.input} value={this.state.desc} onChangeText={desc => this.setState({desc: desc})} placeholder="Informe a Descrição..." />
            <View style={styles.buttons}>
                <TouchableOpacity onPress={this.props.onCancel}><Text style={styles.button}>Cancelar</Text></TouchableOpacity>
                <TouchableOpacity><Text style={styles.button}>Salvar</Text></TouchableOpacity>
            </View>
        </View>
        <TouchableWithoutFeedback onPress={this.props.onCancel}>
          <View style={styles.background}></View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
  container: {
    backgroundColor: '#FFF'
  },
  header: {
    fontFamily: commonStyles.fontFamily,
    backgroundColor: commonStyles.colors.today,
    color: commonStyles.colors.secondary,
    textAlign: 'center',
    padding: 15,
    fontSize: 18,
  },
  input: {
    fontFamily: commonStyles.fontFamily,
    margin: 15,
    height: 40,
    marginTop: 10,
    marginLeft: 10,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#E3E3E3',
    borderRadius: 6
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    margin: 20,
    marginRight: 30,
    color: commonStyles.colors.today
  }
});
