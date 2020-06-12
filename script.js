
renderList().then();

async function renderList(){
    let response;
    const url = 'http://localhost:8080/api/v1/items';

  // via fetch API und async await
  response = await fetch( url, { method: 'GET' } );
  response = await response.json();
  console.log( response );


  // dynamische Veränderung mit JavaSkript
  document.body.innerHTML = ` 
    <table class=“table”>
      <thead class=“thead-light”>
      <tr>
        <th scope=“col”>#</th>
        <th scope=“col”>Name</th>
        <th scope=“col”>Location</th>
        <th scope=“col”>Amount</th>
        <th scope=“col”>Description</th>
      </tr>
      </thead>
    <tbody>
    </tbody>
</table>
`;


response.forEach( item => {
  const entry = `
  <tr>
    <th scope="row">${item.id}</th>
    <td>${item.name}</td>
    <td>${item.location}</td>
    <td>${item.amount}</td>
    <td>${item.description || '-'}</td>
    <td>
      <button type="button" id="btn-${item.id}" class="btn btn-danger btn-sm">Delete</button>
    </td>
  </tr>
  `;

  document.querySelector( 'tbody').innerHTML += entry;
  document.querySelector( '#btn-' + item.id ).addEventListener( 'click', async function(){
    await fetch( 'http://localhost:8080/api/v1/item/' + item.id, { method: 'DELETE' } );
    await renderList();

  } );
} );


}


/*



  <table class=“table table-hover”>
        <thead class=“thead-light”>
        <tr>
            <th scope=“col”>#</th>
            <th scope=“col”>Name</th>
            <th scope=“col”>Location</th>
            <th scope=“col”>Amount</th>
            <th scope=“col”>Description</th>
        </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1
                    <td>Lawn mover</td>
                    <td>Basement</td>
                    <td>1</td>
                    <td>Bla description</td>

                </th>

  document.querySelector( 'tbody').innerHTML += entry;
  document.querySelector( '#btn-' + item.id ).addEventListener( 'click', async function(){
    await fetch( 'http://localhost:8080/api/v1/item/' + item.id, { method: 'DELETE' } );
    renderList();

  } );
            </tr>


        </tbody>
    </table>

































<head>
    <title>Items</title>
    <meta name=“viewport” content=“width=device-width, initial-scale=1">
    <link rel=“stylesheet” href=“https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css” integrity=“sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm” crossorigin=“anonymous”>
</head>


<table class=“table table-hover”>
        <thead class=“thead-light”>
          <tr>
            <th scope=“col”>#</th>
            <th scope=“col”>Name</th>
            <th scope=“col”>Location</th>
            <th scope=“col”>Amount</th>
            <th scope=“col”>Description</th>
            <th scope=“col”></th>
            <th scope=“col”></th>
            <th scope=“col”></th>
          </tr>
        </thead>
        <tbody>
        </tbody>
      </table>


*/