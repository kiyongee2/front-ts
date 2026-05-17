import Link from "next/link";
// Image 컴포넌트 사용을 위해 import 추가
import Image from "next/image";
import styles from "./style.module.css";

export default function Other() {
  return (
    <main>
      <h1 className={styles.title}>Other Page</h1>
      <p className={styles.msg}>This is the Other page.</p>
      <div>
        <Image src="/tatu.jpg" width={300} height={300} alt="Tatu" /> 
      </div>
      <div>
        <Link href="/">Go to Home</Link>
      </div>
    </main>
  );
}
