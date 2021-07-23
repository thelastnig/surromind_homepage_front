import React, { Component } from 'react';
import CareersView from '../components/CareersView';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Map, List } from 'immutable';


class CareersViewContainer extends Component {

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div>
        <CareersView {...this.props}/>
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
)(withRouter(CareersViewContainer));