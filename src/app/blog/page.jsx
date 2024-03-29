import React from "react";
import Card from "@/components/Card";
export const metadata = {
  title: "Blog Page",
  description: "Blog Description",
};
const Blogpage = () => {
  return (
    <div className="grid  max-md:grid-cols-2 gap-10 max-sm:grid-cols-1 md:grid-cols-3 mt-10">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default Blogpage;
