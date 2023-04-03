export default function getData () {
  return fetch('http://localhost:3001/data/').then(res => res.json())
}//must return it