import { createMain } from 'noliter';
import { GameOfLifeEngine } from './engine';

const engine = new GameOfLifeEngine([[]]);
const select = document.getElementById('patterns') as HTMLSelectElement;

const fetchLife = () =>
  fetch(`./patterns/${select.value}`)
    .then((res) => res.json())
    .then(({ life }) => {
      engine.stopLife();
      engine.setLife(life);
      engine.startLife();
    });

select.addEventListener('change', () => fetchLife());
document.body.appendChild(
  createMain((main) => {
    main.appendChild(engine.canvas);
    fetchLife();
  })
);

// Add event to btn party-mode
document.querySelector('#party-mode').addEventListener('click', (e:Event) => engine.setPartyMode());

// Filter select options

document.querySelector('#patterns-search').addEventListener('change', (e:Event) => filterFunction());

function filterFunction() {
  var input, filter, ul, li, a, i, div;
  input = document.getElementById("patterns-search");
  filter = input.value.toUpperCase();
  div = document.getElementById("patterns");
  a = div.getElementsByTagName("option");

  for (i = 0; i < a.length; i++) {
    var txtValue = a[i].textContent || a[i].innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}