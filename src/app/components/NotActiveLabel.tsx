import styles from './NotActiveLabel.module.css';

export interface INotActiveLabelProps {
  children: React.ReactNode;
}

const NotActiveLabel: React.FC<INotActiveLabelProps> = ({ children }) => {
  return <span className={styles.label}>{children}</span>;
};

export default NotActiveLabel;
