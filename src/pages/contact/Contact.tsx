import {withFormik, Form, Field} from "formik";
import TextField from "@mui/material/TextField";
import emailjs from "emailjs-com";
import * as yup from "yup";
import {Button, IconButton} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailIcon from "@mui/icons-material/Mail";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

interface iProps {
  touched: {
    name: string;
    email: string;
    message: string;
  };
  errors: {
    name: string;
    email: string;
    message: string;
  };
  isSubmitting: boolean;
  status: boolean;
}

const label = {inputProps: {"aria-label": "Checkbox demo"}};

const ContactPage = ({touched, errors, isSubmitting, status}: iProps) => {
  return (
    <div className="contact-page-container">
      <div className="overlay-color" />

      <div className="contact-page-inner-container">
        <div className="contact-page-header-container">
          <h1>
            Contact <span>Me</span>
          </h1>
        </div>

        <div className="contact-page-contact-information">
          <div className="contact-page-form-container">
            <div className="form-header-container">
              <h3>Send me a message</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                provident voluptates nemo autem delectus voluptate culpa quas.
                Eveniet ducimus sapiente molestiae cum.
              </p>
            </div>
            <Form>
              <Field
                as={TextField}
                type="text"
                name="name"
                label="Your name"
                error={touched.name && errors.name ? true : false}
                helperText={touched.name ? errors.name : null}
              />

              <Field
                as={TextField}
                type="email"
                name="email"
                label="Your email"
                error={touched.email && errors.email ? true : false}
                helperText={touched.email ? errors.email : null}
              />

              <Field
                as={TextField}
                type="text"
                name="message"
                label="Your message"
                variant="outlined"
                error={touched.message && errors.message ? true : false}
                helperText={touched.message ? errors.message : null}
                multiline
                rows={4}
              />

              <div className="robot-checkbox-container">
                <Checkbox {...label} />{" "}
                <p>
                  I'm not a robot <span>🤖</span>
                </p>
              </div>

              <div className="form-button-container">
                <Field
                  type="submit"
                  as={Button}
                  variant="contained"
                  color="secondary"
                  name="submit_button"
                  //disabled={status}
                >
                  Send Message
                </Field>
              </div>
            </Form>
          </div>
          <div className="contact-page-details-container">
            <div className="details-inner-container">
              <div className="detail-container">
                <LocationOnIcon />
                <h3>Address</h3>
                <p>100001, Lagos, Nigeria.</p>
              </div>

              <div className="detail-container">
                <LocalPhoneIcon />
                <h3>Phone</h3>
                <p>+234 90 3579 3269,</p>
                <p>+234 80 2665 8725.</p>
              </div>

              <div className="detail-container">
                <MailIcon />
                <h3>Email</h3>
                <p>sulaimon.olaniran95@gmail.com.</p>
              </div>
            </div>

            <div className="contact-links-container">
              <a
                href="https://github.com/sulaimon-olaniran"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <GitHubIcon />
                </IconButton>
              </a>

              <a
                href="https://twitter.com/sulai_m0n"
                target="_blanak"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </a>

              <a
                href="https://www.linkedin.com/in/sulaimon-olaniran-479672187/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <LinkedInIcon />
                </IconButton>
              </a>

              <a
                href="https://wa.me/2349035793269"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <WhatsAppIcon />
                </IconButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const FormikContactPage = withFormik({
  mapPropsToValues() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },

  // validationSchema: yup.object().shape({
  //   name: yup.string().required("Please tell me your name."),

  //   email: yup.string().email("Invalid email").required("Email is Required"),

  //   message: yup.string().required("What's your message ?"),
  // }),

  handleSubmit(values, {resetForm, setSubmitting, setStatus}) {
    setStatus(true);
    //console.log(values);
    const templatedId = "portfolio";
    const serviceId = "portfolio";
    const userId = "user_KHVompyz6Bjkqit10kCMV";
    // console.log(values);
    emailjs
      .send(serviceId, templatedId, values, userId)
      .then(() => {
        resetForm({});
        setSubmitting(false);
        setStatus(false);
      })
      .catch(error => {
        console.log(error);
        setSubmitting(false);
        setStatus(false);
      });
  },
})(ContactPage);

export default FormikContactPage;
