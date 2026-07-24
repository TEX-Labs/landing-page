"use client";

export default function GlobalError({ reset }) {
  return (
    <html lang="en">
      <body
        style={{
          display: "flex",
          minHeight: "100vh",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          background: "#05060f",
          color: "#e2e8f0",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <h2 style={{ fontSize: "1.25rem", fontWeight: 700 }}>
          Something went wrong.
        </h2>
        <button
          onClick={() => reset()}
          style={{
            borderRadius: "9999px",
            background: "#fff",
            color: "#05060f",
            padding: "0.5rem 1.25rem",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Try again
        </button>
      </body>
    </html>
  );
}
