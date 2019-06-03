import React, { Component } from 'react';

import AdminLayout from '../../../hoc/AdminLayout';
import FormField from '../../ui/form-fields';
import { validate } from '../../ui/misc';

import { firebaseTeams, firebaseDB, firebaseMatches } from '../../../firebase';
import { firebaseLooper } from '../../ui/misc';


class AddEditMatch extends Component {

  state = {
    matchId: '',
    formType: '',
    formError: false,
    formSuccess: '',
    teams: [],
    formData: {
      date: {
        element: 'input',
        value: '',
        config: {
          label: 'Event date',
          name: 'date_input',
          type: 'date'
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: true
      },
      homeTeam: {
        element: 'select',
        value: '',
        config: {
          label: 'Select Home Team',
          name: 'select_home',
          type: 'select',
          options: []
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: false
      },
      homeTeamScore: {
        element: 'input',
        value: '',
        config: {
          label: 'Home Team Final Score',
          name: 'home_score_input',
          type: 'text'
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: false
      },
      awayTeam: {
        element: 'select',
        value: '',
        config: {
          label: 'Home Team',
          name: 'select_home',
          type: 'select',
          options: []
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: false
      },
      awayTeamScore: {
        element: 'input',
        value: '',
        config: {
          label: 'Home Team Final Score',
          name: 'home_score_input',
          type: 'text'
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: false
      },
      result: {
        element: 'select',
        value: '',
        config: {
          label: 'Team result',
          name: 'select_result',
          type: 'select',
          options: [
            { key: 'W', value: 'W' },
            { key: 'L', value: 'L' }
          ]
        },
        validation: {
          required: true,
        },
        valid: false,
        validationMessage: '',
        showLabel: true
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

  updateFields(match, teamOptions, teams, type, matchId) {
    const newFormData = { ...this.state.formData };
    for (let key in newFormData) {
      if (match) {
        newFormData[key].value = match[key];
        newFormData[key].valid = true;
      }
      if (key === 'homeTeam' || key === "awayTeam") {
        newFormData[key].config.options = teamOptions;
      }
    }
    this.setState({
      matchId,
      formType: type,
      formData: newFormData,
      teams
    })
  }

  componentDidMount() {
    const matchId = this.props.match.params.id;

    const getTeams = (match, type) => {
      firebaseTeams.once('value').then((snapshot) => {
        const teams = firebaseLooper(snapshot);
        const teamOptions = [];
        snapshot.forEach((childSnapshot) => {
          teamOptions.push({
            key: childSnapshot.val().name,
            value: childSnapshot.val().name
          })
        });
        this.updateFields(match, teamOptions, teams, type, matchId)
      })
    }

    if (!matchId) {
      // Add Match
    } else {
      firebaseDB.ref(`matches/${matchId}`).once('value').then((snapshot) => {
        const match = snapshot.val();
        getTeams(match, 'Edit Match');
      })
    }
  }

  successForm(msg) {
    this.setState({ formSuccess: msg });
    setTimeout(() => {
      this.setState({ formSuccess: '' });
    }, 2000);
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
      if (this.state.formType === "Edit Match") {
        firebaseDB.ref(`matches/${this.state.matchId}`).update(dataToSubmit).then(() => {
          this.successForm('Updated successfully');
        }).catch((error) => {
          this.setState({ formError: true })
        })
      } else {
        /// Add match
      }
    } else {
      this.setState({ formError: true })
    }
  }

  render() {
    return (
      <AdminLayout>
        <div className="editmatch_dialog_wrapper">
          <h2>
            {this.state.formType}
          </h2>
          <div>
            <form onSubmit={(event) => this.submitForm(event)}>
              <FormField
                id={'date'}
                formData={this.state.formData.date}
                change={(element) => this.updateForm(element)}
              />
              <div className="select_team_layout">
                <div className="label_inputs">Home</div>
                <div className="wrapper">
                  <div className="left">
                    <FormField
                      id={'homeTeam'}
                      formData={this.state.formData.homeTeam}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                  <div>
                    <FormField
                      id={'homeTeamScore'}
                      formData={this.state.formData.homeTeamScore}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                </div>
              </div>
              <div className="select_team_layout">
                <div className="label_inputs">Away</div>
                <div className="wrapper">
                  <div className="left">
                    <FormField
                      id={'awayTeam'}
                      formData={this.state.formData.awayTeam}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                  <div>
                    <FormField
                      id={'awayTeamScore'}
                      formData={this.state.formData.awayTeamScore}
                      change={(element) => this.updateForm(element)}
                    />
                  </div>
                </div>
              </div>
              <div className="splut_fields last">
                <FormField
                  id={'result'}
                  formData={this.state.formData.result}
                  change={(element) => this.updateForm(element)}
                />
              </div>
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

export default AddEditMatch;