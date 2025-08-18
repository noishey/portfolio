// components/HireMe.tsx
import React from "react";

export default function HireMe() {
  return (
    <a
      href="/cv.pdf"
      download="CV.pdf" // This forces a download with a custom filename
      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
    >
      📄 Hire Me
    </a>
  );
}
