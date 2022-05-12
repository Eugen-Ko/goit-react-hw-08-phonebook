import { useEditHook } from 'hooks/hooks';
import {
  useCreateContactMutation,
  useEditContactMutation,
} from 'redux/contacts/contactsApi';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field } from 'formik';
import { TextField } from 'formik-mui';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '300px', sm: '400px' },
  bgcolor: 'background.paper',
  border: '2px solid #1976d2',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export const ModalWindow = ({ showModal, onClose, id }) => {
  const [createContact] = useCreateContactMutation();
  const [editContact] = useEditContactMutation();
  const { fields, contacts } = useEditHook(id);
  const { title, name, number } = fields;
  return (
    <>
      <Modal
        aria-labelledby="Add or Edit Contact"
        open={showModal}
        onClose={() => onClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={showModal}>
          <Box sx={style}>
            <Typography
              textAlign="center"
              sx={{ paddingTop: '16px', fontSize: '20px', color: '#1976d2' }}
            >{`${title}`}</Typography>
            <Formik
              initialValues={{
                name,
                number,
              }}
              validate={values => {
                const errors = {};
                if (!values.name) {
                  errors.name = 'Required';
                } else if (
                  contacts.filter(
                    el =>
                      el.name.toLowerCase().trim() ===
                      values.name.toLowerCase().trim()
                  ).length !== 0 &&
                  !id
                ) {
                  errors.name = 'This name is already in the list';
                }
                if (!values.number) {
                  errors.number = 'Required';
                } else if (
                  !/^(\+)?([- _():=+]?\d[- _():=+]?){10,14}$/i.test(
                    values.number
                  )
                  //
                ) {
                  errors.number = 'Invalid phone number';
                }
                return errors;
              }}
              onSubmit={values => {
                !id && createContact({ ...values });
                id && editContact({ id, ...values });
                onClose();
              }}
            >
              {({ submitForm, isSubmitting }) => (
                <Box
                  sx={{
                    padding: { xs: '16px', sm: '16px 24px' },
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <Form>
                    <Box sx={{ height: '75px', marginTop: '15px' }}>
                      <Field
                        component={TextField}
                        name="name"
                        type="name"
                        label="Name"
                        size="small"
                        placeholder={`${name}`}
                      />
                    </Box>
                    <Box sx={{ height: '75px' }}>
                      <Field
                        component={TextField}
                        type="tel"
                        label="Phone number"
                        name="number"
                        size="small"
                        placeholder={`${number}`}
                      />
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={isSubmitting}
                        onClick={submitForm}
                        sx={{ marginRight: '16px' }}
                      >
                        Submit
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={
                          () => onClose()
                          // filter !== '' && !filter
                          //   ? navigate(-1)
                          //   : navigate('/contacts')
                        }
                      >
                        Cancel
                      </Button>
                    </Box>
                  </Form>
                </Box>
              )}
            </Formik>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};
