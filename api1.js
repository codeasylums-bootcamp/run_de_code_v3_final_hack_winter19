var un=sessionStorage.getItem('un');
    var arr=new Array;



    function p(){
        document.getElementById("c").innerHTML=`<center>
                    
        <p>
            <button onclick="ab()" class="btn btn-primary" data-toggle="collapse"  role="button" aria-expanded="false" aria-controls="collapseExample">
              Link to API
            </button>
            <button class="btn btn-primary" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
              API_1
            </button>
          </p>
          <div class="collapse" id="collapseExample">
            <div class="card card-body">
            http://localhost:3001/api_2/${un}
            </div>
          </div>
</center>`
    }

    function ab(){
        window.open(`localhost:3001/api_2/${un}`)
    }
    
function fun(){
    axios.get(`http://localhost:3001/api_2/${un}`)
    .then((response)=>{
        console.log("stop")
        
        
        
        console.log(response)
       
    })

    .catch((err) => {
       console.log(err)
    })

    

}

function a(){
    axios.post(`http://localhost:3001/api_2/${un}`,{
        version: 1,
        accountBalanceAmount : 1000,
        accountCurrencyCode : "INR",
        lowBalanceAlert :"NO",
        
        
    })
    .then((response)=>{

        console.log("api");
    })
    .catch((error)=>{

        console.log(error);
    })
}

