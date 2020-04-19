import React from 'react';
import {
  Input, Button, DatePicker, message, Upload,
} from 'antd';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}

function beforeUpload(file) {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('You can only upload JPG/PNG file!');
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error('Image must smaller than 2MB!');
  }
  return isJpgOrPng && isLt2M;
}

const schema = yup.object().shape({
  imageUrl: yup.string().required('Campo Requerido'),
  name: yup.string().required('Campo Requerido'),
  lastname: yup.string().required('Campo Requerido'),
  email: yup.string().email('Email Incorrecto').required('Campo Requerido'),
  date: yup.string().required('Campo Requerido'),
});


export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: '',
    };
  }

  render() {
    const { loading } = this.state;
    const { setUserProfile, goToPreview } = this.props;
    const uploadButton = (
      <div>
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div className="ant-upload-text">Upload</div>
      </div>
    );

    return (
      <Formik
        initialValues={{
          email: '', name: '', lastname: '', date: '', imageUrl: '',
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            const data = {
              email: values.email,
              name: values.name,
              lastname: values.lastname,
              date: values.date,
              imageUrl: values.imageUrl,
            };
            setUserProfile(data);
            setSubmitting(false);
            goToPreview();
          }, 400);
        }}
      >
        {({
          values,
          errors,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          touched,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              beforeUpload={beforeUpload}
              onChange={(info) => {
                if (info.file.status === 'uploading') {
                  this.setState({ loading: true });
                  return;
                }
                if (info.file.status === 'done') {
                  // Get this url from response in real world.
                  getBase64(info.file.originFileObj, (imageUrl) => {
                    setFieldValue('imageUrl', imageUrl, true);
                    this.setState({
                      loading: false,
                    });
                  });
                }
              }}
            >
              {values.imageUrl ? <img src={values.imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
            {errors.imageUrl && touched.imageUrl && <p className="error">{errors.imageUrl}</p>}
            <Input
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              type="text"
              placeholder="Nombre"
              style={{ marginTop: '35px', height: '35px' }}
            />
            {errors.name && touched.name && <p className="error">{errors.name}</p>}
            <Input
              name="lastname"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.lastname}
              type="text"
              placeholder="Apellido"
              style={{ marginTop: '28px', height: '35px' }}
            />
            {errors.lastname && touched.lastname && <p className="error">{errors.lastname}</p>}
            <Input
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              type="email"
              placeholder="Correo"
              style={{ marginTop: '28px', height: '35px' }}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
            <DatePicker
              name="date"
              placeholder="Fecha de Nacimiento"
              style={{ marginTop: '20px', height: '35px' }}
              onChange={(date, dateString) => { setFieldValue('date', dateString, true); }}
            />
            {errors.date && touched.date && <p className="error">{errors.date}</p>}
            <Button
              disabled={isSubmitting}
              htmlType="submit"
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
              Registarme
            </Button>
          </form>
        )}
      </Formik>
    );
  }
}
Form.propTypes = {
  setUserProfile: PropTypes.func.isRequired,
  goToPreview: PropTypes.func.isRequired,
};
