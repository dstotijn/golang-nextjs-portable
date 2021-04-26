import Link from "next/link";

function Foo(): JSX.Element {
  return (
    <div>
      <h1>Foo</h1>
      <p>
        This is <code>pages/foo/index.tsx</code>.
      </p>
      <p>
        Check out <Link href="/foo/bar">bar</Link>.
      </p>
    </div>
  );
}

export default Foo;
