import React from "react";

const CoverLetter = async ({ params }) => {
  const id = await params.id;
  return <div>Cover Letter Page {id}</div>;
};

export default CoverLetter;
