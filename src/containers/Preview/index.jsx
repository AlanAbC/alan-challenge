import React, { useContext } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  Row, Col, Button,
} from 'antd';
import 'antd/dist/antd.css';
import PropTypes from 'prop-types';
import Wallpaper from '../../img/info_wallpaper.jpg';
import { Context } from '../../services/register-service';

const Preview = ({
  imageUrl, name, lastname, email, date,
}) => {
  const value = useContext(Context);
  return (
    <div>
      <Row>
        <Col span={9}>
          <div className="register-container">
            <img className="img-preview" clas src={imageUrl} alt="" />
            <p className="text-preview name">{`${name || ''} ${lastname || ''}`}</p>
            <p className="text-preview">{email}</p>
            <p className="text-preview">{date}</p>
            <Button
              onClick={() => value.signUp({
                name, lastname, email, date,
              })}
              type="primary"
              style={{
                border: 'none',
                background: '#ec65c4',
                width: '100%',
                height: '40px',
                marginTop: '50px',
                fontWeight: 'bold',
                fontSize: '18px',
              }}
            >
              Guardar Información
            </Button>
          </div>
        </Col>
        <Col span={15}>
          <img alt="wallpaper" className="wallpaper" src={Wallpaper} />
        </Col>
      </Row>
    </div>
  );
};

Preview.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  imageUrl: state.userProfile.imageUrl,
  name: state.userProfile.name,
  lastname: state.userProfile.lastname,
  email: state.userProfile.email,
  date: state.userProfile.date,
});

const mapDispatchToProps = (dispatch) => bindActionCreators(
  {
    goToRegister: () => push('/register'),
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Preview);
