import { JSDOM } from 'jsdom';

const { window } = (new JSDOM('', { pretendToBeVisual: true }));
const { document, navigator, DOMParser } = window;

global.document = document;
global.window = window;
global.navigator = navigator;
