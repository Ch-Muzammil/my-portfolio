import { Button } from "@/components/ui/Button";
import { site } from "@/content/site";

export default function NotFound() {
  return (
    <div className="status-page">
      <p className="stat-value">{site.notFound.code}</p>
      <h1>{site.notFound.title}</h1>
      <p className="body-copy">{site.notFound.body}</p>
      <Button href="/">{site.notFound.home}</Button>
    </div>
  );
}
