import { TextArea } from '../TextArea/TextArea.tsx';

export default { component: TextArea };

export const Basic = { args: { } };

export const WithLabel = {
  args: {
    label: 'Your Message',
    labelWeight: 'bold',
    labelColor: 'blue',
    placeholder: 'Type here...',
  },
};

export const StylishTextArea = {
  args: {
    padding: '15px',
    backgroundColor: 'lightyellow',
    borderColor: 'green',
    borderRadius: '10px',
    borderWidth: '2px',
    borderStyle: 'solid',
    textColor: 'darkgreen',
    placeholder: 'Enter text...',
    label: 'Stylish TextArea',
    labelColor: 'darkgreen',
  },
};

export const DarkModeTextArea = {
  args: {
    backgroundColor: '#333',
    textColor: 'white',
    borderColor: 'grey',
    borderRadius: '5px',
    label: 'Dark Mode',
    labelColor: 'white',
    focusOutline: '2px solid cyan',
    placeholder: 'Dark mode...',
  },
};

export const CustomScrollbar = {
  args: {
    backgroundColor: '#f2f2f2',
    scrollbarColor: 'darkgrey blue',
    scrollbarWidth: 'thin',
    label: 'Scrollable TextArea',
    labelColor: 'black',
    placeholder: 'Scroll me...',
  },
};
