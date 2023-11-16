const places = document.getElementById('places'); 


window.addEventListener('click', (e) => {
  if (e.target.getAttribute('type') !== 'button') return;
  e.target.classList.toggle('active');
});

const rectStaticAttributes = [
  ['type', 'button'],
  ['rx', '4'],
  ['height', '17'],
  ['width', '22'],
  ['fill-opacity', 'null'],
  ['stroke-opacity', 'null'],
  ['stroke-width', '0'],
  ['stroke', '#000']
];

const horizontalOffset = 27;
const verticalOffset = 23;

const createRectTag = (id, column, row) => {
  const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  const setRectAttribute = (item) => rect.setAttribute(item[0], item[1])
  rectStaticAttributes.forEach(setRectAttribute);
  [
    ['id', id],
    ['x', 90 + horizontalOffset * column],
    ['y', 194 + verticalOffset * row],
    ['data-text', `Ряд:${row + 1}, Место:${column + 1}`]
  ].forEach(setRectAttribute);
  
  return rect;
}

const placesInEachRow = 15;
const placesCount = 21;

const placesContainer = document.createDocumentFragment();

for (let i = 0, j = -1; i < placesCount; ++i) {
  const column = i % placesInEachRow;
  const row = column === 0 ? ++j : j;
  
  placesContainer.append(createRectTag(`svg_${i + 1}`, column, row));
}

places.append(placesContainer);