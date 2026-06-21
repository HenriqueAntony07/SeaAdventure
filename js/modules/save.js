
export function saveGame(data){
  localStorage.setItem('seaAdventureSave', JSON.stringify(data));
}
export function loadGame(){
  const data = localStorage.getItem('seaAdventureSave');
  return data ? JSON.parse(data) : null;
}
