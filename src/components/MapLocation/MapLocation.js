import styles from "./mapLocation.module.css";

const MapLocation = () => {
  return (
    <div className={styles.mapContainer}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7336.747429574274!2d72.6654132!3d23.1565566!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e802cfe647e33%3A0x983a11b5cb484f15!2sPandit%20Deendayal%20Energy%20University-%20PDEU%20(Formerly%20PDPU)!5e0!3m2!1sen!2sin!4v1711815489072!5m2!1sen!2sin"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default MapLocation;
