export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 md:px-48 lg:px-72">
      <div
        style={{
          position: "relative",
          width: "100%",
          height: 0,
          paddingTop: "141.4286%",
          paddingBottom: 0,
          boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
          marginTop: "1em",
          marginBottom: "1em",
          overflow: "hidden",
          borderRadius: 8,
          willChange: "transform"
        }}
      >
        <iframe
          loading="lazy"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            border: "none",
            padding: 0,
            margin: 0
          }}
          src="https://www.canva.com/design/DAF9iuFKopI/9-ijBBLCeOVcbTeYwnsn3Q/view?embed"
          allow="fullscreen"
        ></iframe>
      </div>

    </main>
  );
}
