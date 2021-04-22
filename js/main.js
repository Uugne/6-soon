import {clock} from './components/clock.js';
import { progressBar } from './components/progressBar.js';
import { progressBarData } from './data/progressBarData.js';

clock('#clock_birthday', '03-15 14:30:00');

progressBar('.left-column', progressBarData);