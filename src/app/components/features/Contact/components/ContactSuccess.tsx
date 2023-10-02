import Modal from "@/app/components/ui/Modal";

import styles from "./ContactSuccess.module.scss";

const ContactSuccess = ({ closeModal }: { closeModal: () => void }) => {
  return (
    <Modal closeModal={closeModal} additionalStyles={{ height: "150px" }}>
      <div className={styles.contactSuccess}>
        <h4>
          Thank you. Message has been successfully sent, we will review it as
          soon as possible
        </h4>
      </div>
    </Modal>
  );
};

export default ContactSuccess;
