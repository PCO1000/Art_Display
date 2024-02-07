

// Function to get Photo Info when image figure is clicked
/**
 * @param img_index
 * @param item_index
 * 
 
*/

async function clickedEvent(img_index, item_index){
    // Get Track Name
    let photo_id = document.getElementsByTagName('img')[img_index].attributes[1].value;
    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
    ]);
    let request = new Request(`https://api.artic.edu/api/v1/artworks/${photo_id}`,{
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);
    let response = await result.json();
    console.log(response)
    console.log(response.data.id);

    var newWindow = window.open('', 'newWindow', 'width=400,height=300');
    if (newWindow) {
        // Write content to the new window
        
        newWindow.document.write(`<h1>${response.data.title}</h1>`);
        newWindow.document.write(`<h3>ID: ${response.data.id}</h3>`);
        newWindow.document.write(`<h3>Artist: ${response.data.artist_title}</h3>`);
        newWindow.document.write(`<h3>Display Date: ${response.data.date_display}</h3>`);
        newWindow.document.write(`<h3>Origin: ${response.data.place_of_origin}</h3>`);
        

        // Optional: Close the document. Important if you're writing a full HTML page.
        newWindow.document.close();
    } else {
        alert('The pop-up was blocked. Please allow pop-ups for this website.');
    }
    
}

/**
* @param id
* @param event
* 
* id = image if for gallery image
* event = Mouse event given by the action from our user
* 
* Function produces POPUPS from the clickedEvent based 
* on index of image.
*/

  function getDetail(id,event){
      switch(id){
          case 'fig1': {
              event.stopPropagation();
              clickedEvent(0,0)
              break;
          }
          case 'fig2': {
              event.stopPropagation();
              clickedEvent(1,0)
              break;
          }
          case 'fig3': {
              event.stopPropagation();
              clickedEvent(2,0)
              break;
          }
          case 'fig4': {
              event.stopPropagation();
              clickedEvent(3,0)
              break;
          }
          case 'fig5': {
              event.stopPropagation();
              clickedEvent(4,0)
              break;
          }
          case 'fig6': {
              event.stopPropagation();
              clickedEvent(5,0)
              break;
          }
      }
  }

  