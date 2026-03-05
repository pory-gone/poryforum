import Link from 'next/link'
import styles from '../../styles/Home.module.css'  

export default function Header() {
  return (
    <header>
      <h1 className={styles.halftitle}>
        <Link href="/"><span className={styles.title}>Pory</span>Forum</Link>
      </h1>
    </header>
  )
}