import React from "react";

export default function Page({ params }: { params: { slug: string[] } }) {
  if (params.slug.length === 2) {
    return (
      <h1>
        View docs for feature {params.slug[0]} and concept {params.slug[1]}
      </h1>
    );
  } else if (params.slug.length === 1) {
    return <h1>Viewing docs for feature {params.slug[0]}</h1>;
  }
  return (
    <div>
      <h1>Docs page.</h1>
      <p>Docs pages.</p>
    </div>
  );
}
