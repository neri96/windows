"use client";

import { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

import Input from "@/app/components/ui/Input";
import Select from "@/app/components/ui/Select";
import Button from "@/app/components/ui/Button";
import ContactSuccess from "./ContactSuccess";

import useValidation from "@/app/hooks/useValidation";

import styles from "./ContactForm.module.scss";
import { AnimatePresence } from "framer-motion";

interface IState {
  name: string;
  email: string;
  phone: string;
  service: string;
  details: string;
}

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  details: "",
};

const ContactForm = () => {
  const formRef = useRef<any>();

  const [value, setValue] = useState<IState>(initialState);
  const [error, setError] = useState<IState>(initialState);

  const [successModal, setSuccessModal] = useState<boolean>(false);

  const { validate } = useValidation(["name", "email", "phone"]);

  const handleChange = (e: any) => {
    const name = e.target.name;
    const curentValue = e.target.value;

    if (
      (name === "phone" && isNaN(curentValue)) ||
      (name === "name" && !/(^$)|(^[A-Za-z]+$)/.test(curentValue))
    ) {
      return null;
    }
    setValue({ ...value, [name]: curentValue });
  };

  const handleFocus = (e: any) => {
    const name = e.target.name;

    if (error[name as keyof IState]) {
      setError({ ...error, [e.target.name]: "" });
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const validationErrors = validate(value);

    if (validationErrors) {
      return setError((err) => ({ ...err, ...validationErrors }));
    }

    emailjs
      .sendForm(
        "service_abxijvg",
        "template_w0pvsql",
        formRef.current,
        "uPA15oGxCORm0aUOw"
      )
      .then((result) => {
        if (result.status === 200) {
          setSuccessModal(true);
          setValue({ ...value, ...initialState });
          formRef.current = null;
        }
      });
  };

  return (
    <>
      <div className={styles.contactForm}>
        <div className={styles.contactForm__contactUs}>
          <h3>Contact Us</h3>
        </div>
        <div className={styles.contactForm__wrap}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <Input
              label="Name"
              name="name"
              value={value.name}
              error={error.name}
              handleChange={handleChange}
              handleFocus={handleFocus}
            />
            <Input
              label="Email"
              name="email"
              value={value.email}
              error={error.email}
              handleChange={handleChange}
              handleFocus={handleFocus}
            />
            <Input
              label="Phone"
              name="phone"
              value={value.phone}
              error={error.phone}
              handleChange={handleChange}
              handleFocus={handleFocus}
            />
            <input
              type="hidden"
              name="service"
              value={value.service}
              readOnly
            />
            <Select
              label="Service"
              defaultOption="Select a service"
              chosenOption={value.service}
              list={[
                "door installation",
                "door replacement",
                "window installation",
                "window replacement",
              ]}
              handleClick={(service) => setValue({ ...value, service })}
            />
            <Input
              label="Details"
              name="details"
              placeholder="Optional"
              isTextarea={true}
              value={value.details}
              error={error.details}
              handleChange={handleChange}
              handleFocus={handleFocus}
            />
            <div className={styles.contactForm__button}>
              <Button isSubmitBtn>Send</Button>
            </div>
          </form>
        </div>
      </div>

      <AnimatePresence>
        {successModal && (
          <ContactSuccess closeModal={() => setSuccessModal(false)} />
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactForm;
