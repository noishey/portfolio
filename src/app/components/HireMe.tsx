// components/HireMe.tsx
import React from "react";

export default function HireMe() {
  return (
    <a
      href="/cv.pdf"
      download="CV.pdf" // This forces a download with a custom filename
      className="px-4 py-2 text-white rounded-lg transition"
      color= "#A0881A"
    >
      📄 Hire Me
    </a>
  );
}
