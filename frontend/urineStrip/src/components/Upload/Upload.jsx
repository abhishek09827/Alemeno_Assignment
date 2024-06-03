import React, { useState } from 'react';

const Upload = () => {
    const [file, setFile] = useState(null);
    const [output, setOutput] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if (!file) {
            alert('Please select a file first.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('http://127.0.0.1:8000/api/upload/', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if (data.colors) {
                const formattedColors = data.colors.map(color => `RGB(${color.r}, ${color.g}, ${color.b})`).join('\n');
                setOutput(`Colors:\n${formattedColors}`);
            } else {
                setOutput('No colors found.');
            }
        } catch (error) {
            console.error('Error:', error);
            setOutput('Error uploading file.');
        }
    };

    return (
        <div>
            <h1>Upload Urine Strip Image</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" onChange={handleFileChange} />
                <button type="submit">Upload</button>
            </form>
            <pre>{output}</pre>
        </div>
    );
};

export default Upload;
