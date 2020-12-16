export default function() {
  this.get('/parents');
  this.get('/parents/:id', { timing: 2000 });
}