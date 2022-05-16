import styles from './FormattedTime.module.scss';

const FormattedTime = ({ time }) => {
   const formatTime = () => {
     
    let milliseconds = parseInt((time % 1000)),
    seconds = Math.floor((time / 1000) % 60),
    minutes = Math.floor((time / (1000 * 60)) % 60),
    hours = Math.floor((time / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return (
       <div>
         <span>{hours}:</span>
         <span>{minutes}:</span>
         <span>{seconds}.</span>
         <span>{milliseconds}</span>
       </div>
     )};

  return (
    <div className={styles.stopwatch}>
       {formatTime(time)}
    </div>
  );

};

export default FormattedTime;
