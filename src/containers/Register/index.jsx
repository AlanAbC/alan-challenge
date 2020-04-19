import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  Row, Col,
} from 'antd';
import 'antd/dist/antd.css';
import '../App/style.css';
import PropTypes from 'prop-types';
import Wallpaper from '../../img/register_wallpaper.jpg';
import Form from './Form';
import { setUserProfile } from '../../reducers/indexActions';

function Register({ goToPreview, setUserProfile }) {
  return (
    <div>
      <Row>
        <Col span={9}>
          <div className="register-container">
            <p>Registro</p>
            <Form goToPreview={goToPreview} setUserProfile={setUserProfile} />
          </div>
        </Col>
        <Col span={15}>
          <img alt="wallpaper" className="wallpaper" src={Wallpaper} />
        </Col>
      </Row>
    </div>
  );
}

Register.propTypes = {
  goToPreview: PropTypes.func.isRequired,
  setUserProfile: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({

});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    setUserProfile,
    goToPreview: () => push('/preview'),
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Register);
