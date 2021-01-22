import { ContentState, convertToRaw, EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import useActions from 'hooks/useActions';
import htmlToDraft from 'html-to-draftjs';
import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { ACTION_STATUS } from 'utils/constants';
import { selectAddNewsStatus, selectNewsSummaryData } from './selectors';
import { actions } from './slice';
import { StyledForm } from './styles';
import { notifySuccess } from 'utils/notify';

const useHooks = () => {
  const [form] = StyledForm.useForm();
  const [visible, setVisible] = useState(false);
  const [editedNews, setEditedNews] = useState(null);
  const [editorState, setEditorState] = useState(() => {
    const contentBlock = htmlToDraft('');
    const contentState = ContentState.createFromBlockArray(
      contentBlock.contentBlocks,
    );
    return EditorState.createWithContent(contentState);
  });
  const news = useSelector(selectNewsSummaryData);
  const addNewsStatus = useSelector(selectAddNewsStatus);
  const { addNews, getNewsSummary, resetState } = useActions(
    {
      getNews: actions.getNews,
      addNews: actions.addNews,
      getNewsSummary: actions.getNewsSummary,
      resetState: actions.resetState,
    },
    [actions],
  );

  useEffect(() => getNewsSummary(), [getNewsSummary]);

  useEffect(() => () => resetState(), [resetState]);

  useEffect(() => {
    if (editedNews) {
      form.setFieldsValue(editedNews);
      setEditorState(() => {
        const contentBlock = htmlToDraft(editedNews.content ?? '');
        const contentState = ContentState.createFromBlockArray(
          contentBlock.contentBlocks,
        );
        return EditorState.createWithContent(contentState);
      });
    }
  }, [editedNews, form]);

  const handleSaveNews = values => {
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const data = { id: editedNews?.id, ...values, content };
    addNews(data);
  };

  const handleShowAddEditModal = news => {
    if (news) setEditedNews(news);
    setVisible(true);
  };

  const handleHideAddEditModal = useCallback(() => {
    setVisible(false);
    setEditedNews(null);
    form.setFieldsValue({});
    setEditorState(() => {
      const contentBlock = htmlToDraft('');
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks,
      );
      return EditorState.createWithContent(contentState);
    });
  }, [form]);

  useEffect(() => {
    if (addNewsStatus === ACTION_STATUS.SUCCESS) {
      form.resetFields();
      handleHideAddEditModal();
      notifySuccess('Thêm tin tức thành công');
    }
  }, [addNewsStatus, form, handleHideAddEditModal]);

  const handleChangeEditorState = editorState => {
    setEditorState(editorState);
  };

  return {
    handlers: {
      handleShowAddEditModal,
      handleHideAddEditModal,
      handleChangeEditorState,
      handleSaveNews,
    },
    selectors: {
      form,
      news,
      visible,
      editorState,
      editedNews,
      addNewsLoading: addNewsStatus === ACTION_STATUS.PENDING,
    },
  };
};

export default useHooks;
