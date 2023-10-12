"use client"
import NewItem from "./new-item";

export default function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-40">
      <div className="fixed inset-0 bg-black bg-opacity-40" onClick={onClose} />
      <NewItem onClose={onClose} />
    </div>
  );
}
