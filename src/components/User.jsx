import React from "react";

export default function User({ user: { photoURL, displayName } }) {
  return (
    <>
      <img
        src={photoURL}
        alt={displayName}
        className="w-10 h-10 rounded-full"
      />
      <span className="hidden md:block">{displayName}</span>
    </>
  );
}
