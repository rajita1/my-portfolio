import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work.js';

const myWork = [
  {
    'title': "Tickled Pink",

    'desc': "My signature creation and current masterpiece! Imagine a 60-inch long Sterling Silver chain that starts out as an earring and wraps around the neck in layers and layers of about 30 luxurious fuschia feathers and about 50 pink Swarovski bicones. The end of the necklace has an earring hook (42mm curved tube hoop with 1.5mm ball) that can hook to the other year or on to the necklace. For the bold sassy woman who’s not afraid to make a statement.",
    'image': {
      'desc': "Tickled Pink",
      'src': "images/tickled.jpg",
      'comment': ""
    }
  },
  {
    'title': "Carried Away",

    'desc': "This necklace reminds me of lightness, like a warm summer breeze, or falling in love and that first kiss. As the feather caresses your collarbone, you'll want to keep feeling the softness as a cozy emotional retreat from the cares of the world.",
    'image': {
      'desc': "Carried Away",
      'src': "images/carried.jpg",
      'comment': ""
    }
  },
  {
    'title': "And God Created Woman",
    
    'desc': "16 inch Sterling Silver Necklace with a Focal Orchid piece attached to a 5 inch Sterling Silver chain dangle. The whole piece is adorned with femininely dainty pink Swarovski bicone crystals. Makes n uniquely gorgeous bridal piece or a great companion for that those black chiffon cocktail dresses.",
    'image': {
      'desc': "And God Created Woman",
      'src': "images/godwoman.jpg",
      'comment': "And God Created Woman"
    }
  }
];


 ReactDOM.render(<ExampleWork work={myWork}/>, document.getElementById('example-work'));
