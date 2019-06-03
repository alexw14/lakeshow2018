import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AdminLayout from '../../../hoc/AdminLayout';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import { firebaseMatches } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';

class AdminMatches extends Component {

  state = {
    isLoading: true,
    matches: []
  }

  componentDidMount() {
    firebaseMatches.once('value').then((snapshot) => {
      const matches = firebaseLooper(snapshot);
      this.setState({
        isLoading: false,
        matches: reverseArray(matches)
      })
    });
  }

  render() {
    return (
      <AdminLayout>
        <div>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Opponent</TableCell>
                  <TableCell>Result</TableCell>
                  <TableCell>Final</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.matches ?
                  this.state.matches.map((match, i) => (
                    <TableRow key={i}>
                      <TableCell>{match.date}</TableCell>
                      <TableCell>
                        <Link to={`/admin-games/edit-game/${match.id}`}>
                          {match.at}{match.awayTeam}
                        </Link>
                      </TableCell>
                      <TableCell>{match.result}</TableCell>
                      <TableCell>{match.awayTeamScore} - {match.homeTeamScore} (Lakers)</TableCell>
                    </TableRow>
                  ))
                  : null
                }
              </TableBody>
            </Table>
          </Paper>
        </div>

        <div className="admin_progress">
          {this.state.isLoading ?
            <CircularProgress thickness={7} style={{ color: '#552583' }} />
            : null
          }
        </div>
      </AdminLayout>
    );
  }
}

export default AdminMatches;