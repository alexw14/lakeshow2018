import React, { Component } from 'react';

import AdminLayout from '../../../hoc/AdminLayout';
import FormField from '../../ui/form-fields';
import { validate } from '../../ui/misc';



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
      }
    }
  }

  componentDidMount() {
    const matchId = this.props.match.params.id;
    if (!matchId) {

    } else {

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
              </div>
            </form>
          </div>
        </div>
      </AdminLayout>

    );
  }
}

export default AddEditMatch;