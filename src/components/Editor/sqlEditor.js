'use client';

import React, { useEffect } from "react";
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-mysql";
import "ace-builds/src-noconflict/theme-sqlserver";
import "ace-builds/src-min-noconflict/ext-language_tools";

import { useState } from "react";

function SqlEditor({query ,onEditorChange}) {
    const [value, setValue] = useState(query);

    useEffect(() => {
        setValue(query);
    }, [query]);

    useEffect(() => {
        onEditorChange(value);
    }, [value]);

    return (
    <div className="p-2 w-full h-full bg-gray-200">
        <AceEditor
        id="editor"
        aria-label="editor"
        mode="mysql"
        name="editor"
        theme="sqlserver"
        width="100%"
        fontSize={18}
        minLines={15}
        maxLines={10}
        showPrintMargin={false}
        showGutter
        placeholder="Write your query here..."
        editorProps={{ $blockScrolling: true }}
        setOptions={{
            enableBasicAutocompletion: true,
            enableLiveAutocompletion: true,
            enableSnippets: true,
        }}
        value={value}
        onChange={(value) => setValue(value)}
        showLineNumbers
        wrapEnabled={true}
        />
    </div>
    );
}

export default SqlEditor;