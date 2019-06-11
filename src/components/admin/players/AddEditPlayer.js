import React, { Component } from 'react';

import AdminLayout from '../../../hoc/AdminLayout';
import FormField from '../../ui/form-fields';
import { validate } from '../../ui/misc';

import FileUploader from '../../ui/file-uploader';
import { firebase, firebaseDB, firebasePlayers } from '../../../firebase';
import { firebaseLooper } from '../../ui/misc';
import { truncate } from 'fs';

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
        valid: true
      }
    }
  }

  updateForm(element) {
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[element.id] }
    newElement.value = element.event.target.value;

    let validData = validate(newElement);
    newElement.valid = validData[0];
    newElement.validationMessage = validData[1];

    newFormData[element.id] = newElement;
    this.setState({
      formError: false,
      formData: newFormData
    });
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

    } else {
      this.setState({ formError: true })
    }
  }

  resetImage = () => {

  }

  storeFilename = () => {

  }

  componentDidMount() {
    const playerId = this.props.match.params.id;

    if (!playerId) {
      this.setState({ formType: 'Add Player' })
    } else {

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
                filename={(fileName) => this.storeFilename()}
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