import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';


function Front() {
  const [file, setFile] = useState(null);
  const [numPages, setNumPages] = useState(null);

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  function onDocumentLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages);
  }

  const options = {
    cMapUrl: 'cmaps/',
    cMapPacked: true,
  };  

  const pdfjs = require("pdfjs-dist");
  pdfjs.GlobalWorkerOptions.workerSrc = require("pdfjs-dist/build/pdf.worker.entry.js");


  return (
    <div className="Example__container">
        <div className="Example__container__load">
            <label htmlFor="file">Load from file:</label>
            {' '}
            <input
            onChange={onFileChange}
            type="file"
            />
        </div>
        <div className="Example__container__document">
            <Document
            file={file}
            onLoadSuccess={onDocumentLoadSuccess}
            options={options}
            >
            {
                Array.from(
                new Array(numPages),
                (el, index) => (
                    <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    />
                ),
                )
            }
            </Document>
        </div>
    </div>
  );
}

export default Front;
