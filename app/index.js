import { addParagraph } from './helpers';
import SuperPerson from './person';

const aaron = new SuperPerson('Aaron','create hype');

addParagraph(aaron.talk('RIDLEY CONFIRMED FOR SMASH!'));

addParagraph(aaron.saySuperPower('create hype'));