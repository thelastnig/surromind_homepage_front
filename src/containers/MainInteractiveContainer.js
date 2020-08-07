import React, { Component } from 'react';
// import TarotMain from '../components/Tarot/TarotMain';
// import * as tarotActions from '../store/modules/tarot';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';
import MainInteractive from '../components/MainInteractive';


class MainInteractiveContainer extends Component {

  componentDidMount() {
    // const { TarotActions } = this.props;
  }

  // handleClickClose = () => {
  //   const { TarotActions } = this.props;

  //   if(!window.confirm('Are you sure to stop?')) {
  //     return;
  //   }

  //   TarotActions.reset();
  //   this.props.history.push('/');
  // }

  render() {
    return (
      <div>
        <MainInteractive/>
      </div>
    );
  }
}


export default connect(
  (state) => ({
    // isLowerHidden: state.tarot.get('isLowerHidden'),
    // tarotType: state.tarot.get('tarotType'),
    // tarotCardNum: state.tarot.get('tarotCardNum'),
    // tarotCardProcess: state.tarot.get('tarotCardProcess').toJS(),
    // tarotProcessColor: state.tarot.get('tarotProcessColor').toJS(),
    // tarotPosition: state.tarot.get('tarotPosition').toJS(),
    // selectedTarot: state.tarot.get('selectedTarot').toJS(),
    // isModalVisible: state.tarot.get('isModalVisible'),
    // currentTarot: state.tarot.get('currentTarot'),
    // currentIndex: state.tarot.get('currentIndex'),
    // tarotQuestion: state.tarot.get('tarotQuestion'),
    // zodiacSign: state.tarot.get('zodiacSign'),
    // tarotProcess: state.tarot.get('tarotProcess'),
    // logged: state.user.get('logged'),
    // loggedInfo: state.user.get('loggedInfo').toJS(),
  }),
  (dispatch) => ({
    // TarotActions: bindActionCreators(tarotActions, dispatch)
  })
)(withRouter(MainInteractiveContainer));