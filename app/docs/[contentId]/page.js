import ContentDisplay from "@/components/ContentDisplay";
import React from "react";

const ContentPage = ({ params: { contentId } }) => {
  return <ContentDisplay id={contentId} />;
};

export default ContentPage;
