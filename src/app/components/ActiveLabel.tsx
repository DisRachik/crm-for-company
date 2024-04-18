import styles from './ActiveLabel.module.css';

export interface IActiveLabelProps {
  children: React.ReactNode;
}

const ActiveLabel: React.FC<IActiveLabelProps> = ({ children }) => {
  return <span className={styles.label}>{children}</span>;
};

export default ActiveLabel;
