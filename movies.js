//FETCH AND READ movies.json diskfile
fetch('./movies.json')
.then(Response => Response.json())
.then(data => {

    //Creating a container to hold movies data
        const container = document.createElement('div');
        container.id = 'moviesContainer';

    //Looping through the array in the json data
        data.forEach(movies => {
    // Creating a new div for each customer
            const moviesDiv=document.createElement('div');
            moviesDiv.className = 'movies';

        //Add the movies data to the div
            moviesDiv.innerHTML=`
                <h2>CUSTOMER FIRST NAME: ${getcustfn(movies)}<h2>
                <p>Customer Lastname : ${getcustln(movies)}<p>
                <p> Movie title : ${getmovtitle(movies)}<p>
                <p> Release year: ${getrelyear(movies)}<p>
                <p> Rental date: ${getrendate(movies)}<p>
                <p> Rental price : ${getrenprice(movies)}<p>           
            `;
    
    // Add the movies div to the container
                container.append(moviesDiv);
    
        //Adding data to the console
            console.log(getcustfn(movies));
            console.log(getcustln(movies));
            console.log(getmovtitle(movies));
            console.log(getrelyear(movies));
            console.log(getrendate(movies));
            console.log(getrenprice(movies));
        });

//Adding the container to the body of the HTML
        document.body.append(container);
})

// Adding any errors that occurs while fetching the file
.catch(error=> {
    console.error(error);

});
    
function getcustfn(movies) {
    return `${movies.custfn}`;
}

function getcustln(movies) {
    return `${movies.custln}`;
}

function getmovtitle(movies) {
    return `${movies.movtitle}`;
}

function getrelyear(movies) {
    return `${movies.relyear}`;
}

function getrendate(movies) {
    return `${movies.rendate}`;
}

function getrenprice(movies) {
    return `${movies.renprice}`;
}
