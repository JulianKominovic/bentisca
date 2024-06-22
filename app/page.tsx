import BehanceLogo from "@/components/logos/Behance";

export default function Home() {
  return (
    <main className="grid grid-cols-2 gap-8 min-h-screen max-w-screen-lg mx-auto items-center justify-between p-24">
      <section>
        <h1>GH readme bento</h1>
      </section>
      <aside>
        <BehanceLogo username="example" />
      </aside>
    </main>
  );
}
