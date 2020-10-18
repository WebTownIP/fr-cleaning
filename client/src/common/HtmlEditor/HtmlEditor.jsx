import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import {
  EditorState,
  convertToRaw,
  ContentState,
} from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import styles from './HtmlEditor.scss';

export const HtmlEditor = ({ content, onChange }) => {
  const [editorState, setEditorState] = useState();

  useEffect(() => {
    const contentBlock = htmlToDraft(content || '');

    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);

      setEditorState(EditorState.createWithContent(contentState));
    }
  }, []);

  const onEditorStateChange = useCallback((newEditorState) => {
    setEditorState(newEditorState);

    onChange(draftToHtml(convertToRaw(newEditorState.getCurrentContent())));
  }, [onChange]);

  return (
    <Editor
      editorState={editorState}
      editorClassName={styles.htmlEditor}
      onEditorStateChange={onEditorStateChange}
    />
  );
};
