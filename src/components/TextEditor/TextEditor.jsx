import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { request } from '../../Service/AuthHelper';

function TestEditor() {
    const [text, setText] = useState('');

    const modules = {
        toolbar: [
            [{ 'header': '1' }, { 'header': '2' }, 'bold', 'italic', { 'list': 'bullet' }],
        ],
    };

    useEffect(() => {
        console.log(text);
    }, [text]);


    // useEffect(() => {
    //     // Simulate fetching content from the database (replace with your database fetch)
    //     const contentFromDatabase = JSON.parse(
    //         '{"blocks":[{"key":"1n2b4","text":"This is a sample text with formatting.","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":5,"length":5,"style":"BOLD"},{"offset":16,"length":9,"style":"ITALIC"}],"entityRanges":[],"data":{}},{"key":"e4shd","text":"• List item 1","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}},{"key":"b9skg","text":"• List item 2","type":"unordered-list-item","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}],"entityMap":{}}'
    //     );
    //     setText(contentFromDatabase);
    // }, []);

    // Function to save editor content to the database (replace with your database save logic)
    // const saveContentToDatabase = () => {
    //     const serializedContent = JSON.stringify(text);
    //     console.log('Saving content to the database:', serializedContent);
    //     // Replace with your database save logic here
    // };




    const saveContentToDatabase = () => {

        request(
            'POST',
            '/api/v1/data/offers',
            {
                "image": "https://example.com/offer-image.png",
                "title": "Data Engineer",
                "location": "Boston",
                "desc": text,
                "company": "test Inc.",
                "type": "Full-time",
                "level": "Senior",
                "createdAt": "2023-09-16T10:15:00Z",
                "salary": "$150,000"
            }
        )
            .then(
                (response) => {
                    console.log(response);
                    console.log(response.data);
                })
            .catch(
                (error) => {
                    console.log(error);
                }
            );

    };

    return (
        <>
            <ReactQuill
                className='border border-gray-700'
                value={text}
                onChange={setText}
                modules={modules}
            />
            <button onClick={saveContentToDatabase}>Save Content</button>
        </>
    );
}

export default TestEditor;
