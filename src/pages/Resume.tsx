import PdfViewer from "@/components/custom/pdf_viewer";
import React from "react";

const Resume = () => {
  const pdfFile = {
    url: "https://www.pnm.gov.my/pnm/resources/pdf%20file/PKMM/Undang-undang%20Laut%20(presentation).pdf", // Note the leading slash for public directory
  };

  return <PdfViewer pdfFile={pdfFile} />;
};

export default Resume;
