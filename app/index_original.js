import { addHeader, addParagraph, colorText} from './helpers';
import add from './add';

addHeader('Function from different file');

addHeader(`54 + 67 = ${add(54, 67)}`);

addParagraph('Shabadawa');

colorText('test test', 'green');