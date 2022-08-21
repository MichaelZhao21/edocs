import { markdown } from '@codemirror/lang-markdown';
import { oneDark } from '@codemirror/theme-one-dark';
import { basicSetup, EditorView } from 'codemirror';
import { NextPage } from 'next';
import React, { useEffect, useRef, useState } from 'react';
import Menu from '../../src/Menu';

const EditFile: NextPage = () => {
    const editorDiv = useRef<HTMLDivElement>(null);
    const [editor, setEditor] = useState<EditorView>();
    
    useEffect(() => {
        if (editorDiv.current !== null && !editor) {
            setEditor(
                new EditorView({
                    extensions: [basicSetup, markdown(), oneDark],
                    parent: editorDiv.current,
                })
            );
        }
    }, []);

    return (
        <div>
            <Menu />
            <div style={{ padding: '2rem' }} ref={editorDiv} />
        </div>
    );
};

export default EditFile;
