import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import css from './ContactForm.module.css';

const ContactForm = ({onAdd}) => {

  const nameFieldId = nanoid();
  const phoneFieldId = nanoid();

    const handleSubmit = (values, actions) => {
		const newContact = { id: nanoid(), name: values.username, number: values.phone };
        onAdd(newContact);
		actions.resetForm();
	};

    const FeedbackMessage = Yup.object().shape({
        username: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required"),
        phone: Yup.string().min(3, "Too Short!").max(50, "Too Long!").required("Required")
      });

    return (
        <Formik initialValues={{ username: "", phone: ""}} onSubmit={handleSubmit} validationSchema={FeedbackMessage}>
            <Form className={css.form}>

                <div className={css.boxInput}>
                    <label htmlFor={nameFieldId}>Name</label>
                    <Field type="text" name="username" id={nameFieldId}/>
                    <ErrorMessage className={css.error} name="username" component="span"/>
                </div>
                <div className={css.boxInput}>
                    <label htmlFor={phoneFieldId}>Number</label>
                    <Field type="phone" name="phone" id={phoneFieldId}/>
                    <ErrorMessage className={css.error} name="phone" component="span"/>
                </div>

                <button className={css.butSubmit} type="submit">Add contact</button>
            </Form>
        </Formik>
    );
}
export default ContactForm;