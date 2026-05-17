
export default async function Name({ params }: { params: Promise<{ name: string }> }) {
  const { name } = await params;
  return (
    <main>
      <h1 className="title">Name Page</h1>
      <p className="msg">Hello, {name}!</p>
      <div>
        <a href="/" className="link">Go to Home</a>
      </div>
    </main>
  );
}
