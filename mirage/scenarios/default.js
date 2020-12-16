export default function(server) {
	server.create('parent', { 
    name: 'parent 1',
    children: [
    	server.create('child', { name: 'child 1' }),
  		server.create('child', { name: 'child 2' }),
  		server.create('child', { name: 'child 3' })
    ]
  });
}