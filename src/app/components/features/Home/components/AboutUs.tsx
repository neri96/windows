import PageSection from "../../../ui/PageSection";

import styles from "./AboutUs.module.scss";

const AboutUs = () => {
  return (
    <PageSection title="About Us">
      <div className={styles.aboutUs__descr}>
        <h3>
          Windows4U specializes in enhancing your home with the best quality
          windows, patio doors, and entry doors. We offer two types of
          installations: Retrofit and New Construction, giving you flexibility
          for your project. We pride ourselves on using only the highest-quality
          materials, including Vinyl, Fiberglass, Aluminum, and wood, ensuring
          lasting durability and aesthetics. Proudly serving the Bay Area, our
          experienced team brings knowledge and dedication to every window and
          door installation. Whether you&apos;re seeking sliding glass doors to
          show your outdoor space, eye-catching windows to capture the
          surrounding beauty, or energy-efficient solutions for your home, look
          no further welcome to Windows4U! The process starts by you contacting
          us. We will then schedule an in-home consultation with our experts.
          Once we understand your needs, we will create order for windows/doors
          that perfectly fit your home. Our skilled professionals will handle
          the installation, ensuring everything is just right. Contact us today
          to get free consultation!
        </h3>
      </div>
    </PageSection>
  );
};

export default AboutUs;
