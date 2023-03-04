import { useEffect, useState } from 'react';
import { useFetch } from '../../utils/exporter';
import styles from './Branches.module.css';
import LeafMap from './Map/LeafMap';
import { markers } from './Map/mapData';

export default function Branches() {
  const { data: branches } = useFetch(undefined, 'restaurants');
  const [branch, setBranch] = useState('');
  const [centerBranch, setCenterBranch] = useState(null);

  useEffect(() => {
    if (branch !== '') {
      setCenterBranch(
        markers.find(marker => branch.includes(marker.popUp)).geoLoc
      );
    }
  }, [branch]);

  return (
    <section className={styles.branches}>
      <h5 className="header">Our Branches</h5>
      <article className={styles.branches_cont}>
        {branches?.map((res, i) => {
          const { name, address, contact } = res;
          return (
            <div
              className={styles.branch}
              key={i}
              onClick={() => setBranch(name)}
            >
              <h4>{name}</h4>
              <address style={{ color: '#2067a4' }}>{address}</address>
              <span style={{ fontStyle: 'italic' }}>{contact}</span>
            </div>
          );
        })}
      </article>

      <article className={styles.map}>
        {centerBranch !== null ? (
          <LeafMap center={centerBranch} zoom={18} />
        ) : (
          <LeafMap />
        )}
      </article>
    </section>
  );
}
