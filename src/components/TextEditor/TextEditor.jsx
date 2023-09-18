import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function TestEditor() {
    const [text, setText] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, 'bold', 'italic', { 'list': 'bullet'}],
        ],
    };

    useEffect(()=>{
        console.log(text);
    }, [text])

    return (
            <ReactQuill
                className='border border-gray-700'
                value={text}
                onChange={setText}
                modules={modules}
            />
    );
}

export default TestEditor;
