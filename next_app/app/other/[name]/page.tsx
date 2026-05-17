import Link from "next/link";
import styles from "../style.module.css";

export default async function Name({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  return (
    <main>
      <h1 className={styles.title}>Name Page</h1>
      <p className={styles.msg}>당신은 {name}님 이군요!</p>
      <div>
        <Link href="/" className={styles.link}>Go to Home</Link>
      </div>
    </main>
  );
}
