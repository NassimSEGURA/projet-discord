import React from "react";

export default function SousCol({ links }) {
  return links.map((link) => <span key={link.id}>{link.text}</span>);
}
