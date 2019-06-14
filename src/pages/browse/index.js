import React, { Component } from 'react';
import {
  func, shape, arrayOf, string, number, bool,
} from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import {
  Container, Title, List, Playlist,
} from './styles';

import Loading from '../../components/Loading';

class Browse extends Component {
  static propTypes = {
    getPlaylistsRequest: func.isRequired,
    playlists: shape({
      data: arrayOf(
        shape({
          id: number,
          title: string,
          thumbnail: string,
          description: string,
        }),
      ),
      loading: bool,
    }).isRequired,
  };

  componentDidMount() {
    this.props.getPlaylistsRequest();
  }

  render() {
    const { data, loading } = this.props.playlists;
    return (
      <Container>
        <Title>Navegar {loading && <Loading />}</Title>
        <List>
          {data.map(playlist => (
            <Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
              <img src={playlist.thumbnail} alt={playlist.title} />
              <strong>{playlist.title}</strong>
              <p>{playlist.description}</p>
            </Playlist>
          ))}
        </List>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Browse);
