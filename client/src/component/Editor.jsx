import Quill from 'quill';
import 'quill/dist/quill.snow.css'
import {Box} from '@mui/material';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import {io} from 'socket.io-client';

const Components = styled.div`
    background: #F5F5F5;
`

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    ['link', 'image', 'video', 'formula'],
  
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
    [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    [{ 'direction': 'rtl' }],                         // text direction
  
    [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'font': [] }],
    [{ 'align': [] }],
  
    ['clean']                                         // remove formatting button
  ];

const Editor = () =>{
    useEffect(()=>{
        const quillServer = new Quill('#container',{
            modules: {
              toolbar: toolbarOptions
            },
            theme: 'snow'
          })
    }, []);

    useEffect(()=>{
        io('http://localhost:9000/')
    } ,[])

    return (
        <Components>
            <Box id="container" className = "container"></Box>
        </Components>
        
    )
}

export default Editor;