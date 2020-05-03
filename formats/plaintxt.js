import text from './../chapters/chapter2.js';

const Text = () => {
  return `${text.title() || ''}\n\n${text.preface() || ''}\n\n${text.partA() || ''}\n\n${text.MeanWhile()}\n\n${text.partB() || ''}\n\n${text.partC() || ''}\n\n${text.partD() || ''}\n\n${text.partE() || ''}\n\n${text.partF() || ''}
`;
}

export default { Text };