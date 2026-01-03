export default function Pre({ load }) {
  return <div id={load ? "preloader" : "preloader-none"}></div>
}

