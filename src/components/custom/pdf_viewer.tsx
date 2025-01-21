import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Loader2 } from "lucide-react";
import { Document, Page, pdfjs } from "react-pdf";
import type { PDFDocumentProxy } from "pdfjs-dist";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

interface PDFFile {
  url: string;
}

type PDFViewerProps = {
  pdfFile: PDFFile;
};

const PdfViewer: React.FC<PDFViewerProps> = ({ pdfFile }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);

  const goToPrevPage = (): void => {
    setPageNumber((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = (): void => {
    if (numPages) {
      setPageNumber((prevPage) => Math.min(prevPage + 1, numPages));
    }
  };

  const onDocumentLoadSuccess = ({ numPages }: PDFDocumentProxy): void => {
    setNumPages(numPages);
  };

  return (
    <div className="min-h-screen p-4 bg-gray-50">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            PDF Viewer
          </CardTitle>
        </CardHeader>
        <CardContent>
          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mb-4">
            <Button
              variant="outline"
              onClick={goToPrevPage}
              disabled={pageNumber === 1}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Previous
            </Button>
            <Button
              variant="outline"
              onClick={goToNextPage}
              disabled={pageNumber === numPages}
              className="flex items-center gap-2"
            >
              Next
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* PDF Display Area */}
          <div className="flex items-center justify-center p-4 bg-white border rounded-lg">
            <Document
              file={pdfFile.url}
              onLoadSuccess={() => onDocumentLoadSuccess}
              loading={
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="w-4 h-8 animate-spin" />
                  <p className="text-gray-500">Loading PDF...</p>
                </div>
              }
              error={
                <div className="text-red-500">
                  Failed to load PDF file. Please check the file and try again.
                </div>
              }
            >
              <Page
                pageNumber={pageNumber}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              />
            </Document>
          </div>

          {/* Page Information */}
          <div className="mt-4 text-center text-gray-600">
            Page {pageNumber} of {numPages || 0}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PdfViewer;
