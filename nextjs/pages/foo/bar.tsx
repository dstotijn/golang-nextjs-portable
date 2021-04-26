import Link from "next/link";

function Bar(): JSX.Element {
  return (
    <div>
      <h1>Bar</h1>
      <p>
        This is <code>pages/foo/bar.tsx</code>.
      </p>
      <p>
        Check out <Link href="/">the homepage</Link>.
      </p>
    </div>
  );
}

export default Bar;
