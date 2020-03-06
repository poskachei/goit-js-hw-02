'use strict';

const formatString = function(string) {
  if (string.length > 40) {
    const deletedScores = string.slice(0, 40);
    console.log(deletedScores + '...');
  } else {
    console.log(string);
  }
};

formatString('Curabitur ligula sapien, tincidunt non.');
formatString('Vestibulum facilisis, purus nec pulvinar iaculis.');
formatString('Curabitur ligula sapien.');
formatString('Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.');
