import PdfViewer from "@/components/custom/pdf_viewer";
import React from "react";

const Resume = () => {
  const pdfFile = {
    url: "./degree.pdf",
  };

  return <PdfViewer pdfFile={pdfFile} />;
};

export default Resume;
