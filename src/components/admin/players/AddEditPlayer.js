import React, { Component } from 'react';

import AdminLayout from '../../../hoc/AdminLayout';
import FormField from '../../ui/form-fields';
import { validate } from '../../ui/misc';

import FileUploader from '../../ui/file-uploader';
import { firebase, firebaseDB, firebasePlayers } from '../../../firebase';


class AddEditPlayer extends Component {

  state = {
    playerId: '',
    formType: '',
    formError: false,
    formSuccess: '',
    defaultImg: '',
    formData: {
      number: {
        element: 'input',
        value: '',
        config: {
          label: 'Player Number',
          name: 'number_input',
          type: 'text'
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: true
      },
      Player: {
        element: 'input',
        value: '',
        config: {
          label: 'Player Name',
          name: 'name_input',
          type: 'text'
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: true
      },
      Pos: {
        element: 'select',
        value: '',
        config: {
          label: 'Select a position',
          name: 'select_position',
          type: 'select',
          options: [
            { key: 'PG', value: 'PG' },
            { key: 'SG', value: 'SG' },
            { key: 'SF', value: 'SF' },
            { key: 'PF', value: 'PF' },
            { key: 'C', value: 'C' }
          ]
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: true
      },
      Exp: {
        element: 'input',
        value: '',
        config: {
          label: 'Year in league',
          name: 'exp_input',
          type: 'text'
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: true
      },
      image: {
        element: 'image',
        value: '',
        validation: {
          required: true
        },
        valid: false
      }
    }
  }

  updateForm(element, content = '') {
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] }
    if (content === '') {
      newElement.value = element.event.target.value;
    } else {
      newElement.value = content;
    }

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormData[element.id] = newElement;
    this.setState({
      formError: false,
      formData: newFormData
    });
  }

  successForm = (msg) => {
    this.setState({
      formSuccess: msg
    })
    setTimeout(() => {
      this.setState({ formSuccess: '' })
    }, 2000)
  }

  submitForm(event) {
    event.preventDefault();
    let dataToSubmit = {}
    let formIsValid = true;
    for (let key in this.state.formData) {
      dataToSubmit[key] = this.state.formData[key].value;
      formIsValid = this.state.formData[key].valid && formIsValid;
    }
    if (formIsValid) {
      if (this.state.formType === 'Edit player') {
        firebaseDB.ref(`players/${this.state.playerId}`).update(dataToSubmit).then(() => {
          this.successForm('Updated successfully')
        }).catch(error => {
          this.setState({ formError: true })
        })

      } else {
        firebasePlayers.push(dataToSubmit).then(() => {
          this.props.history.push('/admin-players')
        }).catch((e) => {
          this.setState({
            formError: true
          })
        })
      }

    } else {
      this.setState({ formError: true })
    }
  }

  resetImage = () => {
    const newFormData = { ...this.state.formData };
    newFormData['image'].value = '';
    newFormData['image'].valid = false;
    this.setState({
      defaultImg: '',
      formData: newFormData
    })
  }

  storeFilename = (filename) => {
    this.updateForm({ id: 'image' }, filename);
  }

  updateFields = (player, playerId, formType, defaultImg) => {
    const newFormData = { ...this.state.formData };
    for (let key in newFormData) {
      newFormData[key].value = player[key];
      newFormData[key].valid = true;

    }
    this.setState({
      playerId,
      defaultImg,
      formType,
      formData: newFormData
    })
  }

  componentDidMount() {
    const playerId = this.props.match.params.id;

    if (!playerId) {
      this.setState({ formType: 'Add Player' })
    } else {
      firebaseDB.ref(`players/${playerId}`).once('value').then((snapshot) => {
        const playerData = snapshot.val();
        firebase.storage().ref('players').child(playerData.image).getDownloadURL().then((url) => {
          this.updateFields(playerData, playerId, 'Edit player', url);
        })
      })
    }
  }

  render() {
    return (
      <AdminLayout>
        <div className="editplayers_dialog_wrapper">
          <h2>
            {this.state.formType}
          </h2>
          <div>
            <form onSubmit={(event) => this.submitForm(event)}>
              <FileUploader
                dir='players'
                tag={'Player Image'}
                defaultImg={this.state.defaultImg}
                defaultImgName={this.state.formData.image.value}
                resetImage={() => this.resetImage()}
                filename={(filename) => this.storeFilename(filename)}
              />
              <FormField
                id={'number'}
                formData={this.state.formData.number}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={'Player'}
                formData={this.state.formData.Player}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={'Pos'}
                formData={this.state.formData.Pos}
                change={(element) => this.updateForm(element)}
              />
              <FormField
                id={'Exp'}
                formData={this.state.formData.Exp}
                change={(element) => this.updateForm(element)}
              />
              <div className="success_label">{this.state.formSuccess}</div>
              {this.state.formError ?
                <div className="error_label">Something is wrong</div>
                : ''
              }
              <div className="admin_submit">
                <button onClick={(event) => this.submitForm(event)}>
                  {this.state.formType}
                </button>
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>
    );
  }
}

export default AddEditPlayer;