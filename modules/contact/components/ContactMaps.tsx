import React from "react";

export default function ContactMaps() {
  return (
    <section className="py-12 px-8">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d63422.031743031905!2d106.7843584!3d-6.537215999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1698477310024!5m2!1sid!2sid"
        className="rounded mx-auto w-full h-[35vh] border-none"
        loading="lazy"
        name="google-maps"
      />
    </section>
  );
}
