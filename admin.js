function fun(){
    axios.get(`http://localhost:3001/users`)
    .then((response)=>{
        console.log("stop")
        
        var si=response.data.length;
        console.log(si)
        for(let i=0;i<si;i++)
        {document.getElementById("card1").innerHTML+=`
        <div class="col-sm-4" style="margin-bottom: 5%; margin-top: 2%">          
    <div class="card" style="width: 18rem;">
        <img src="https://img.etimg.com/thumb/width-640,height-480,imgsize-61882,resizemode-1,msid-71532480/yes-bank-appoints-new-coo-head-for-marketing.jpg" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${response.data[i].name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="index.html" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>
      </div>
        `}
        
        
        console.log(response)
       
    })

    .catch((err) => {
       console.log(err)
    })
}