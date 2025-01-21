import * as home from "../home/home.md";

export default function Sidebar() {
  return (
    <nav>
      <h1>{home.frontmatter.title}</h1>
      <h3>{home.frontmatter.subtitle}</h3>
    </nav>
  );
}
