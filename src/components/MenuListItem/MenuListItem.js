import styles from './MenuListItem.module.scss';

export default function MenuListItem({ menuItem, handleAddToOrder }) {
  return (
    <div className={styles.MenuListItem}>
      {/* <div className={styles.emoji + ' ' + 'flex-ctr-ctr'}>{menuItem.emoji}</div> */}
      <div className={styles.name}>{menuItem.name}</div>
      <div className={styles.buy}>
        <span>{menuItem.price.toFixed(2)}</span>&nbsp;&nbsp;
        <button className="btn-smADD" onClick={() => handleAddToOrder(menuItem._id)}>
          Add To Order
        </button>
      </div>
    </div>
  );
}