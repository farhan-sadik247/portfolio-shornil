'use client';

export default function FloatingElements() {
  return (
    <div className="floating-elements">
      {[...Array(20)].map((_, i) => (
        <div key={i} className="float-particle" />
      ))}
    </div>
  );
}
