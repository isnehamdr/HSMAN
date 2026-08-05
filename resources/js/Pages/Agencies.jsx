import AgencyBanner from '@/MainComponent/AgencyBanner';
import React from 'react';

const Agencies = () => {
  // Google Doc download URL (using export function)
  const downloadUrl = 'https://docs.google.com/document/d/1nlar6LP63ybvTsFds6CjR2BGxCY6nj6o/export?format=docx';

  // Alternative: direct view link
  const viewUrl = 'https://docs.google.com/document/d/1nlar6LP63ybvTsFds6CjR2BGxCY6nj6o/edit?pli=1';

  return (
    <>
      <AgencyBanner />
      
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          {/* Document Icon */}
          <div className="mb-6">
            <svg className="w-20 h-20 mx-auto text-blue-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M14 2v5h5" stroke="currentColor" strokeWidth="2" fill="none"/>
              <path d="M8 12h8M8 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            GENERAL MEMBERSHIP APPLICATION FORM
          </h1>
          
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Please download the membership application form, fill it out, and submit it to complete your registration.
          </p>

          {/* Download Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={downloadUrl}
              download="Hospitality_Membership_Application.docx"
              className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200 ease-in-out transform hover:scale-[1.02] shadow-md"
            >
              {/* Download Icon */}
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Application Form
            </a>

            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold rounded-lg transition duration-200 ease-in-out"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Form Online
            </a>
          </div>

          {/* Instructions */}
          <div className="mt-8 text-left bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-700 mb-2">Instructions:</h3>
            <ol className="list-decimal list-inside text-gray-600 space-y-1">
              <li>Click the <strong>Download</strong> button to save the form</li>
              <li>Open the downloaded file in Microsoft Word or Google Docs</li>
              <li>Fill out all required fields marked with *</li>
              <li>Save your completed form</li>
              <li>Email the filled form to <a href="mailto:membership@hospitality.com" className="text-blue-600 hover:underline">membership@hospitality.com</a></li>
            </ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agencies;