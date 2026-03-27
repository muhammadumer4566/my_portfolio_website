import Image from 'next/image';
import { FaPlay } from 'react-icons/fa';
import placeholder from '../../../assets/png/placeholder.png';
import styles from '../../../styles/singleProject.module.css';

function SingleProject({ id, name, desc, tags, demo, image, theme }) {
  return (
    <div bottom>
      <div className={styles.singleProject} style={{ backgroundColor: theme.quaternary }}>
        <div className={styles.projectContent}>
          <h2>{name}</h2>
          <Image
            src={image || placeholder}
            alt={name}
            width={300}     // Required for next/image
            height={160}    // Required for next/image
            className="rounded"
            objectFit="cover"
          />
          <div className={styles.projectShowcaseBtn}>
            <a
              href={demo}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-[40px] h-[40px] rounded-[50px] border-2 border-[#EFF3F4] hover:border-[#15202B] text-[#EFF3F4] hover:text-[#1D9BF0] transition hover:scale-[1.1]"
            >
              <FaPlay />
            </a>
          </div>
        </div>
        <p className={styles.projectDesc} style={{ background: theme.secondary, color: theme.tertiary }}>
          {desc}
        </p>
        <div className={styles.projectLang} style={{ background: theme.secondary, color: theme.tertiary }}>
          {tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SingleProject;