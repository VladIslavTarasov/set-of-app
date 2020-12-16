export const modules = {
  history: {
    delay: 1000,
    maxStack: 100,
    userOnly: false,
  },
  toolbar: {
    container: [
      ['bold', 'italic', 'underline', 'strike'],
      [{ list: 'bullet' }, { list: 'ordered' }, { indent: '-1' }, { indent: '+1' }],
      [{ align: '' }, { align: 'center' }, { align: 'right' }, { align: 'justify' }],
      ['link'],
      ['undo', 'redo'],
    ],
  },
};

export const formats = [
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'align',
];
