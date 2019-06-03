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

import { firebasePlayers } from '../../../firebase';
import { firebaseLooper, reverseArray } from '../../ui/misc';

class AdminPlayers extends Component {

  state = {
    isLoading: true,
    players: []
  }

  componentDidMount() {
    firebasePlayers.once('value').then((snapshot) => {
      const players = firebaseLooper(snapshot);
      this.setState({
        isLoading: false,
        players: players
      })
    })
  }

  render() {
    return (
      <AdminLayout>
        <div>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Number</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Year</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.players ?
                  this.state.players.map((player, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        {player.id}
                      </TableCell>
                      <TableCell>
                        <Link to={`/admin-players/edit-player/${player.id}`}>
                          {player.Player}
                        </Link>
                      </TableCell>
                      <TableCell>
                        {player.Pos}
                      </TableCell>
                      <TableCell>
                        {player.Exp}
                      </TableCell>
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

export default AdminPlayers;