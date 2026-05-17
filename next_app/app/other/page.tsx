import Link from "next/link";
// Image 컴포넌트 사용을 위해 import 추가
import Image from "next/image";

export default function Other() {
  return (
    <main>
      <h1 className="title">Other Page</h1>
      <div>
        <Image src="/tatu.jpg" width={300} height={300} alt="Tatu" /> 
      </div>
      <div>
        <Link href="/">Go to Home</Link>
      </div>
    </main>
  );
}
