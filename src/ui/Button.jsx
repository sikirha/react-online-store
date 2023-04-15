import React from "react";

export default function Button({ text, onClick, isUploading }) {
  return (
    <button
      className="bg-brand p-2 px-4 rounded-sm text-white hover:brightness-110"
      onClick={onClick}
      disabled={isUploading}
    >
      {text}
    </button>
  );
}
