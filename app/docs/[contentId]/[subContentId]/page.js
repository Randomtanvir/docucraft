import ContentDisplay from "@/components/ContentDisplay";
import React from "react";

const SubContentPage = ({ params: { subContentId } }) => {
  return <ContentDisplay id={subContentId} />;
};

export default SubContentPage;
