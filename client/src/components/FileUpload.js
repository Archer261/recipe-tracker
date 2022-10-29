import React from 'react'


function FileUpload() {
    return (
        <>
            <div class="flex w-4 items-center justify-start bg-grey-lighter py-2">
                <label class="w-20 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-black">
                    <svg class="w-4 h-auto" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span class="text-xs leading-normal">Upload Image</span>
                    <input type='file' class="hidden" />
                </label>
            </div>
        </>
    );
}

export default FileUpload
    ;



